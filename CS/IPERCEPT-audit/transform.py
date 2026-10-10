import math
import torch
import torch

# Dilation is used for the reg-loss on the phosphene image: phosphenes do not have to map 1 on 1, small offset is allowed.
def dilation5x5(img, kernel=None):
    if kernel is None:
        kernel = torch.tensor([[[[0., 0., 1., 0., 0.],
                              [0., 1., 1., 1., 0.],
                              [1., 1., 1., 1., 1.],
                              [0., 1., 1., 1., 0.],
                              [0., 0., 1., 0., 0.]]]], requires_grad=False, device=img.device)
    return torch.clamp(torch.nn.functional.conv2d(img, kernel, padding=kernel.shape[-1]//2), 0, 1)

def dilation3x3(img, kernel=None):
    if kernel is None:
        kernel = torch.tensor([[[
                              [ 0, 1., 0.],
                              [ 1., 1., 1.],
                              [ 0., 1., 0.],]]], requires_grad=False, device=img.device)
    return torch.clamp(torch.nn.functional.conv2d(img, kernel, padding=kernel.shape[-1]//2), 0, 1)

def resize(x, out_size=(256,256), interpolation='bilinear'):
    """interpolate/resize tensor to out_size"""
    return torch.nn.functional.interpolate(x, size=out_size, mode=interpolation)

def normalize(x):
    """scale to range [0, 1]"""
    return (x - x.min()) / (x.max()-x.min())

def undo_standardize(x, mean=0.459, std=0.227):
    """maps standardized grayscale images to range [0, 1]"""
    return (x*std+mean).clip(0,1)
    
def affine_params_to_theta(a):
    """
    a: [B, 7] = [tx, ty, rot, log_sx, log_sy, shx, shy]
    """
    torch.use_deterministic_algorithms(False)
    torch.set_deterministic_debug_mode(0)
    tx, ty, rot, log_sx, log_sy, shx, shy = torch.unbind(a, dim=-1)

    # translation
    tx = 0.3 * torch.tanh(tx)
    ty = 0.3 * torch.tanh(ty)

    # rotation: ±15°
    rot = (math.pi / 3.0) * torch.tanh(rot)

    # scale
    sx = torch.exp(0 * torch.tanh(log_sx))
    sy = torch.exp(0 * torch.tanh(log_sy))

    # shear; it is recommended to keep this range small
    shx = 0.3 * torch.tanh(shx)
    shy = 0.3 * torch.tanh(shy)

    cos_r = torch.cos(rot)
    sin_r = torch.sin(rot)

    # Rotation
    R = torch.stack([
        torch.stack([cos_r, -sin_r], dim=-1),
        torch.stack([sin_r,  cos_r], dim=-1),
    ], dim=-2)   # [B, 2, 2]

    # Scale
    S = torch.zeros(a.size(0), 2, 2, device=a.device, dtype=a.dtype)
    S[:, 0, 0] = sx
    S[:, 1, 1] = sy

    # Shear
    Sh = torch.zeros_like(S)
    Sh[:, 0, 0] = 1.0
    Sh[:, 1, 1] = 1.0
    Sh[:, 0, 1] = shx
    Sh[:, 1, 0] = shy

    # Linear part: scale, then shear, then rotate
    A = R @ Sh @ S

    theta = torch.zeros(a.size(0), 2, 3, device=a.device, dtype=a.dtype)
    theta[:, :, :2] = A
    theta[:, 0, 2] = tx
    theta[:, 1, 2] = ty
    return theta

# grid: [B, H, W, 2]
# params: [B, K, 4]
# params[..., 0:2] = control point positions cx, cy, range [-1, 1]
# params[..., 2:4] = control point displacements dx, dy, recommended range [-0.05, 0.05]

def add_local_random_warp(grid, local_params, sigma=0.3):
    B, H, W, _ = grid.shape
    K = local_params.size(1)

    centers = local_params[..., 0:2]   # [B, K, 2]
    shifts = local_params[..., 2:4]    # [B, K, 2]

    g = grid.unsqueeze(1)        # [B, 1, H, W, 2]
    c = centers[:, :, None, None, :]  # [B, K, 1, 1, 2]

    dist2 = ((g - c) ** 2).sum(dim=-1, keepdim=True)  # [B, K, H, W, 1]

    weight = torch.exp(-dist2 / (2 * sigma ** 2))     # The closer to the control point, the greater the influence

    disp = (weight * shifts[:, :, None, None, :]).sum(dim=1)  # [B, H, W, 2]

    return grid + disp