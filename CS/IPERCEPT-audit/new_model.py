import torch
import torch.nn as nn
import torch.nn.functional as F
from torch.distributions import Normal, Independent
from dynaphos.simulator import GaussianSimulator as PhospheneSimulator
import math
import copy
import math
import torch
import torch.nn as nn
import torch.nn.functional as F
from torch.distributions import Normal, Independent
from transform import *

def convlayer(n_input, n_output, k_size=3, stride=1, padding=1, resample_out=None):
    layer = [
        nn.Conv2d(n_input, n_output, kernel_size=k_size, stride=stride, padding=padding, bias=False),
        nn.BatchNorm2d(n_output),
        nn.LeakyReLU(inplace=True),
        resample_out]
    if resample_out is None:
        layer.pop()
    return layer
class ResidualBlock(nn.Module):
    def __init__(self, n_channels, stride=1, resample_out=None):
        super(ResidualBlock, self).__init__()
        self.conv1 = nn.Conv2d(n_channels, n_channels,kernel_size=3, stride=1,padding=1)
        self.bn1 = nn.BatchNorm2d(n_channels)
        self.relu = nn.LeakyReLU(inplace=True)
        self.conv2 = nn.Conv2d(n_channels, n_channels,kernel_size=3, stride=1,padding=1)
        self.bn2 = nn.BatchNorm2d(n_channels)
        self.resample_out = resample_out

    def forward(self, x):
        residual = x
        out = self.conv1(x)
        out = self.bn1(out)
        out = self.relu(out)
        out = self.conv2(out)
        out = self.bn2(out)
        out += residual
        out = self.relu(out)
        if self.resample_out:
            out = self.resample_out(out)
        return out

class PolicyFeatureRBFDeformEncoder_brightness(nn.Module):
    def __init__(
        self, in_channels=3, n_electrodes=638, out_scaling=1e-4,out_activation="relu",
        min_log_std=-6.0, max_log_std=2.0,init_log_std=0.5,
        global_shift_scale=0.15, global_rotate_scale=0.15,
        rbf_shift_scale=0.05,num_rbf_points=64,rbf_grid_size=(8, 8),
        init_sigma=0.35,min_sigma=0.08,max_sigma=0.8,):
        super().__init__()

        self.output_scaling = out_scaling
        self.min_log_std = min_log_std
        self.max_log_std = max_log_std

        self.global_shift_scale = global_shift_scale
        self.rbf_shift_scale = rbf_shift_scale
        self.global_rotate_scale = global_rotate_scale

        self.num_rbf_points = num_rbf_points
        self.min_sigma = min_sigma
        self.max_sigma = max_sigma

        self.feature_encoder = nn.Sequential(
            *convlayer(in_channels, 8, 3, 1, 1),
            *convlayer(8, 16, 3, 1, 1, resample_out=nn.MaxPool2d(2)),
            *convlayer(16, 32, 3, 1, 1, resample_out=nn.MaxPool2d(2)),
            ResidualBlock(32, resample_out=None),
            ResidualBlock(32, resample_out=None),
            ResidualBlock(32, resample_out=None),
            ResidualBlock(32, resample_out=None),
            *convlayer(32, 16, 3, 1, 1),
            nn.Conv2d(16, 1, 3, 1, 1),
        )

        self.stim_mapping = nn.LazyLinear(n_electrodes)

        self.out_activation = {
            "tanh": nn.Tanh(),
            "sigmoid": nn.Sigmoid(),
            "relu": nn.ReLU(),
            "softmax": nn.Softmax(dim=1),
        }[out_activation]

        self.global_shift_mean = nn.Parameter(torch.zeros(1, 1, 2))
        self.global_shift_log_std = nn.Parameter(torch.full((1, 1, 2), init_log_std))

        self.global_rotate_mean = nn.Parameter(torch.zeros(1, 1, 1))
        self.global_rotate_log_std = nn.Parameter(torch.full((1, 1, 1), init_log_std))

        centers = self.make_fixed_rbf_centers(rbf_grid_size, num_rbf_points)
        self.register_buffer("rbf_centers", centers)

        self.rbf_shift_mean = nn.Parameter(torch.zeros(num_rbf_points, 2))
        self.rbf_shift_log_std = nn.Parameter(torch.full((num_rbf_points, 2), -3.0))

        self.rbf_gate_logit_mean = nn.Parameter(torch.full((num_rbf_points, 1), -1.0))
        self.rbf_gate_logit_log_std = nn.Parameter(torch.full((num_rbf_points, 1), init_log_std))

        init_raw_sigma = torch.log(torch.exp(torch.tensor(init_sigma)) - 1.0)
        self.rbf_raw_sigma_mean = nn.Parameter(torch.full((num_rbf_points, 1), init_raw_sigma.item()))
        self.rbf_raw_sigma_log_std = nn.Parameter(torch.full((num_rbf_points, 1), init_log_std))

        # stimulation scale distribution
        # raw scale is mapped to [0.5, 1.5] via 0.5 + sigmoid(raw)
        self.stim_scale_raw_mean = nn.Parameter(torch.zeros(1, 1))
        self.stim_scale_raw_log_std = nn.Parameter(torch.full((1, 1), 1.0))

    def make_fixed_rbf_centers(self, rbf_grid_size, num_rbf_points):
        Hc, Wc = rbf_grid_size
        ys = torch.linspace(-1.0, 1.0, Hc)
        xs = torch.linspace(-1.0, 1.0, Wc)
        yy, xx = torch.meshgrid(ys, xs, indexing="ij")
        centers = torch.stack([xx, yy], dim=-1).reshape(-1, 2)

        if centers.shape[0] < num_rbf_points:
            raise ValueError("rbf_grid_size does not provide enough points.")

        return centers[:num_rbf_points]

    def raw_to_stim_scale(self, stim_scale_raw):
        log_scale = torch.clamp(0.8 * stim_scale_raw, -1.0, 2.0)
        return torch.exp(log_scale)

    def encode_feature(self, x):
        return self.feature_encoder(x)

    def flatten_feature(self, h):
        return h.flatten(start_dim=1)

    def make_identity_grid(self, B, H, W, device, dtype):
        ys = torch.linspace(-1.0, 1.0, H, device=device, dtype=dtype)
        xs = torch.linspace(-1.0, 1.0, W, device=device, dtype=dtype)
        yy, xx = torch.meshgrid(ys, xs, indexing="ij")
        grid = torch.stack([xx, yy], dim=-1)
        return grid.unsqueeze(0).expand(B, H, W, 2)

    def get_stim_scale_dist_from_h(self, h):
        B = h.shape[0]

        log_std = torch.clamp(self.stim_scale_raw_log_std,min=self.min_log_std,max=self.max_log_std,)

        mean = self.stim_scale_raw_mean.unsqueeze(0).expand(B, -1, -1)
        log_std = log_std.unsqueeze(0).expand(B, -1, -1)
        std = torch.exp(log_std)

        dist = Independent(Normal(mean, std), 2)
        return dist, mean, std, log_std

    def get_rotate_dist_from_h(self, h):
        B = h.shape[0]
        log_std = torch.clamp(self.global_rotate_log_std, self.min_log_std, self.max_log_std)
        mean = self.global_rotate_mean.unsqueeze(0).expand(B, -1, -1, -1)
        log_std = log_std.unsqueeze(0).expand(B, -1, -1, -1)
        std = torch.exp(log_std)
        dist = Independent(Normal(mean, std), 3)
        return dist, mean, std, log_std

    def get_shift_dist_from_h(self, h):
        B = h.shape[0]
        log_std = torch.clamp(self.global_shift_log_std, self.min_log_std, self.max_log_std)
        mean = self.global_shift_mean.unsqueeze(0).expand(B, -1, -1, -1)
        log_std = log_std.unsqueeze(0).expand(B, -1, -1, -1)
        std = torch.exp(log_std)
        dist = Independent(Normal(mean, std), 3)
        return dist, mean, std, log_std

    def get_rbf_dist_from_h(self, h):
        B = h.shape[0]
        log_std = torch.clamp(self.rbf_shift_log_std, self.min_log_std, self.max_log_std)
        mean = self.rbf_shift_mean.unsqueeze(0).expand(B, -1, -1)
        log_std = log_std.unsqueeze(0).expand(B, -1, -1)
        std = torch.exp(log_std)
        dist = Independent(Normal(mean, std), 2)
        return dist, mean, std, log_std

    def get_rbf_gate_dist_from_h(self, h):
        B = h.shape[0]
        log_std = torch.clamp(self.rbf_gate_logit_log_std, self.min_log_std, self.max_log_std)
        mean = self.rbf_gate_logit_mean.unsqueeze(0).expand(B, -1, -1)
        log_std = log_std.unsqueeze(0).expand(B, -1, -1)
        std = torch.exp(log_std)
        dist = Independent(Normal(mean, std), 2)
        return dist, mean, std, log_std

    def get_rbf_sigma_dist_from_h(self, h):
        B = h.shape[0]
        log_std = torch.clamp(self.rbf_raw_sigma_log_std, self.min_log_std, self.max_log_std)
        mean = self.rbf_raw_sigma_mean.unsqueeze(0).expand(B, -1, -1)
        log_std = log_std.unsqueeze(0).expand(B, -1, -1)
        std = torch.exp(log_std)
        dist = Independent(Normal(mean, std), 2)
        return dist, mean, std, log_std

    def pack_action(
        self, global_shift, global_rotate,rbf_shifts,rbf_gate_logit,rbf_raw_sigma,stim_scale_raw,):
        B = global_shift.shape[0]
        return torch.cat(
            [
                global_shift.reshape(B, 2),
                global_rotate.reshape(B, 1),
                rbf_shifts.reshape(B, -1),
                rbf_gate_logit.reshape(B, -1),
                rbf_raw_sigma.reshape(B, -1),
                stim_scale_raw.reshape(B, 1),
            ],
            dim=1,
        )

    def unpack_action(self, action):
        B = action.shape[0]
        K = self.num_rbf_points

        global_shift = action[:, :2].reshape(B, 1, 1, 2)
        global_rotate = action[:, 2:3].reshape(B, 1, 1, 1)

        start = 3
        end = start + K * 2
        rbf_shifts = action[:, start:end].reshape(B, K, 2)

        start = end
        end = start + K
        rbf_gate_logit = action[:, start:end].reshape(B, K, 1)

        start = end
        end = start + K
        rbf_raw_sigma = action[:, start:end].reshape(B, K, 1)

        start = end
        end = start + 1
        stim_scale_raw = action[:, start:end].reshape(B, 1, 1)

        return (
            global_shift,
            global_rotate,
            rbf_shifts,
            rbf_gate_logit,
            rbf_raw_sigma,
            stim_scale_raw,
        )

    def rbf_shifts_to_disp(self, base_grid, rbf_shifts, rbf_gate_logit, rbf_raw_sigma):
        B, H, W, _ = base_grid.shape
        K = self.num_rbf_points

        centers = self.rbf_centers.to(device=base_grid.device,dtype=base_grid.dtype,).view(1, 1, 1, K, 2)

        sigma = F.softplus(rbf_raw_sigma)
        sigma = torch.clamp(sigma, self.min_sigma, self.max_sigma)
        sigma = sigma.to(device=base_grid.device, dtype=base_grid.dtype)
        sigma = sigma.view(B, 1, 1, K, 1)

        gate = torch.sigmoid(rbf_gate_logit)
        gate = gate.to(device=base_grid.device, dtype=base_grid.dtype)
        gate = gate.view(B, 1, 1, K, 1)

        diff = base_grid.unsqueeze(3) - centers
        dist2 = (diff ** 2).sum(dim=-1, keepdim=True)

        weight = torch.exp(-dist2 / (2.0 * sigma ** 2))
        weight = weight * gate

        disp = (weight * rbf_shifts[:, None, None, :, :]).sum(dim=3)
        return disp

    def action_to_disp(self, action, h):
        (
            global_shift,
            global_rotate,
            rbf_shifts,
            rbf_gate_logit,
            rbf_raw_sigma,
            stim_scale_raw,
        ) = self.unpack_action(action)

        B, _, H, W = h.shape
        base_grid = self.make_identity_grid(B, H, W, h.device, h.dtype)

        disp_global = self.global_shift_scale * global_shift

        theta = self.global_rotate_scale * global_rotate
        x = base_grid[..., 0:1]
        y = base_grid[..., 1:2]

        cos_t = torch.cos(theta)
        sin_t = torch.sin(theta)

        x_rot = cos_t * x - sin_t * y
        y_rot = sin_t * x + cos_t * y
        rot_grid = torch.cat([x_rot, y_rot], dim=-1)

        disp_rotate = rot_grid - base_grid

        disp_rbf = self.rbf_shifts_to_disp(
            base_grid,
            rbf_shifts,
            rbf_gate_logit,
            rbf_raw_sigma,
        )
        disp_rbf = self.rbf_shift_scale * disp_rbf

        disp = disp_global + disp_rotate + disp_rbf
        return disp

    def deform_feature(self, h, action):
        B, _, H, W = h.shape
        base_grid = self.make_identity_grid(B=B, H=H, W=W, device=h.device, dtype=h.dtype)
        disp = self.action_to_disp(action, h)
        grid = torch.clamp(base_grid + disp, -1.2, 1.2)

        # compute valid mask (even though values are clamped to [-1.2, 1.2], the strict valid range is still [-1, 1])
        grid_raw = base_grid + disp
        valid = (
            (grid_raw[..., 0] >= -1.0) &
            (grid_raw[..., 0] <= 1.0) &
            (grid_raw[..., 1] >= -1.0) &
            (grid_raw[..., 1] <= 1.0)
        ).to(dtype=h.dtype).unsqueeze(1)

        h_deformed = F.grid_sample(
            h, grid, mode="bilinear", padding_mode="zeros", align_corners=False,
        )

        # fill with the same background value
        top, bottom = h[:, :, 0, :], h[:, :, -1, :]
        left, right = h[:, :, 1:-1, 0], h[:, :, 1:-1, -1]
        bg_value = torch.cat([top, bottom, left, right], dim=2).mean(dim=2, keepdim=True).view(B, -1, 1, 1)

        h_deformed = h_deformed * valid + bg_value * (1.0 - valid)
        return h_deformed, disp

    def apply_stim_scale(self, stimulation, stim_scale_raw):
        stim_scale = self.raw_to_stim_scale(stim_scale_raw).reshape(stimulation.shape[0], 1)
        return stimulation * stim_scale

    def sample_action(self, x):
        h = self.encode_feature(x)
        shift_dist, shift_mean, shift_std, shift_log_std = self.get_shift_dist_from_h(h)
        rotate_dist, rotate_mean, rotate_std, rotate_log_std = self.get_rotate_dist_from_h(h)
        rbf_dist, rbf_mean, rbf_std, rbf_log_std = self.get_rbf_dist_from_h(h)
        gate_dist, gate_mean, gate_std, gate_log_std = self.get_rbf_gate_dist_from_h(h)
        sigma_dist, sigma_mean, sigma_std, sigma_log_std = self.get_rbf_sigma_dist_from_h(h)
        scale_dist, scale_mean, scale_std, scale_log_std = self.get_stim_scale_dist_from_h(h)

        global_shift = shift_dist.rsample()
        global_rotate = rotate_dist.rsample()
        rbf_shifts = rbf_dist.rsample()
        rbf_gate_logit = gate_dist.rsample()
        rbf_raw_sigma = sigma_dist.rsample()
        stim_scale_raw = scale_dist.rsample()

        log_prob = (
            shift_dist.log_prob(global_shift)
            + rotate_dist.log_prob(global_rotate)
            + rbf_dist.log_prob(rbf_shifts)
            + gate_dist.log_prob(rbf_gate_logit)
            + sigma_dist.log_prob(rbf_raw_sigma)
            + scale_dist.log_prob(stim_scale_raw)
        )

        entropy = (
            shift_dist.entropy()
            + rotate_dist.entropy()
            + rbf_dist.entropy()
            + gate_dist.entropy()
            + sigma_dist.entropy()
            + scale_dist.entropy()
        )

        action = self.pack_action(
            global_shift,
            global_rotate,
            rbf_shifts,
            rbf_gate_logit,
            rbf_raw_sigma,
            stim_scale_raw,
        )

        mean_action = self.pack_action(
            shift_mean,
            rotate_mean,
            rbf_mean,
            gate_mean,
            sigma_mean,
            scale_mean,
        )

        log_std_action = self.pack_action(
            shift_log_std,
            rotate_log_std,
            rbf_log_std,
            gate_log_std,
            sigma_log_std,
            scale_log_std,
        )

        h_deformed, disp = self.deform_feature(h, action)
        h_deformed_flat = self.flatten_feature(h_deformed)

        stim_logits = self.stim_mapping(h_deformed_flat)
        stimulation = self.out_activation(stim_logits) * self.output_scaling
        stimulation = self.apply_stim_scale(stimulation, stim_scale_raw)

        return action, stimulation, log_prob, entropy, mean_action, log_std_action

    def act(self, x, deterministic=False):
        h = self.encode_feature(x)

        shift_dist, shift_mean, _, _ = self.get_shift_dist_from_h(h)
        rotate_dist, rotate_mean, _, _ = self.get_rotate_dist_from_h(h)
        rbf_dist, rbf_mean, _, _ = self.get_rbf_dist_from_h(h)
        gate_dist, gate_mean, _, _ = self.get_rbf_gate_dist_from_h(h)
        sigma_dist, sigma_mean, _, _ = self.get_rbf_sigma_dist_from_h(h)
        scale_dist, scale_mean, _, _ = self.get_stim_scale_dist_from_h(h)

        if deterministic:
            global_shift = shift_mean
            global_rotate = rotate_mean
            rbf_shifts = rbf_mean
            rbf_gate_logit = gate_mean
            rbf_raw_sigma = sigma_mean
            stim_scale_raw = scale_mean
        else:
            global_shift = shift_dist.rsample()
            global_rotate = rotate_dist.rsample()
            rbf_shifts = rbf_dist.rsample()
            rbf_gate_logit = gate_dist.rsample()
            rbf_raw_sigma = sigma_dist.rsample()
            stim_scale_raw = scale_dist.rsample()

        log_prob = (
            shift_dist.log_prob(global_shift)
            + rotate_dist.log_prob(global_rotate)
            + rbf_dist.log_prob(rbf_shifts)
            + gate_dist.log_prob(rbf_gate_logit)
            + sigma_dist.log_prob(rbf_raw_sigma)
            + scale_dist.log_prob(stim_scale_raw)
        )

        action = self.pack_action(
            global_shift,
            global_rotate,
            rbf_shifts,
            rbf_gate_logit,
            rbf_raw_sigma,
            stim_scale_raw,
        )

        h_deformed, disp = self.deform_feature(h, action)
        h_deformed_flat = self.flatten_feature(h_deformed)

        stim_logits = self.stim_mapping(h_deformed_flat)
        stimulation = self.out_activation(stim_logits) * self.output_scaling
        stimulation = self.apply_stim_scale(stimulation, stim_scale_raw)

        return stimulation, log_prob

    def evaluate_action(self, x, action):
        h = self.encode_feature(x)

        (
            global_shift,
            global_rotate,
            rbf_shifts,
            rbf_gate_logit,
            rbf_raw_sigma,
            stim_scale_raw,
        ) = self.unpack_action(action)

        shift_dist, shift_mean, _, shift_log_std = self.get_shift_dist_from_h(h)
        rotate_dist, rotate_mean, _, rotate_log_std = self.get_rotate_dist_from_h(h)
        rbf_dist, rbf_mean, _, rbf_log_std = self.get_rbf_dist_from_h(h)
        gate_dist, gate_mean, _, gate_log_std = self.get_rbf_gate_dist_from_h(h)
        sigma_dist, sigma_mean, _, sigma_log_std = self.get_rbf_sigma_dist_from_h(h)
        scale_dist, scale_mean, _, scale_log_std = self.get_stim_scale_dist_from_h(h)

        log_prob = (
            shift_dist.log_prob(global_shift)
            + rotate_dist.log_prob(global_rotate)
            + rbf_dist.log_prob(rbf_shifts)
            + gate_dist.log_prob(rbf_gate_logit)
            + sigma_dist.log_prob(rbf_raw_sigma)
            + scale_dist.log_prob(stim_scale_raw)
        )

        h_deformed, disp = self.deform_feature(h, action)
        h_deformed_flat = self.flatten_feature(h_deformed)

        stim_logits = self.stim_mapping(h_deformed_flat)
        stimulation = self.out_activation(stim_logits) * self.output_scaling
        stimulation = self.apply_stim_scale(stimulation, stim_scale_raw)

        mean_action = self.pack_action(
            shift_mean,
            rotate_mean,
            rbf_mean,
            gate_mean,
            sigma_mean,
            scale_mean,
        )

        log_std_action = self.pack_action(
            shift_log_std,
            rotate_log_std,
            rbf_log_std,
            gate_log_std,
            sigma_log_std,
            scale_log_std,
        )

        return stimulation, log_prob, mean_action, log_std_action

    def sample_n_actions(self, x, n):
        h = self.encode_feature(x)


        B, C_h, H_h, W_h = h.shape
        K = self.num_rbf_points

        shift_dist, shift_mean, _, shift_log_std = self.get_shift_dist_from_h(h)
        rotate_dist, rotate_mean, _, rotate_log_std = self.get_rotate_dist_from_h(h)
        rbf_dist, rbf_mean, _, rbf_log_std = self.get_rbf_dist_from_h(h)
        gate_dist, gate_mean, _, gate_log_std = self.get_rbf_gate_dist_from_h(h)
        sigma_dist, sigma_mean, _, sigma_log_std = self.get_rbf_sigma_dist_from_h(h)
        scale_dist, scale_mean, _, scale_log_std = self.get_stim_scale_dist_from_h(h)

        global_shift = shift_dist.rsample((n,))
        global_rotate = rotate_dist.rsample((n,))
        rbf_shifts = rbf_dist.rsample((n,))
        rbf_gate_logit = gate_dist.rsample((n,))
        rbf_raw_sigma = sigma_dist.rsample((n,))
        stim_scale_raw = scale_dist.rsample((n,))

        log_prob = (
            shift_dist.log_prob(global_shift)
            + rotate_dist.log_prob(global_rotate)
            + rbf_dist.log_prob(rbf_shifts)
            + gate_dist.log_prob(rbf_gate_logit)
            + sigma_dist.log_prob(rbf_raw_sigma)
            + scale_dist.log_prob(stim_scale_raw)
        )

        global_shift_flat = global_shift.reshape(n * B, 1, 1, 2)
        global_rotate_flat = global_rotate.reshape(n * B, 1, 1, 1)
        rbf_shifts_flat = rbf_shifts.reshape(n * B, K, 2)
        rbf_gate_logit_flat = rbf_gate_logit.reshape(n * B, K, 1)
        rbf_raw_sigma_flat = rbf_raw_sigma.reshape(n * B, K, 1)
        stim_scale_raw_flat = stim_scale_raw.reshape(n * B, 1, 1)

        actions_flat = self.pack_action(
            global_shift_flat,
            global_rotate_flat,
            rbf_shifts_flat,
            rbf_gate_logit_flat,
            rbf_raw_sigma_flat,
            stim_scale_raw_flat,
        )
        actions = actions_flat.view(n, B, -1)

        h_rep = h.unsqueeze(0).expand(n, B, C_h, H_h, W_h)
        h_rep = h_rep.reshape(n * B, C_h, H_h, W_h)


        h_deformed, disp = self.deform_feature(h_rep, actions_flat)
        h_deformed_flat = self.flatten_feature(h_deformed)

        stim_logits = self.stim_mapping(h_deformed_flat)
        stimulation = self.out_activation(stim_logits) * self.output_scaling
        stimulation = self.apply_stim_scale(stimulation, stim_scale_raw_flat)
        stimulation = stimulation.view(n, B, -1)

        mean_action = self.pack_action(
            shift_mean,
            rotate_mean,
            rbf_mean,
            gate_mean,
            sigma_mean,
            scale_mean,
        )

        log_std_action = self.pack_action(
            shift_log_std,
            rotate_log_std,
            rbf_log_std,
            gate_log_std,
            sigma_log_std,
            scale_log_std,
        )

        return actions, stimulation, log_prob, mean_action, log_std_action

    def forward(self, x, deterministic=False):
        stimulation, log_prob = self.act(x, deterministic=deterministic)
        return stimulation    

class PolicyFeatureRBFDeformEncoder_new(nn.Module):
    def __init__(
        self,
        in_channels=3,
        n_electrodes=638,
        out_scaling=1e-4,
        out_activation="relu",
        min_log_std=-6.0,
        max_log_std=2.0,
        init_log_std=0.5,

        global_shift_scale=0.15,
        global_rotate_scale=0.15,
        rbf_shift_scale=0.05,

        num_rbf_points=64,
        rbf_grid_size=(8, 8),
        init_sigma=0.35,
        min_sigma=0.08,
        max_sigma=0.8,
    ):
        super().__init__()

        self.output_scaling = out_scaling
        self.min_log_std = min_log_std
        self.max_log_std = max_log_std

        self.global_shift_scale = global_shift_scale
        self.rbf_shift_scale = rbf_shift_scale
        self.global_rotate_scale = global_rotate_scale

        self.num_rbf_points = num_rbf_points
        self.min_sigma = min_sigma
        self.max_sigma = max_sigma

        self.feature_encoder = nn.Sequential(
            *convlayer(in_channels, 8, 3, 1, 1),
            *convlayer(8, 16, 3, 1, 1, resample_out=nn.MaxPool2d(2)),
            *convlayer(16, 32, 3, 1, 1, resample_out=nn.MaxPool2d(2)),
            ResidualBlock(32, resample_out=None),
            ResidualBlock(32, resample_out=None),
            ResidualBlock(32, resample_out=None),
            ResidualBlock(32, resample_out=None),
            *convlayer(32, 16, 3, 1, 1),
            nn.Conv2d(16, 1, 3, 1, 1),
        )

        self.stim_mapping = nn.LazyLinear(n_electrodes)

        self.out_activation = {
            "tanh": nn.Tanh(),
            "sigmoid": nn.Sigmoid(),
            "relu": nn.ReLU(),
            "softmax": nn.Softmax(dim=1),
        }[out_activation]

        # global shift distribution
        self.global_shift_mean = nn.Parameter(torch.zeros(1, 1, 2))
        self.global_shift_log_std = nn.Parameter(torch.full((1, 1, 2), init_log_std))

        # global rotation distribution
        self.global_rotate_mean = nn.Parameter(torch.zeros(1, 1, 1))
        self.global_rotate_log_std = nn.Parameter(torch.full((1, 1, 1), init_log_std))

        # fixed RBF centers
        centers = self.make_fixed_rbf_centers(rbf_grid_size, num_rbf_points)
        self.register_buffer("rbf_centers", centers)  # [K, 2]

        # RBF shift distribution
        self.rbf_shift_mean = nn.Parameter(torch.zeros(num_rbf_points, 2))
        self.rbf_shift_log_std = nn.Parameter(torch.full((num_rbf_points, 2), -3.0))

        # RBF gate logit distribution
        self.rbf_gate_logit_mean = nn.Parameter(torch.full((num_rbf_points, 1), -1.0))
        self.rbf_gate_logit_log_std = nn.Parameter(torch.full((num_rbf_points, 1), init_log_std))

        # RBF raw sigma distribution
        init_raw_sigma = torch.log(torch.exp(torch.tensor(init_sigma)) - 1.0)
        self.rbf_raw_sigma_mean = nn.Parameter(torch.full((num_rbf_points, 1), init_raw_sigma.item()))
        self.rbf_raw_sigma_log_std = nn.Parameter(torch.full((num_rbf_points, 1), init_log_std))

    def make_fixed_rbf_centers(self, rbf_grid_size, num_rbf_points):
        Hc, Wc = rbf_grid_size

        ys = torch.linspace(-1.0, 1.0, Hc)
        xs = torch.linspace(-1.0, 1.0, Wc)
        yy, xx = torch.meshgrid(ys, xs, indexing="ij")

        centers = torch.stack([xx, yy], dim=-1).reshape(-1, 2)

        if centers.shape[0] < num_rbf_points:
            raise ValueError("rbf_grid_size does not provide enough points.")

        return centers[:num_rbf_points]

    def encode_feature(self, x):
        return self.feature_encoder(x)

    def flatten_feature(self, h):
        return h.flatten(start_dim=1)

    def make_identity_grid(self, B, H, W, device, dtype):
        ys = torch.linspace(-1.0, 1.0, H, device=device, dtype=dtype)
        xs = torch.linspace(-1.0, 1.0, W, device=device, dtype=dtype)
        yy, xx = torch.meshgrid(ys, xs, indexing="ij")
        grid = torch.stack([xx, yy], dim=-1)
        return grid.unsqueeze(0).expand(B, H, W, 2)

    def get_rotate_dist_from_h(self, h):
        B = h.shape[0]

        log_std = torch.clamp(
            self.global_rotate_log_std,
            min=self.min_log_std,
            max=self.max_log_std,
        )

        mean = self.global_rotate_mean.unsqueeze(0).expand(B, -1, -1, -1)
        log_std = log_std.unsqueeze(0).expand(B, -1, -1, -1)
        std = torch.exp(log_std)

        dist = Independent(Normal(mean, std), 3)
        return dist, mean, std, log_std

    def get_shift_dist_from_h(self, h):
        B = h.shape[0]

        log_std = torch.clamp(
            self.global_shift_log_std,
            min=self.min_log_std,
            max=self.max_log_std,
        )

        mean = self.global_shift_mean.unsqueeze(0).expand(B, -1, -1, -1)
        log_std = log_std.unsqueeze(0).expand(B, -1, -1, -1)
        std = torch.exp(log_std)

        dist = Independent(Normal(mean, std), 3)
        return dist, mean, std, log_std

    def get_rbf_dist_from_h(self, h):
        B = h.shape[0]

        log_std = torch.clamp(
            self.rbf_shift_log_std,
            min=self.min_log_std,
            max=self.max_log_std,
        )

        mean = self.rbf_shift_mean.unsqueeze(0).expand(B, -1, -1)
        log_std = log_std.unsqueeze(0).expand(B, -1, -1)
        std = torch.exp(log_std)

        dist = Independent(Normal(mean, std), 2)
        return dist, mean, std, log_std

    def get_rbf_gate_dist_from_h(self, h):
        B = h.shape[0]

        log_std = torch.clamp(
            self.rbf_gate_logit_log_std,
            min=self.min_log_std,
            max=self.max_log_std,
        )

        mean = self.rbf_gate_logit_mean.unsqueeze(0).expand(B, -1, -1)
        log_std = log_std.unsqueeze(0).expand(B, -1, -1)
        std = torch.exp(log_std)

        dist = Independent(Normal(mean, std), 2)
        return dist, mean, std, log_std

    def get_rbf_sigma_dist_from_h(self, h):
        B = h.shape[0]

        log_std = torch.clamp(
            self.rbf_raw_sigma_log_std,
            min=self.min_log_std,
            max=self.max_log_std,
        )

        mean = self.rbf_raw_sigma_mean.unsqueeze(0).expand(B, -1, -1)
        log_std = log_std.unsqueeze(0).expand(B, -1, -1)
        std = torch.exp(log_std)

        dist = Independent(Normal(mean, std), 2)
        return dist, mean, std, log_std

    def pack_action(
        self,
        global_shift,
        global_rotate,
        rbf_shifts,
        rbf_gate_logit,
        rbf_raw_sigma,
    ):
        B = global_shift.shape[0]
        return torch.cat(
            [
                global_shift.reshape(B, 2),
                global_rotate.reshape(B, 1),
                rbf_shifts.reshape(B, -1),
                rbf_gate_logit.reshape(B, -1),
                rbf_raw_sigma.reshape(B, -1),
            ],
            dim=1,
        )

    def unpack_action(self, action):
        B = action.shape[0]
        K = self.num_rbf_points

        global_shift = action[:, :2].reshape(B, 1, 1, 2)
        global_rotate = action[:, 2:3].reshape(B, 1, 1, 1)

        start = 3
        end = start + K * 2
        rbf_shifts = action[:, start:end].reshape(B, K, 2)

        start = end
        end = start + K
        rbf_gate_logit = action[:, start:end].reshape(B, K, 1)

        start = end
        end = start + K
        rbf_raw_sigma = action[:, start:end].reshape(B, K, 1)

        return global_shift, global_rotate, rbf_shifts, rbf_gate_logit, rbf_raw_sigma

    def rbf_shifts_to_disp(self, base_grid, rbf_shifts, rbf_gate_logit, rbf_raw_sigma):
        """
        base_grid:      [B, H, W, 2]
        rbf_shifts:     [B, K, 2]
        rbf_gate_logit: [B, K, 1]
        rbf_raw_sigma:  [B, K, 1]
        """
        B, H, W, _ = base_grid.shape
        K = self.num_rbf_points

        centers = self.rbf_centers.to(
            device=base_grid.device,
            dtype=base_grid.dtype,
        ).view(1, 1, 1, K, 2)

        sigma = F.softplus(rbf_raw_sigma)
        sigma = torch.clamp(sigma, self.min_sigma, self.max_sigma)
        sigma = sigma.to(device=base_grid.device, dtype=base_grid.dtype)
        sigma = sigma.view(B, 1, 1, K, 1)

        gate = torch.sigmoid(rbf_gate_logit)
        gate = gate.to(device=base_grid.device, dtype=base_grid.dtype)
        gate = gate.view(B, 1, 1, K, 1)

        diff = base_grid.unsqueeze(3) - centers
        dist2 = (diff ** 2).sum(dim=-1, keepdim=True)

        weight = torch.exp(-dist2 / (2.0 * sigma ** 2))
        weight = weight * gate

        disp = (weight * rbf_shifts[:, None, None, :, :]).sum(dim=3)
        return disp

    def action_to_disp(self, action, h):
        global_shift, global_rotate, rbf_shifts, rbf_gate_logit, rbf_raw_sigma = (
            self.unpack_action(action)
        )

        B, _, H, W = h.shape
        base_grid = self.make_identity_grid(
            B=B,
            H=H,
            W=W,
            device=h.device,
            dtype=h.dtype,
        )

        disp_global = self.global_shift_scale * global_shift

        theta = self.global_rotate_scale * global_rotate
        x = base_grid[..., 0:1]
        y = base_grid[..., 1:2]

        cos_t = torch.cos(theta)
        sin_t = torch.sin(theta)

        x_rot = cos_t * x - sin_t * y
        y_rot = sin_t * x + cos_t * y
        rot_grid = torch.cat([x_rot, y_rot], dim=-1)

        disp_rotate = rot_grid - base_grid

        disp_rbf = self.rbf_shifts_to_disp(
            base_grid,
            rbf_shifts,
            rbf_gate_logit,
            rbf_raw_sigma,
        )
        disp_rbf = self.rbf_shift_scale * disp_rbf

        disp = disp_global + disp_rotate + disp_rbf
        return disp

    def deform_feature(self, h, action):
        B, _, H, W = h.shape

        base_grid = self.make_identity_grid(
            B=B,
            H=H,
            W=W,
            device=h.device,
            dtype=h.dtype,
        )

        disp = self.action_to_disp(action, h)
        grid = torch.clamp(base_grid + disp, -1.2, 1.2)

        h_deformed = F.grid_sample(
            h,
            grid,
            mode="bilinear",
            padding_mode="zeros",
            align_corners=False,
        )

        return h_deformed, disp

    def sample_action(self, x):
        h = self.encode_feature(x)

        shift_dist, shift_mean, shift_std, shift_log_std = self.get_shift_dist_from_h(h)
        rotate_dist, rotate_mean, rotate_std, rotate_log_std = self.get_rotate_dist_from_h(h)
        rbf_dist, rbf_mean, rbf_std, rbf_log_std = self.get_rbf_dist_from_h(h)
        gate_dist, gate_mean, gate_std, gate_log_std = self.get_rbf_gate_dist_from_h(h)
        sigma_dist, sigma_mean, sigma_std, sigma_log_std = self.get_rbf_sigma_dist_from_h(h)

        global_shift = shift_dist.rsample()
        global_rotate = rotate_dist.rsample()
        rbf_shifts = rbf_dist.rsample()
        rbf_gate_logit = gate_dist.rsample()
        rbf_raw_sigma = sigma_dist.rsample()

        log_prob = (
            shift_dist.log_prob(global_shift)
            + rotate_dist.log_prob(global_rotate)
            + rbf_dist.log_prob(rbf_shifts)
            + gate_dist.log_prob(rbf_gate_logit)
            + sigma_dist.log_prob(rbf_raw_sigma)
        )

        entropy = (
            shift_dist.entropy()
            + rotate_dist.entropy()
            + rbf_dist.entropy()
            + gate_dist.entropy()
            + sigma_dist.entropy()
        )

        action = self.pack_action(
            global_shift,
            global_rotate,
            rbf_shifts,
            rbf_gate_logit,
            rbf_raw_sigma,
        )

        mean_action = self.pack_action(
            shift_mean,
            rotate_mean,
            rbf_mean,
            gate_mean,
            sigma_mean,
        )

        log_std_action = self.pack_action(
            shift_log_std,
            rotate_log_std,
            rbf_log_std,
            gate_log_std,
            sigma_log_std,
        )

        h_deformed, disp = self.deform_feature(h, action)
        h_deformed_flat = self.flatten_feature(h_deformed)

        stim_logits = self.stim_mapping(h_deformed_flat)
        stimulation = self.out_activation(stim_logits) * self.output_scaling

        return action, stimulation, log_prob, entropy, mean_action, log_std_action

    def act(self, x, deterministic=False):
        h = self.encode_feature(x)

        shift_dist, shift_mean, _, _ = self.get_shift_dist_from_h(h)
        rotate_dist, rotate_mean, _, _ = self.get_rotate_dist_from_h(h)
        rbf_dist, rbf_mean, _, _ = self.get_rbf_dist_from_h(h)
        gate_dist, gate_mean, _, _ = self.get_rbf_gate_dist_from_h(h)
        sigma_dist, sigma_mean, _, _ = self.get_rbf_sigma_dist_from_h(h)

        if deterministic:
            global_shift = shift_mean
            global_rotate = rotate_mean
            rbf_shifts = rbf_mean
            rbf_gate_logit = gate_mean
            rbf_raw_sigma = sigma_mean
        else:
            global_shift = shift_dist.rsample()
            global_rotate = rotate_dist.rsample()
            rbf_shifts = rbf_dist.rsample()
            rbf_gate_logit = gate_dist.rsample()
            rbf_raw_sigma = sigma_dist.rsample()

        log_prob = (
            shift_dist.log_prob(global_shift)
            + rotate_dist.log_prob(global_rotate)
            + rbf_dist.log_prob(rbf_shifts)
            + gate_dist.log_prob(rbf_gate_logit)
            + sigma_dist.log_prob(rbf_raw_sigma)
        )

        action = self.pack_action(
            global_shift,
            global_rotate,
            rbf_shifts,
            rbf_gate_logit,
            rbf_raw_sigma,
        )

        h_deformed, disp = self.deform_feature(h, action)
        h_deformed_flat = self.flatten_feature(h_deformed)

        stim_logits = self.stim_mapping(h_deformed_flat)
        stimulation = self.out_activation(stim_logits) * self.output_scaling

        return stimulation, log_prob

    def evaluate_action(self, x, action):
        h = self.encode_feature(x)

        global_shift, global_rotate, rbf_shifts, rbf_gate_logit, rbf_raw_sigma = (
            self.unpack_action(action)
        )

        shift_dist, shift_mean, _, shift_log_std = self.get_shift_dist_from_h(h)
        rotate_dist, rotate_mean, _, rotate_log_std = self.get_rotate_dist_from_h(h)
        rbf_dist, rbf_mean, _, rbf_log_std = self.get_rbf_dist_from_h(h)
        gate_dist, gate_mean, _, gate_log_std = self.get_rbf_gate_dist_from_h(h)
        sigma_dist, sigma_mean, _, sigma_log_std = self.get_rbf_sigma_dist_from_h(h)

        log_prob = (
            shift_dist.log_prob(global_shift)
            + rotate_dist.log_prob(global_rotate)
            + rbf_dist.log_prob(rbf_shifts)
            + gate_dist.log_prob(rbf_gate_logit)
            + sigma_dist.log_prob(rbf_raw_sigma)
        )

        h_deformed, disp = self.deform_feature(h, action)
        h_deformed_flat = self.flatten_feature(h_deformed)

        stim_logits = self.stim_mapping(h_deformed_flat)
        stimulation = self.out_activation(stim_logits) * self.output_scaling

        mean_action = self.pack_action(
            shift_mean,
            rotate_mean,
            rbf_mean,
            gate_mean,
            sigma_mean,
        )

        log_std_action = self.pack_action(
            shift_log_std,
            rotate_log_std,
            rbf_log_std,
            gate_log_std,
            sigma_log_std,
        )

        return stimulation, log_prob, mean_action, log_std_action

    def sample_n_actions(self, x, n):
        h = self.encode_feature(x)
        B, C_h, H_h, W_h = h.shape
        K = self.num_rbf_points

        shift_dist, shift_mean, _, shift_log_std = self.get_shift_dist_from_h(h)
        rotate_dist, rotate_mean, _, rotate_log_std = self.get_rotate_dist_from_h(h)
        rbf_dist, rbf_mean, _, rbf_log_std = self.get_rbf_dist_from_h(h)
        gate_dist, gate_mean, _, gate_log_std = self.get_rbf_gate_dist_from_h(h)
        sigma_dist, sigma_mean, _, sigma_log_std = self.get_rbf_sigma_dist_from_h(h)

        global_shift = shift_dist.rsample((n,))       # [n, B, 1, 1, 2]
        global_rotate = rotate_dist.rsample((n,))     # [n, B, 1, 1, 1]
        rbf_shifts = rbf_dist.rsample((n,))            # [n, B, K, 2]
        rbf_gate_logit = gate_dist.rsample((n,))       # [n, B, K, 1]
        rbf_raw_sigma = sigma_dist.rsample((n,))       # [n, B, K, 1]

        log_prob = (
            shift_dist.log_prob(global_shift)
            + rotate_dist.log_prob(global_rotate)
            + rbf_dist.log_prob(rbf_shifts)
            + gate_dist.log_prob(rbf_gate_logit)
            + sigma_dist.log_prob(rbf_raw_sigma)
        )

        global_shift_flat = global_shift.reshape(n * B, 1, 1, 2)
        global_rotate_flat = global_rotate.reshape(n * B, 1, 1, 1)
        rbf_shifts_flat = rbf_shifts.reshape(n * B, K, 2)
        rbf_gate_logit_flat = rbf_gate_logit.reshape(n * B, K, 1)
        rbf_raw_sigma_flat = rbf_raw_sigma.reshape(n * B, K, 1)

        actions_flat = self.pack_action(
            global_shift_flat,
            global_rotate_flat,
            rbf_shifts_flat,
            rbf_gate_logit_flat,
            rbf_raw_sigma_flat,
        )
        actions = actions_flat.view(n, B, -1)

        h_rep = h.unsqueeze(0).expand(n, B, C_h, H_h, W_h)
        h_rep = h_rep.reshape(n * B, C_h, H_h, W_h)

        h_deformed, disp = self.deform_feature(h_rep, actions_flat)
        h_deformed_flat = self.flatten_feature(h_deformed)

        stim_logits = self.stim_mapping(h_deformed_flat)
        stimulation = self.out_activation(stim_logits) * self.output_scaling
        stimulation = stimulation.view(n, B, -1)

        mean_action = self.pack_action(
            shift_mean,
            rotate_mean,
            rbf_mean,
            gate_mean,
            sigma_mean,
        )

        log_std_action = self.pack_action(
            shift_log_std,
            rotate_log_std,
            rbf_log_std,
            gate_log_std,
            sigma_log_std,
        )

        return actions, stimulation, log_prob, mean_action, log_std_action

    def forward(self, x, deterministic=False):
        stimulation, log_prob = self.act(x, deterministic=deterministic)
        return stimulation

class PolicyFeatureRBFDeformEncoder(nn.Module):
    def __init__(
        self,
        in_channels=3,
        n_electrodes=638,
        out_scaling=1e-4,
        out_activation="relu",
        min_log_std=-6.0,
        max_log_std=2.0,
        init_log_std=0.5,

        global_shift_scale=0.15,
        global_rotate_scale=0.15,
        rbf_shift_scale=0.05,

        num_rbf_points=64,
        rbf_grid_size=(8, 8),
        init_sigma=0.35,
        min_sigma=0.08,
        max_sigma=1.0,
    ):
        super().__init__()

        self.output_scaling = out_scaling
        self.min_log_std = min_log_std
        self.max_log_std = max_log_std

        self.global_shift_scale = global_shift_scale
        self.rbf_shift_scale = rbf_shift_scale
        self.global_rotate_scale = global_rotate_scale


        self.num_rbf_points = num_rbf_points
        self.min_sigma = min_sigma
        self.max_sigma = max_sigma

        self.feature_encoder = nn.Sequential(
            *convlayer(in_channels, 8, 3, 1, 1),
            *convlayer(8, 16, 3, 1, 1, resample_out=nn.MaxPool2d(2)),
            *convlayer(16, 32, 3, 1, 1, resample_out=nn.MaxPool2d(2)),
            ResidualBlock(32, resample_out=None),
            ResidualBlock(32, resample_out=None),
            ResidualBlock(32, resample_out=None),
            ResidualBlock(32, resample_out=None),
            *convlayer(32, 16, 3, 1, 1),
            nn.Conv2d(16, 1, 3, 1, 1),
        )

        self.stim_mapping = nn.LazyLinear(n_electrodes)

        self.out_activation = {
            "tanh": nn.Tanh(),
            "sigmoid": nn.Sigmoid(),
            "relu": nn.ReLU(),
            "softmax": nn.Softmax(dim=1),
        }[out_activation]

        # global shift distribution
        self.global_shift_mean = nn.Parameter(torch.zeros(1, 1, 2))
        self.global_shift_log_std = nn.Parameter(torch.full((1, 1, 2), init_log_std))
        # global rotation distribution
        self.global_rotate_mean = nn.Parameter(torch.zeros(1, 1, 1))
        self.global_rotate_log_std = nn.Parameter(torch.full((1, 1, 1), init_log_std))
        # fixed RBF centers
        centers = self.make_fixed_rbf_centers(rbf_grid_size, num_rbf_points)
        self.register_buffer("rbf_centers", centers)  # [K, 2]

        # sampled RBF shifts
        self.rbf_shift_mean = nn.Parameter(torch.zeros(num_rbf_points, 2))
        self.rbf_shift_log_std = nn.Parameter(torch.full((num_rbf_points, 2), init_log_std))

        # learnable point gates
        self.rbf_gate_logit = nn.Parameter(torch.full((num_rbf_points, 1), -1.0))

        # learnable radius
        init_raw_sigma = torch.log(torch.exp(torch.tensor(init_sigma)) - 1.0)
        self.rbf_raw_sigma = nn.Parameter(torch.full((num_rbf_points, 1), init_raw_sigma.item()))

    def make_fixed_rbf_centers(self, rbf_grid_size, num_rbf_points):
        Hc, Wc = rbf_grid_size

        ys = torch.linspace(-1.0, 1.0, Hc)
        xs = torch.linspace(-1.0, 1.0, Wc)
        yy, xx = torch.meshgrid(ys, xs, indexing="ij")

        centers = torch.stack([xx, yy], dim=-1).reshape(-1, 2)

        if centers.shape[0] < num_rbf_points:
            raise ValueError("rbf_grid_size does not provide enough points.")

        return centers[:num_rbf_points]

    def encode_feature(self, x):
        return self.feature_encoder(x)

    def flatten_feature(self, h):
        return h.flatten(start_dim=1)

    def make_identity_grid(self, B, H, W, device, dtype):
        ys = torch.linspace(-1.0, 1.0, H, device=device, dtype=dtype)
        xs = torch.linspace(-1.0, 1.0, W, device=device, dtype=dtype)
        yy, xx = torch.meshgrid(ys, xs, indexing="ij")
        grid = torch.stack([xx, yy], dim=-1)
        return grid.unsqueeze(0).expand(B, H, W, 2)
    def get_rotate_dist_from_h(self, h):
        B = h.shape[0]

        log_std = torch.clamp(
            self.global_rotate_log_std,
            min=self.min_log_std,
            max=self.max_log_std,
        )

        mean = self.global_rotate_mean.unsqueeze(0).expand(B, -1, -1, -1)
        log_std = log_std.unsqueeze(0).expand(B, -1, -1, -1)
        std = torch.exp(log_std)

        dist = Independent(Normal(mean, std), 3)
        return dist, mean, std, log_std
    def get_shift_dist_from_h(self, h):
        B = h.shape[0]

        log_std = torch.clamp(self.global_shift_log_std, min=self.min_log_std,max=self.max_log_std,)

        mean = self.global_shift_mean.unsqueeze(0).expand(B, -1, -1, -1)
        log_std = log_std.unsqueeze(0).expand(B, -1, -1, -1)
        std = torch.exp(log_std)

        dist = Independent(Normal(mean, std), 3)
        return dist, mean, std, log_std

    def get_rbf_dist_from_h(self, h):
        B = h.shape[0]

        log_std = torch.clamp(self.rbf_shift_log_std, min=self.min_log_std,max=self.max_log_std,)

        mean = self.rbf_shift_mean.unsqueeze(0).expand(B, -1, -1)
        log_std = log_std.unsqueeze(0).expand(B, -1, -1)
        std = torch.exp(log_std)

        dist = Independent(Normal(mean, std), 2)
        return dist, mean, std, log_std

    def get_rbf_gate(self):
        return torch.sigmoid(self.rbf_gate_logit)  # [K, 1]

    def get_rbf_sigma(self):
        sigma = F.softplus(self.rbf_raw_sigma)
        sigma = torch.clamp(sigma, self.min_sigma, self.max_sigma)
        return sigma  # [K, 1]

    def pack_action(self, global_shift, global_rotate, rbf_shifts):
        B = global_shift.shape[0]
        return torch.cat(
            [
                global_shift.reshape(B, 2),
                global_rotate.reshape(B, 1),
                rbf_shifts.reshape(B, -1),
            ],
            dim=1,
        )

    def unpack_action(self, action):
        B = action.shape[0]
        K = self.num_rbf_points

        global_shift = action[:, :2].reshape(B, 1, 1, 2)
        global_rotate = action[:, 2:3].reshape(B, 1, 1, 1)
        rbf_shifts = action[:, 3:].reshape(B, K, 2)

        return global_shift, global_rotate, rbf_shifts

    def rbf_shifts_to_disp(self, base_grid, rbf_shifts):
        """
        base_grid:  [B, H, W, 2]
        rbf_shifts: [B, K, 2]
        """
        B, H, W, _ = base_grid.shape
        K = self.num_rbf_points

        centers = self.rbf_centers.to(device=base_grid.device,dtype=base_grid.dtype,).view(1, 1, 1, K, 2)

        sigma = self.get_rbf_sigma().to(device=base_grid.device,dtype=base_grid.dtype,).view(1, 1, 1, K, 1)

        gate = self.get_rbf_gate().to(device=base_grid.device,dtype=base_grid.dtype,).view(1, 1, 1, K, 1)

        diff = base_grid.unsqueeze(3) - centers
        dist2 = (diff ** 2).sum(dim=-1, keepdim=True)

        weight = torch.exp(-dist2 / (2.0 * sigma ** 2))
        weight = weight * gate

        disp = (weight * rbf_shifts[:, None, None, :, :]).sum(dim=3)
        return disp

    def action_to_disp(self, action, h):
        global_shift, global_rotate, rbf_shifts = self.unpack_action(action)

        B, _, H, W = h.shape
        base_grid = self.make_identity_grid(B=B, H=H, W=W, device=h.device, dtype=h.dtype)

        disp_global = self.global_shift_scale * global_shift

        theta = self.global_rotate_scale * global_rotate  # [B, 1, 1, 1]
        x = base_grid[..., 0:1]
        y = base_grid[..., 1:2]

        cos_t = torch.cos(theta)
        sin_t = torch.sin(theta)

        x_rot = cos_t * x - sin_t * y
        y_rot = sin_t * x + cos_t * y
        rot_grid = torch.cat([x_rot, y_rot], dim=-1)

        disp_rotate = rot_grid - base_grid

        disp_rbf = self.rbf_shifts_to_disp(base_grid, rbf_shifts)
        disp_rbf = self.rbf_shift_scale * disp_rbf

        disp = disp_global + disp_rotate + disp_rbf
        return disp

    def deform_feature(self, h, action):
        B, _, H, W = h.shape

        base_grid = self.make_identity_grid(B=B,H=H,W=W,device=h.device,dtype=h.dtype,)

        disp = self.action_to_disp(action, h)
        grid = torch.clamp(base_grid + disp, -1.2, 1.2)

        h_deformed = F.grid_sample(h,grid,mode="bilinear",padding_mode="zeros",align_corners=False,)

        return h_deformed, disp

    def sample_action(self, x):
        h = self.encode_feature(x)

        shift_dist, shift_mean, shift_std, shift_log_std = self.get_shift_dist_from_h(h)
        rbf_dist, rbf_mean, rbf_std, rbf_log_std = self.get_rbf_dist_from_h(h)
        rotate_dist, rotate_mean, rotate_std, rotate_log_std = self.get_rotate_dist_from_h(h)

        global_rotate = rotate_dist.rsample()
        global_shift = shift_dist.rsample()
        rbf_shifts = rbf_dist.rsample()

        log_prob = (shift_dist.log_prob(global_shift)+ rotate_dist.log_prob(global_rotate)+ rbf_dist.log_prob(rbf_shifts))
        entropy = shift_dist.entropy() + rotate_dist.entropy() + rbf_dist.entropy()
        action = self.pack_action(global_shift, global_rotate, rbf_shifts)
        mean_action = self.pack_action(shift_mean, rotate_mean, rbf_mean)
        log_std_action = self.pack_action(shift_log_std, rotate_log_std, rbf_log_std)

        h_deformed, disp = self.deform_feature(h, action)
        h_deformed_flat = self.flatten_feature(h_deformed)

        stim_logits = self.stim_mapping(h_deformed_flat)
        stimulation = self.out_activation(stim_logits) * self.output_scaling



        return action, stimulation, log_prob, entropy, mean_action, log_std_action

    def act(self, x, deterministic=False):
        h = self.encode_feature(x)

        shift_dist, shift_mean, _, _ = self.get_shift_dist_from_h(h)
        rotate_dist, rotate_mean, _, _ = self.get_rotate_dist_from_h(h)
        rbf_dist, rbf_mean, _, _ = self.get_rbf_dist_from_h(h)

        if deterministic:
            global_shift = shift_mean
            global_rotate = rotate_mean
            rbf_shifts = rbf_mean
        else:
            global_shift = shift_dist.rsample()
            global_rotate = rotate_dist.rsample()
            rbf_shifts = rbf_dist.rsample()

        log_prob = (
            shift_dist.log_prob(global_shift)
            + rotate_dist.log_prob(global_rotate)
            + rbf_dist.log_prob(rbf_shifts)
        )

        action = self.pack_action(global_shift, global_rotate, rbf_shifts)

        h_deformed, disp = self.deform_feature(h, action)
        h_deformed_flat = self.flatten_feature(h_deformed)

        stim_logits = self.stim_mapping(h_deformed_flat)
        stimulation = self.out_activation(stim_logits) * self.output_scaling

        return stimulation, log_prob

    def evaluate_action(self, x, action):
        h = self.encode_feature(x)

        global_shift, global_rotate, rbf_shifts = self.unpack_action(action)

        shift_dist, shift_mean, _, shift_log_std = self.get_shift_dist_from_h(h)
        rotate_dist, rotate_mean, _, rotate_log_std = self.get_rotate_dist_from_h(h)
        rbf_dist, rbf_mean, _, rbf_log_std = self.get_rbf_dist_from_h(h)

        log_prob = (
            shift_dist.log_prob(global_shift)
            + rotate_dist.log_prob(global_rotate)
            + rbf_dist.log_prob(rbf_shifts)
        )

        h_deformed, disp = self.deform_feature(h, action)
        h_deformed_flat = self.flatten_feature(h_deformed)

        stim_logits = self.stim_mapping(h_deformed_flat)
        stimulation = self.out_activation(stim_logits) * self.output_scaling

        mean_action = self.pack_action(shift_mean, rotate_mean, rbf_mean)
        log_std_action = self.pack_action(
            shift_log_std,
            rotate_log_std,
            rbf_log_std,
        )

        return stimulation, log_prob, mean_action, log_std_action

    def sample_n_actions(self, x, n):
        h = self.encode_feature(x)
        B, C_h, H_h, W_h = h.shape
        K = self.num_rbf_points

        shift_dist, shift_mean, _, shift_log_std = self.get_shift_dist_from_h(h)
        rotate_dist, rotate_mean, _, rotate_log_std = self.get_rotate_dist_from_h(h)
        rbf_dist, rbf_mean, _, rbf_log_std = self.get_rbf_dist_from_h(h)

        global_shift = shift_dist.rsample((n,))      # [n, B, 1, 1, 2]
        global_rotate = rotate_dist.rsample((n,))    # [n, B, 1, 1, 1]
        rbf_shifts = rbf_dist.rsample((n,))           # [n, B, K, 2]

        log_prob = (
            shift_dist.log_prob(global_shift)
            + rotate_dist.log_prob(global_rotate)
            + rbf_dist.log_prob(rbf_shifts)
        )

        global_shift_flat = global_shift.reshape(n * B, 1, 1, 2)
        global_rotate_flat = global_rotate.reshape(n * B, 1, 1, 1)
        rbf_shifts_flat = rbf_shifts.reshape(n * B, K, 2)

        actions_flat = self.pack_action(
            global_shift_flat,
            global_rotate_flat,
            rbf_shifts_flat,
        )
        actions = actions_flat.view(n, B, -1)

        h_rep = h.unsqueeze(0).expand(n, B, C_h, H_h, W_h)
        h_rep = h_rep.reshape(n * B, C_h, H_h, W_h)

        h_deformed, disp = self.deform_feature(h_rep, actions_flat)
        h_deformed_flat = self.flatten_feature(h_deformed)

        stim_logits = self.stim_mapping(h_deformed_flat)
        stimulation = self.out_activation(stim_logits) * self.output_scaling
        stimulation = stimulation.view(n, B, -1)

        mean_action = self.pack_action(shift_mean, rotate_mean, rbf_mean)
        log_std_action = self.pack_action(
            shift_log_std,
            rotate_log_std,
            rbf_log_std,
        )

        return actions, stimulation, log_prob, mean_action, log_std_action

    def forward(self, x, deterministic=False):
        stimulation, log_prob = self.act(x, deterministic=deterministic)
        return stimulation


class PolicyFeatureGlobalDeformEncoder(nn.Module):
    """
    action:
        [B, 2 + H_c * W_c * 2]

    action is concatenated from two parts:
        global_shift:   [B, 1, 1, 2]
        local_disp_low: [B, H_c, W_c, 2]

    deformation:
        local_disp = upsample(local_disp_low)
        disp = global_shift_scale * global_shift
             + local_disp_scale * local_disp

        grid = base_grid + disp
    """

    def __init__(
        self,
        in_channels=3,
        n_electrodes=638,
        out_scaling=1e-4,
        out_activation="relu",
        min_log_std=-6.0,
        max_log_std=1.0,
        init_log_std=0.5,
        global_shift_scale=0.1,
        local_disp_scale=0.05,
        control_size=(4, 4),
    ):
        super().__init__()

        self.output_scaling = out_scaling
        self.min_log_std = min_log_std
        self.max_log_std = max_log_std
        self.init_log_std = init_log_std
        self.global_shift_scale = global_shift_scale
        self.local_disp_scale = local_disp_scale
        self.control_size = control_size

        self.feature_encoder = nn.Sequential(
            *convlayer(in_channels, 8, 3, 1, 1),
            *convlayer(8, 16, 3, 1, 1, resample_out=nn.MaxPool2d(2)),
            *convlayer(16, 32, 3, 1, 1, resample_out=nn.MaxPool2d(2)),
            ResidualBlock(32, resample_out=None),
            ResidualBlock(32, resample_out=None),
            ResidualBlock(32, resample_out=None),
            ResidualBlock(32, resample_out=None),
            *convlayer(32, 16, 3, 1, 1),
            nn.Conv2d(16, 1, 3, 1, 1),
        )

        self.stim_mapping = nn.LazyLinear(n_electrodes)

        self.out_activation = {
            "tanh": nn.Tanh(),
            "sigmoid": nn.Sigmoid(),
            "relu": nn.ReLU(),
            "softmax": nn.Softmax(dim=1),
        }[out_activation]

        H_c, W_c = control_size

        self.global_shift_mean = nn.Parameter(torch.zeros(1, 1, 2))
        self.global_shift_log_std = nn.Parameter(torch.full((1, 1, 2), init_log_std))

        self.local_disp_mean = nn.Parameter(torch.zeros(H_c, W_c, 2))
        self.local_disp_log_std = nn.Parameter(torch.full((H_c, W_c, 2), init_log_std))

    def encode_feature(self, x):
        return self.feature_encoder(x)

    def flatten_feature(self, h):
        return h.flatten(start_dim=1)

    def get_shift_dist_from_h(self, h):
        B = h.shape[0]

        log_std_param = torch.clamp(self.global_shift_log_std, min=self.min_log_std,max=self.max_log_std,)

        mean = self.global_shift_mean.unsqueeze(0).expand(B, -1, -1, -1)
        log_std = log_std_param.unsqueeze(0).expand(B, -1, -1, -1)
        std = torch.exp(log_std)

        dist = Independent(Normal(mean, std), 3)
        return dist, mean, std, log_std

    def get_local_dist_from_h(self, h):
        B = h.shape[0]

        log_std_param = torch.clamp(self.local_disp_log_std,min=self.min_log_std,max=self.max_log_std,)

        mean = self.local_disp_mean.unsqueeze(0).expand(B, -1, -1, -1)
        log_std = log_std_param.unsqueeze(0).expand(B, -1, -1, -1)
        std = torch.exp(log_std)

        dist = Independent(Normal(mean, std), 3)
        return dist, mean, std, log_std

    def get_dist(self, x):
        h = self.encode_feature(x)
        return self.get_dist_from_h(h)

    def get_dist_from_h(self, h):
        """
        Keep a compatible interface; return two distributions and parameters.
        """
        shift_dist, shift_mean, shift_std, shift_log_std = self.get_shift_dist_from_h(h)
        local_dist, local_mean, local_std, local_log_std = self.get_local_dist_from_h(h)

        return {
            "shift_dist": shift_dist,
            "local_dist": local_dist,
            "shift_mean": shift_mean,
            "shift_std": shift_std,
            "shift_log_std": shift_log_std,
            "local_mean": local_mean,
            "local_std": local_std,
            "local_log_std": local_log_std,
        }

    # ============================================================
    # action pack / unpack
    # ============================================================

    def pack_action(self, global_shift, local_disp_low):

        B = global_shift.shape[0]

        shift_flat = global_shift.reshape(B, 2)
        local_flat = local_disp_low.reshape(B, -1)

        return torch.cat([shift_flat, local_flat], dim=1)

    def unpack_action(self, action):
        """
        action:
            [B, 2 + H_c * W_c * 2]
        """
        B = action.shape[0]
        H_c, W_c = self.control_size

        global_shift = action[:, :2].reshape(B, 1, 1, 2)
        local_disp_low = action[:, 2:].reshape(B, H_c, W_c, 2)

        return global_shift, local_disp_low

    # ============================================================
    # grid utilities
    # ============================================================

    def make_identity_grid(self, B, H, W, device, dtype):
        ys = torch.linspace(-1.0, 1.0, H, device=device, dtype=dtype)
        xs = torch.linspace(-1.0, 1.0, W, device=device, dtype=dtype)

        yy, xx = torch.meshgrid(ys, xs, indexing="ij")
        grid = torch.stack([xx, yy], dim=-1)
        grid = grid.unsqueeze(0).expand(B, H, W, 2)

        return grid

    def upsample_local_disp(self, local_disp_low, h):
        """
        local_disp_low:
            [B, H_c, W_c, 2]

        returns:
            local_disp:
                [B, H_h, W_h, 2]
        """
        _, _, H_h, W_h = h.shape

        local_disp_low = local_disp_low.permute(0, 3, 1, 2)

        local_disp = F.interpolate(
            local_disp_low,
            size=(H_h, W_h),
            mode="bilinear",
            align_corners=False,
        )

        local_disp = local_disp.permute(0, 2, 3, 1)

        return local_disp

    def action_to_disp(self, action, h):
        """
        action:
            [B, 2 + H_c * W_c * 2]

        returns:
            disp:
                [B, H_h, W_h, 2]
        """
        global_shift, local_disp_low = self.unpack_action(action)
        local_disp = self.upsample_local_disp(local_disp_low, h)

        disp = (self.global_shift_scale * global_shift+ self.local_disp_scale * local_disp)

        return disp

    def disp_to_grid(self, disp, h):
        """
        disp:
            [B, H_h, W_h, 2]
        """
        B, _, H_h, W_h = h.shape

        base_grid = self.make_identity_grid(B=B,H=H_h,W=W_h,device=h.device,dtype=h.dtype,)

        grid_h = base_grid + disp
        grid_h = torch.clamp(grid_h, -1.2, 1.2)

        return grid_h

    # ============================================================
    # deformation
    # ============================================================

    def deform_feature(self, h, action):
        """
        h:
            [B, C_h, H_h, W_h]

        action:
            [B, 2 + H_c * W_c * 2]

        returns:
            h_deformed: [B, C_h, H_h, W_h]
            disp:       [B, H_h, W_h, 2]
        """
        disp = self.action_to_disp(action, h)
        grid_h = self.disp_to_grid(disp, h)

        h_deformed = F.grid_sample(h,grid_h,mode="bilinear",padding_mode="zeros",align_corners=False,)

        return h_deformed, disp

    # ============================================================
    # action API
    # ============================================================

    def sample_action(self, x):
        h = self.encode_feature(x)

        shift_dist, shift_mean, shift_std, shift_log_std = self.get_shift_dist_from_h(h)
        local_dist, local_mean, local_std, local_log_std = self.get_local_dist_from_h(h)

        global_shift = shift_dist.rsample()
        local_disp_low = local_dist.rsample()

        shift_log_prob = shift_dist.log_prob(global_shift)
        local_log_prob = local_dist.log_prob(local_disp_low)

        log_prob = shift_log_prob + local_log_prob
        entropy = shift_dist.entropy() + local_dist.entropy()

        action = self.pack_action(global_shift, local_disp_low)

        h_deformed, disp = self.deform_feature(h, action)
        h_deformed_flat = self.flatten_feature(h_deformed)

        stim_logits = self.stim_mapping(h_deformed_flat)
        stimulation = self.out_activation(stim_logits) * self.output_scaling

        mean_action = self.pack_action(shift_mean, local_mean)
        log_std_action = self.pack_action(shift_log_std, local_log_std)

        return action, stimulation, log_prob, entropy, mean_action, log_std_action

    def act(self, x, deterministic=False):
        h = self.encode_feature(x)

        shift_dist, shift_mean, shift_std, shift_log_std = self.get_shift_dist_from_h(h)
        local_dist, local_mean, local_std, local_log_std = self.get_local_dist_from_h(h)

        if deterministic:
            global_shift = shift_mean
            local_disp_low = local_mean
        else:
            global_shift = shift_dist.rsample()
            local_disp_low = local_dist.rsample()

        shift_log_prob = shift_dist.log_prob(global_shift)
        local_log_prob = local_dist.log_prob(local_disp_low)
        log_prob = shift_log_prob + local_log_prob

        action = self.pack_action(global_shift, local_disp_low)

        h_deformed, disp = self.deform_feature(h, action)
        h_deformed_flat = self.flatten_feature(h_deformed)

        stim_logits = self.stim_mapping(h_deformed_flat)
        stimulation = self.out_activation(stim_logits) * self.output_scaling

        return stimulation, log_prob

    def evaluate_action(self, x, action):
        """
        Recompute log_prob for PPO.

        action:
            [B, 2 + H_c * W_c * 2]
        """
        h = self.encode_feature(x)

        global_shift, local_disp_low = self.unpack_action(action)

        shift_dist, shift_mean, shift_std, shift_log_std = self.get_shift_dist_from_h(h)
        local_dist, local_mean, local_std, local_log_std = self.get_local_dist_from_h(h)

        shift_log_prob = shift_dist.log_prob(global_shift)
        local_log_prob = local_dist.log_prob(local_disp_low)

        log_prob = shift_log_prob + local_log_prob

        h_deformed, disp = self.deform_feature(h, action)
        h_deformed_flat = self.flatten_feature(h_deformed)

        stim_logits = self.stim_mapping(h_deformed_flat)
        stimulation = self.out_activation(stim_logits) * self.output_scaling

        mean_action = self.pack_action(shift_mean, local_mean)
        log_std_action = self.pack_action(shift_log_std, local_log_std)

        return stimulation, log_prob, mean_action, log_std_action

    def sample_n_actions(self, x, n):
        h = self.encode_feature(x)
        B, C_h, H_h, W_h = h.shape
        H_c, W_c = self.control_size

        shift_dist, shift_mean, shift_std, shift_log_std = self.get_shift_dist_from_h(h)
        local_dist, local_mean, local_std, local_log_std = self.get_local_dist_from_h(h)

        global_shift = shift_dist.rsample((n,))
        local_disp_low = local_dist.rsample((n,))

        shift_log_prob = shift_dist.log_prob(global_shift)
        local_log_prob = local_dist.log_prob(local_disp_low)
        log_prob = shift_log_prob + local_log_prob

        n_, B_, _, _, _ = global_shift.shape

        global_shift_flat = global_shift.reshape(n_ * B_, 1, 1, 2)
        local_disp_low_flat = local_disp_low.reshape(n_ * B_, H_c, W_c, 2)

        actions_flat = self.pack_action(global_shift_flat, local_disp_low_flat)
        actions = actions_flat.view(n_, B_, -1)

        h_rep = h.unsqueeze(0).expand(n_, B_, C_h, H_h, W_h)
        h_rep = h_rep.reshape(n_ * B_, C_h, H_h, W_h)

        h_deformed, disp = self.deform_feature(h_rep, actions_flat)
        h_deformed_flat = self.flatten_feature(h_deformed)

        stim_logits = self.stim_mapping(h_deformed_flat)
        stimulation = self.out_activation(stim_logits) * self.output_scaling
        stimulation = stimulation.view(n_, B_, -1)

        mean_action = self.pack_action(shift_mean, local_mean)
        log_std_action = self.pack_action(shift_log_std, local_log_std)

        return actions, stimulation, log_prob, mean_action, log_std_action

    def forward(self, x, deterministic=False):
        stimulation, log_prob = self.act(x, deterministic=deterministic)
        return stimulation

class PolicyFeatureLowDeformEncoder(nn.Module):
    """
    Global deformation policy with low-resolution control-point displacement.

    action:
        disp_low: [B, H_c, W_c, 2]

    actual deformation:
        disp = bilinear_upsample(disp_low) -> [B, H_h, W_h, 2]
        h_deformed = grid_sample(h, identity_grid + disp_scale * disp)
    """

    def __init__(
        self,
        in_channels=3,
        n_electrodes=638,
        out_scaling=1e-4,
        out_activation="relu",
        min_log_std=-6.0,
        max_log_std=1.0,
        init_log_std=0.5,
        disp_scale=0.3,
        control_size=(4, 4),
    ):
        super().__init__()

        self.output_scaling = out_scaling
        self.min_log_std = min_log_std
        self.max_log_std = max_log_std
        self.init_log_std = init_log_std
        self.disp_scale = disp_scale
        self.control_size = control_size

        self.feature_encoder = nn.Sequential(
            *convlayer(in_channels, 8, 3, 1, 1),
            *convlayer(8, 16, 3, 1, 1, resample_out=nn.MaxPool2d(2)),
            *convlayer(16, 32, 3, 1, 1, resample_out=nn.MaxPool2d(2)),
            ResidualBlock(32, resample_out=None),
            ResidualBlock(32, resample_out=None),
            ResidualBlock(32, resample_out=None),
            ResidualBlock(32, resample_out=None),
            *convlayer(32, 16, 3, 1, 1),
            nn.Conv2d(16, 1, 3, 1, 1),
        )

        self.stim_mapping = nn.LazyLinear(n_electrodes)

        self.out_activation = {
            "tanh": nn.Tanh(),
            "sigmoid": nn.Sigmoid(),
            "relu": nn.ReLU(),
            "softmax": nn.Softmax(dim=1),
        }[out_activation]

        self.deform_mean = None
        self.deform_log_std = None

    # ============================================================
    # lazy initialization
    # ============================================================

    def _init_deform_params(self, h):
        """
        Initialize low-resolution control-point deformation distribution.

        h:
            [B, C_h, H_h, W_h]
        """
        H_c, W_c = self.control_size

        mean = torch.zeros(H_c,W_c,2,device=h.device,dtype=h.dtype)

        log_std = torch.full( (H_c, W_c, 2), self.init_log_std,device=h.device,dtype=h.dtype)

        self.deform_mean = nn.Parameter(mean)
        self.deform_log_std = nn.Parameter(log_std)

        self.register_parameter("global_deform_mean", self.deform_mean)
        self.register_parameter("global_deform_log_std", self.deform_log_std)

    # ============================================================
    # feature encoder
    # ============================================================

    def encode_feature(self, x):
        """
        x:
            [B, C, H, W]

        returns:
            h: [B, C_h, H_h, W_h]
        """
        h = self.feature_encoder(x)

        if self.deform_mean is None or self.deform_log_std is None:
            self._init_deform_params(h)

        return h

    def flatten_feature(self, h):
        return h.flatten(start_dim=1)

    # ============================================================
    # distribution
    # ============================================================

    def get_dist_from_h(self, h):
        """
        Distribution over low-resolution disp_low.

        returns:
            dist over disp_low
            mean_low: [B, H_c, W_c, 2]
            std_low: [B, H_c, W_c, 2]
            log_std_low: [B, H_c, W_c, 2]
        """
        if self.deform_mean is None or self.deform_log_std is None:
            self._init_deform_params(h)

        B = h.shape[0]

        log_std_param = torch.clamp(
            self.deform_log_std,
            min=self.min_log_std,
            max=self.max_log_std,
        )

        mean_low = self.deform_mean.unsqueeze(0).expand(B, -1, -1, -1)
        log_std_low = log_std_param.unsqueeze(0).expand(B, -1, -1, -1)
        std_low = torch.exp(log_std_low)

        dist = Independent(Normal(mean_low, std_low), 3)

        return dist, mean_low, std_low, log_std_low

    def get_dist(self, x):
        h = self.encode_feature(x)
        return self.get_dist_from_h(h)

    # ============================================================
    # grid utilities
    # ============================================================

    def make_identity_grid(self, B, H, W, device, dtype):
        """
        returns:
            [B, H, W, 2]
        """
        ys = torch.linspace(-1.0, 1.0, H, device=device, dtype=dtype)
        xs = torch.linspace(-1.0, 1.0, W, device=device, dtype=dtype)

        yy, xx = torch.meshgrid(ys, xs, indexing="ij")
        grid = torch.stack([xx, yy], dim=-1)
        grid = grid.unsqueeze(0).expand(B, H, W, 2)

        return grid

    def upsample_disp(self, disp_low, h):
        """
        disp_low:
            [B, H_c, W_c, 2]

        h:
            [B, C_h, H_h, W_h]

        returns:
            disp:
                [B, H_h, W_h, 2]
        """
        _, _, H_h, W_h = h.shape

        disp_low = disp_low.permute(0, 3, 1, 2)

        disp = F.interpolate(
            disp_low,
            size=(H_h, W_h),
            mode="bilinear",
            align_corners=False,
        )

        disp = disp.permute(0, 2, 3, 1)

        return disp

    def disp_to_grid(self, disp, h):
        """
        disp:
            [B, H_h, W_h, 2]

        h:
            [B, C_h, H_h, W_h]

        returns:
            grid_h: [B, H_h, W_h, 2]
        """
        B, _, H_h, W_h = h.shape

        base_grid = self.make_identity_grid(
            B=B,
            H=H_h,
            W=W_h,
            device=h.device,
            dtype=h.dtype,
        )

        grid_h = base_grid + self.disp_scale * disp
        grid_h = torch.clamp(grid_h, -1.2, 1.2)

        return grid_h

    # ============================================================
    # deformation
    # ============================================================

    def deform_feature(self, h, disp):
        """
        h:
            [B, C_h, H_h, W_h]

        disp:
            [B, H_h, W_h, 2]

        returns:
            h_deformed: [B, C_h, H_h, W_h]
        """
        grid_h = self.disp_to_grid(disp, h)

        h_deformed = F.grid_sample(
            h,
            grid_h,
            mode="bilinear",
            padding_mode="zeros",
            align_corners=False,
        )

        return h_deformed

    def deform_feature_from_low(self, h, disp_low):
        """
        disp_low:
            [B, H_c, W_c, 2]

        returns:
            h_deformed: [B, C_h, H_h, W_h]
            disp: [B, H_h, W_h, 2]
        """
        disp = self.upsample_disp(disp_low, h)
        h_deformed = self.deform_feature(h, disp)

        return h_deformed, disp

    # ============================================================
    # optional smoothness regularization
    # ============================================================

    def smoothness_loss(self, disp_low):
        """
        Smoothness loss on low-resolution control-point field.

        disp_low:
            [B, H_c, W_c, 2]
        """
        loss_h = (disp_low[:, 1:, :, :] - disp_low[:, :-1, :, :]).pow(2).mean()
        loss_w = (disp_low[:, :, 1:, :] - disp_low[:, :, :-1, :]).pow(2).mean()

        return loss_h + loss_w

    # ============================================================
    # action API
    # ============================================================

    def sample_action(self, x):
        """
        returns:
            action:
                disp_low [B, H_c, W_c, 2]

            stimulation:
                [B, n_electrodes]

            log_prob:
                [B]

            entropy:
                [B]

            mean_low:
                [B, H_c, W_c, 2]

            log_std_low:
                [B, H_c, W_c, 2]
        """
        h = self.encode_feature(x)

        dist, mean_low, std_low, log_std_low = self.get_dist_from_h(h)

        disp_low = dist.rsample()
        log_prob = dist.log_prob(disp_low)
        entropy = dist.entropy()

        h_deformed, disp = self.deform_feature_from_low(h, disp_low)
        h_deformed_flat = self.flatten_feature(h_deformed)

        stim_logits = self.stim_mapping(h_deformed_flat)
        stimulation = self.out_activation(stim_logits) * self.output_scaling

        action = disp_low

        return action, stimulation, log_prob, entropy, mean_low, log_std_low

    def act(self, x, deterministic=False):
        """
        deterministic=True uses mean_low.
        """
        h = self.encode_feature(x)

        dist, mean_low, std_low, log_std_low = self.get_dist_from_h(h)

        disp_low = mean_low if deterministic else dist.rsample()

        log_prob = dist.log_prob(disp_low)

        h_deformed, disp = self.deform_feature_from_low(h, disp_low)
        h_deformed_flat = self.flatten_feature(h_deformed)

        stim_logits = self.stim_mapping(h_deformed_flat)
        stimulation = self.out_activation(stim_logits) * self.output_scaling

        return stimulation, log_prob

    def evaluate_action(self, x, action):
        """
        PPO / policy-gradient log_prob recomputation.

        action:
            disp_low [B, H_c, W_c, 2]
        """
        h = self.encode_feature(x)

        dist, mean_low, std_low, log_std_low = self.get_dist_from_h(h)

        disp_low = action
        log_prob = dist.log_prob(disp_low)

        h_deformed, disp = self.deform_feature_from_low(h, disp_low)
        h_deformed_flat = self.flatten_feature(h_deformed)

        stim_logits = self.stim_mapping(h_deformed_flat)
        stimulation = self.out_activation(stim_logits) * self.output_scaling

        return stimulation, log_prob, mean_low, log_std_low

    def sample_n_actions(self, x, n):
        """
        returns:
            actions_low:
                [n, B, H_c, W_c, 2]

            stimulation:
                [n, B, n_electrodes]

            log_prob:
                [n, B]

            mean_low:
                [B, H_c, W_c, 2]

            log_std_low:
                [B, H_c, W_c, 2]
        """
        h = self.encode_feature(x)
        B, C_h, H_h, W_h = h.shape

        dist, mean_low, std_low, log_std_low = self.get_dist_from_h(h)

        actions_low = dist.rsample((n,))
        log_prob = dist.log_prob(actions_low)

        n_, B_, H_c, W_c, _ = actions_low.shape

        actions_low_flat = actions_low.reshape(n_ * B_, H_c, W_c, 2)

        h_rep = h.unsqueeze(0).expand(n_, B_, C_h, H_h, W_h)
        h_rep = h_rep.reshape(n_ * B_, C_h, H_h, W_h)

        h_deformed, disp = self.deform_feature_from_low(h_rep, actions_low_flat)
        h_deformed_flat = self.flatten_feature(h_deformed)

        stim_logits = self.stim_mapping(h_deformed_flat)
        stimulation = self.out_activation(stim_logits) * self.output_scaling
        stimulation = stimulation.view(n_, B_, -1)

        return actions_low, stimulation, log_prob, mean_low, log_std_low

    def forward(self, x, deterministic=False):
        stimulation, log_prob = self.act(x, deterministic=deterministic)
        return stimulation



class PolicyLatentDeltaEncoder(nn.Module):
    def __init__(
        self,
        in_channels=3,
        n_electrodes=638,
        h_dim=1024,
        out_scaling=1e-4,
        out_activation='relu',
        min_log_std=-4.0,
        max_log_std=4.0,
        delta_scale=0.1,
    ):
        super().__init__()

        self.output_scaling = out_scaling
        self.min_log_std = min_log_std
        self.max_log_std = max_log_std
        self.h_dim = h_dim
        self.delta_scale = delta_scale

        self.stim_encoder = nn.Sequential(
            *convlayer(in_channels, 8, 3, 1, 1),
            *convlayer(8, 16, 3, 1, 1, resample_out=nn.MaxPool2d(2)),
            *convlayer(16, 32, 3, 1, 1, resample_out=nn.MaxPool2d(2)),
            ResidualBlock(32, resample_out=None),
            ResidualBlock(32, resample_out=None),
            ResidualBlock(32, resample_out=None),
            ResidualBlock(32, resample_out=None),
            *convlayer(32, 16, 3, 1, 1),
            nn.Conv2d(16, 1, 3, 1, 1),
            nn.Flatten()
        )

        # delta distribution: p(delta | h)
        self.delta_mean_head = nn.Linear(h_dim, h_dim)
        self.delta_log_std_head = nn.Linear(h_dim, h_dim)

        # initialize close to no-op: delta ≈ 0
        nn.init.zeros_(self.delta_mean_head.weight)
        nn.init.zeros_(self.delta_mean_head.bias)
        nn.init.zeros_(self.delta_log_std_head.weight)
        nn.init.constant_(self.delta_log_std_head.bias, 1)

        self.stim_mapping = nn.Linear(h_dim, n_electrodes)

        self.out_activation = {
            'tanh': nn.Tanh(),
            'sigmoid': nn.Sigmoid(),
            'relu': nn.ReLU(),
            'softmax': nn.Softmax(dim=1),
        }[out_activation]

    def _get_delta_params(self, h):
        mean = self.delta_mean_head(h)
        log_std = self.delta_log_std_head(h)
        log_std = torch.clamp(log_std, self.min_log_std, self.max_log_std)
        std = torch.exp(log_std)
        return mean, std, log_std

    def get_dist(self, x):
        h = self.stim_encoder(x)
        mean, std, log_std = self._get_delta_params(h)
        dist = Independent(Normal(mean, std), 1)
        return dist, h, mean, std, log_std

    def apply_delta(self, h, delta):
        h_trans = h + delta
        return h_trans

    def evaluate_action(self, x, action):
        dist, h, mean, std, log_std = self.get_dist(x)

        delta = action
        h_trans = self.apply_delta(h, delta)

        stim_logits = self.stim_mapping(h_trans)
        stimulation = self.out_activation(stim_logits) * self.output_scaling

        log_prob = dist.log_prob(delta)
        return stimulation, log_prob, mean, log_std

    def sample_action(self, x):
        dist, h, mean, std, log_std = self.get_dist(x)

        delta = dist.rsample()
        h_trans = self.apply_delta(h, delta)

        stim_logits = self.stim_mapping(h_trans)
        stimulation = self.out_activation(stim_logits) * self.output_scaling

        log_prob = dist.log_prob(delta)
        entropy = dist.entropy()

        return delta, stimulation, log_prob, entropy, mean, log_std

    def sample_n_actions(self, x, n):
        dist, h, mean, std, log_std = self.get_dist(x)

        # delta: [n, B, h_dim]
        delta = dist.rsample((n,))
        log_prob = dist.log_prob(delta)  # [n, B]

        n_, B, D = delta.shape

        h_rep = h.unsqueeze(0).expand(n_, B, -1).reshape(n_ * B, -1)
        delta_flat = delta.reshape(n_ * B, D)

        h_trans = self.apply_delta(h_rep, delta_flat)

        stim_logits = self.stim_mapping(h_trans)
        stimulation = self.out_activation(stim_logits) * self.output_scaling
        stimulation = stimulation.view(n_, B, -1)

        return delta, stimulation, log_prob, mean, log_std

    def act(self, x, deterministic=False):
        dist, h, mean, std, log_std = self.get_dist(x)

        delta = mean if deterministic else dist.rsample()
        h_trans = self.apply_delta(h, delta)

        stim_logits = self.stim_mapping(h_trans)
        stimulation = self.out_activation(stim_logits) * self.output_scaling

        log_prob = dist.log_prob(delta)
        return stimulation, log_prob

    def forward(self, x, deterministic=False):
        stimulation, log_prob = self.act(x, deterministic=deterministic)
        return stimulation



class PolicyAffineEncoder(nn.Module):
    def __init__(
        self,
        in_channels=3,
        n_electrodes=638,
        affine_dim=10,  # [tx, ty, rot, log_sx, log_sy, shx, shy, gain_raw, bias_raw, gamma_raw]
        out_scaling=1e-4,
        out_activation='relu',
        min_log_std=-4.0,
        max_log_std=4.0,
    ):
        super().__init__()
        self.output_scaling = out_scaling
        self.min_log_std = min_log_std
        self.max_log_std = max_log_std
        self.affine_dim = affine_dim

        # 1) affine policy: pi(a | x)
        # self.affine_mean = nn.Parameter(torch.zeros(affine_dim))
        # self.affine_log_std = nn.Parameter(torch.full((affine_dim,), 0.5))
        # self.affine_backbone = nn.Sequential(
        #     *convlayer(in_channels, 8, 3, 1, 1),
        #     *convlayer(8, 16, 3, 1, 1, resample_out=nn.MaxPool2d(2)),
        #     *convlayer(16, 32, 3, 1, 1, resample_out=nn.MaxPool2d(2)),
        #     ResidualBlock(32, resample_out=None),
        #     ResidualBlock(32, resample_out=None),
        #     ResidualBlock(32, resample_out=None),
        #     ResidualBlock(32, resample_out=None),
        #     *convlayer(32, 16, 3, 1, 1),
        #     nn.Conv2d(16, 1, 3, 1, 1),
        #     nn.Flatten()
        # )

        self.affine_mean_head = nn.Linear(1024, affine_dim)
        self.affine_log_std_head = nn.Linear(1024, affine_dim)

        # # initialize close to identity / small variance
        # nn.init.zeros_(self.affine_mean_head.weight)
        # nn.init.zeros_(self.affine_mean_head.bias)
        # nn.init.zeros_(self.affine_log_std_head.weight)
        # nn.init.constant_(self.affine_log_std_head.bias, 0.5)

        # 2) deterministic stim encoder
        self.stim_encoder = nn.Sequential(
            *convlayer(in_channels, 8, 3, 1, 1),
            *convlayer(8, 16, 3, 1, 1, resample_out=nn.MaxPool2d(2)),
            *convlayer(16, 32, 3, 1, 1, resample_out=nn.MaxPool2d(2)),
            ResidualBlock(32, resample_out=None),
            ResidualBlock(32, resample_out=None),
            ResidualBlock(32, resample_out=None),
            ResidualBlock(32, resample_out=None),
            *convlayer(32, 16, 3, 1, 1),
            nn.Conv2d(16, 1, 3, 1, 1),
            nn.Flatten()
        )
        self.stim_mapping = nn.Linear(1024, n_electrodes)
        self.out_activation = {
            'tanh': nn.Tanh(),
            'sigmoid': nn.Sigmoid(),
            'relu': nn.ReLU(),
            'softmax': nn.Softmax(dim=1),
        }[out_activation]

    def _get_affine_params(self, x):
        h = self.stim_encoder(x)
        mean = self.affine_mean_head(h)
        log_std = self.affine_log_std_head(h)
        log_std = torch.clamp(log_std, self.min_log_std, self.max_log_std)
        std = torch.exp(log_std)
        return mean, std, log_std
    # def _get_affine_params(self, x):
    #     B = x.shape[0]

    #     mean = self.affine_mean.unsqueeze(0).expand(B, -1)

    #     log_std = torch.clamp(
    #         self.affine_log_std,
    #         self.min_log_std,
    #         self.max_log_std
    #     )
    #     log_std = log_std.unsqueeze(0).expand(B, -1)

    #     std = torch.exp(log_std)
    #     return mean, std, log_std
    def get_dist(self, x):
        mean, std, log_std = self._get_affine_params(x)
        dist = Independent(Normal(mean, std), 1)
        return dist, mean, std, log_std

    def transform_image(self, x, theta):
        grid = F.affine_grid(theta, x.size(), align_corners=False)
        x_trans = F.grid_sample(
            x, grid,
            mode='bilinear',
            padding_mode='zeros',
            align_corners=False
        )
        return x_trans
    
    def transform_intensity(self, x, a):
        """
        a: [B, 10]
        last 3 dims:
        [gain_raw, bias_raw, gamma_raw]
        """
        gain_raw = a[:, 7]
        bias_raw = a[:, 8]
        gamma_raw = a[:, 9]

        gain = torch.exp(0.2 * torch.tanh(gain_raw))
        bias = 0.15 * torch.tanh(bias_raw)
        gamma = torch.exp(0.2 * torch.tanh(gamma_raw))

        gain = gain.view(-1, 1, 1, 1)
        bias = bias.view(-1, 1, 1, 1)
        gamma = gamma.view(-1, 1, 1, 1)

        x = gain * x + bias
        x = torch.clamp(x, 1e-6, 1.0)
        x = x ** gamma
        x = torch.clamp(x, 0.0, 1.0)
        return x
    
    def preprocess_image(self, x, action):
        # first 7 dimensions perform geometric transformation
        theta = affine_params_to_theta(action[:, :7])
        x_trans = self.transform_image(x, theta)

        # last 3 dimensions perform intensity transformation
        x_trans = self.transform_intensity(x_trans, action)
        return x_trans
    
    def evaluate_action(self, x, action):
        dist, mean, std, log_std = self.get_dist(x)
        log_prob = dist.log_prob(action)

        x_trans = self.preprocess_image(x, action)
        stim_logits = self.stim_mapping(self.stim_encoder(x_trans))
        stimulation = self.out_activation(stim_logits) * self.output_scaling
        return stimulation, log_prob, mean, log_std

    def sample_action(self, x):
        dist, mean, std, log_std = self.get_dist(x)
        action = dist.rsample()
        x_trans = self.preprocess_image(x, action)

        stim_logits = self.stim_mapping(self.stim_encoder(x_trans))
        stimulation = self.out_activation(stim_logits) * self.output_scaling

        log_prob = dist.log_prob(action)
        entropy = dist.entropy()
        return action, stimulation, log_prob, entropy, mean, log_std
    def sample_n_actions(self, x, n):
        dist, mean, std, log_std = self.get_dist(x)   # x: [B,C,H,W]
        # [n, B, affine_dim]
        a = dist.sample((n,))
        log_prob = dist.log_prob(a)   # [n, B]
        n_, B, D = a.shape
        x_rep = x.unsqueeze(0).expand(n_, B, *x.shape[1:]).reshape(n_ * B, *x.shape[1:])
        a_flat = a.reshape(n_ * B, D)

        x_trans = self.preprocess_image(x_rep, a_flat)
        stim_logits = self.stim_mapping(self.stim_encoder(x_trans))
        stimulation = self.out_activation(stim_logits) * self.output_scaling
        stimulation = stimulation.view(n_, B, -1)

        return a, stimulation, log_prob, mean, log_std
    def act(self, x, deterministic=False):
        dist, mean, std, log_std = self.get_dist(x)
        action = mean if deterministic else dist.rsample()

        x_trans = self.preprocess_image(x, action)

        stim_logits = self.stim_mapping(self.stim_encoder(x_trans))
        stimulation = self.out_activation(stim_logits) * self.output_scaling

        log_prob = dist.log_prob(action)
        return stimulation, log_prob

    def forward(self, x, deterministic=False):
        
        stimulation, log_prob = self.act(x, deterministic=deterministic)
        return stimulation
    
class SafetyLayer(torch.nn.Module):
    def __init__(self, n_steps=5, order=1, out_scaling=120e-6):
        super(SafetyLayer, self).__init__()
        self.n_steps = n_steps
        self.order = order
        self.output_scaling = out_scaling

    def stairs(self, x):
        """Assumes input x in range [0,1]. Returns quantized output over range [0,1] with n quantization levels"""
        return torch.round((self.n_steps-1)*x)/(self.n_steps-1)

    def softstairs(self, x):
        """Assumes input x in range [0,1]. Returns sin(x) + x (soft staircase), scaled to range [0,1].
        param n: number of phases (soft quantization levels)
        param order: number of recursion levels (determining the steepnes of the soft quantization)"""

        return (torch.sin(((self.n_steps - 1) * x - 0.5) * 2 * math.pi) +
                         (self.n_steps - 1) * x * 2 * math.pi) / ((self.n_steps - 1) * 2 * math.pi)
    
    def forward(self, x):
        out = self.softstairs(x) + self.stairs(x).detach() - self.softstairs(x).detach()
        return (out * self.output_scaling).clamp(1e-32,None)
    

class E2E_Decoder(nn.Module):
    """
    Simple non-generic phosphene decoder.
    in: (256x256) SVP representation
    out: (128x128) Reconstruction
    """
    def __init__(self, in_channels=1, out_channels=1, out_activation='sigmoid'):
        super(E2E_Decoder, self).__init__()

        # Activation of output layer
        self.out_activation = {'tanh': nn.Tanh(),
                               'sigmoid': nn.Sigmoid(),
                               'relu': nn.LeakyReLU(),
                               'softmax':nn.Softmax(dim=1)}[out_activation]
        # Model
        self.model = nn.Sequential(*convlayer(in_channels,16,3,1,1),
                                   *convlayer(16,32,3,1,1),
                                   *convlayer(32,64,3,2,1),
                                   ResidualBlock(64),
                                   ResidualBlock(64),
                                   ResidualBlock(64),
                                   ResidualBlock(64),
                                   *convlayer(64,32,3,1,1),
                                   nn.Conv2d(32,out_channels,3,1,1),
                                   self.out_activation)

    def forward(self, x):
        return self.model(x)

def get_personalized_e2e_autoencoder_new(cfg):
    encoder = PolicyFeatureRBFDeformEncoder_brightness(in_channels=cfg['in_channels'],
                               n_electrodes=cfg['n_electrodes'],
                               out_scaling=cfg['output_scaling'],
                               out_activation=cfg['encoder_out_activation']).to(cfg['device'])
    decoder = E2E_Decoder(in_channels=cfg['in_channels'],
                          out_channels=cfg['out_channels'],
                          out_activation=cfg['decoder_out_activation']).to(cfg['device'])

    if cfg['output_steps'] != 'None':
        assert cfg['encoder_out_activation'] == 'sigmoid'
        encoder.output_scaling = 1.0

        class _EncoderWithSafety(nn.Module):
            def __init__(self, base_encoder, safety_layer):
                super().__init__()
                self.base_encoder = base_encoder
                self.safety_layer = safety_layer

            def get_dist(self, x):
                return self.base_encoder.get_dist(x)

            def act(self, x, deterministic=False):
                stimulation, log_prob = self.base_encoder.act(x, deterministic)
                stimulation = self.safety_layer(stimulation)
                return stimulation, log_prob

            def evaluate_action(self, x, action):
                stimulation, log_prob, mean, log_std = self.base_encoder.evaluate_action(x, action)
                stimulation = self.safety_layer(stimulation)
                return stimulation, log_prob, mean, log_std

            def sample_action(self, x):
                action, stimulation, log_prob, entropy, mean, log_std = self.base_encoder.sample_action(x)
                stimulation = self.safety_layer(stimulation)
                return action, stimulation, log_prob, entropy, mean, log_std

            def sample_n_actions(self, x, n):
                a, stimulation, log_prob, mean, log_std = self.base_encoder.sample_n_actions(x, n)
                stimulation = self.safety_layer(stimulation)
                return a, stimulation, log_prob, mean, log_std
            def forward(self, images, deterministic=False):
                stimulation = self.base_encoder(images, deterministic)
                return self.safety_layer(stimulation)

        safety = SafetyLayer(n_steps=cfg['output_steps'],
                             order=2,
                             out_scaling=cfg['output_scaling']).to(cfg['device'])
        encoder = _EncoderWithSafety(encoder, safety)
    return encoder, decoder

def get_new_models_local(local_cfg,simulator_config,simulator_ranges,coordinates_visual_field):
    # Build one simulator once to infer SPV size for personalized decoder.
    params = copy.deepcopy(simulator_config)
    params['run']['batch_size'] = int(local_cfg.get('simulator_batch_size', 1))
    params['run']['gpu'] = int(local_cfg.get('gpu', params['run'].get('gpu', 0)))
    params['thresholding']['batch_size'] = int(local_cfg.get('simulator_batch_size', 1))
    simulator = PhospheneSimulator(params, coordinates_visual_field)

    local_cfg['SPVsize'] = simulator.phosphene_maps.shape[-2:]
    local_cfg['subject_param_dim'] = len(simulator_ranges)
    local_cfg['svp_size'] = int(local_cfg['SPVsize'][0])

    encoder, decoder = get_personalized_e2e_autoencoder_new(local_cfg)


    optimizer = torch.optim.Adam(
        [*encoder.parameters(), *decoder.parameters()],
        lr=local_cfg['learning_rate']
    )
    return {
        'encoder': encoder,
        'decoder': decoder,
        'optimizer': optimizer,
        'simulator': simulator,
    }

def set_deterministic_mode(deterministic_flag: bool) -> None:
    """
    Configure PyTorch/CUDA deterministic behavior.

    Args:
        deterministic_flag: 
            True  -> enable deterministic algorithms
            False -> disable deterministic algorithms for better speed
    """
    if deterministic_flag:
        # Required by CUDA/cuBLAS for deterministic backward on some ops.
        os.environ.setdefault('CUBLAS_WORKSPACE_CONFIG', ':4096:8')
        torch.use_deterministic_algorithms(True)
        torch.backends.cudnn.deterministic = True
        torch.backends.cudnn.benchmark = False
    else:
        torch.use_deterministic_algorithms(False)
        torch.set_deterministic_debug_mode(0)
        torch.backends.cudnn.deterministic = False
        torch.backends.cudnn.benchmark = True

def save_checkpoint(path, epoch, val_loss,models, optimizer, cfg):
    torch.save({
        'epoch': epoch,
        'val_loss': val_loss,
        'encoder_state_dict': models['encoder'].state_dict(),
        'decoder_state_dict': models['decoder'].state_dict(),
        'optimizer_state_dict': optimizer.state_dict(),
        'cfg': cfg,
    }, path)

def run_validation(patient, models,valloader,cfg,encoder,decoder,compound_loss_func):
    for m in models.values():
        if isinstance(m, torch.nn.Module):
            m.eval()

    val_running_total = 0.0
    val_running_recon = 0.0
    val_running_reg = 0.0
    with torch.no_grad():
        for images, label in valloader:
            label = dilation3x3(label)
            batch_size = images.shape[0]
            unstandardized_images = undo_standardize(images)
            input_masked = unstandardized_images * cfg['circular_mask']

            # Batch forward through encoder once.
            torch.use_deterministic_algorithms(False)
            stimulation = encoder(label)

            phosphenes_list = []
            input_resized_list = []
            phosphene_centers_list = []
            input_centers_list = []

            for i in range(batch_size):
                simulator = patient.get_simulator()
                simulator.reset()

                stimulation_i = stimulation[i:i+1]
                phos_i = simulator(stimulation_i).unsqueeze(1)
                input_resized_i = resize(input_masked[i:i+1], cfg['SPVsize'])

                phosphenes_list.append(phos_i)
                input_resized_list.append(input_resized_i)
                phosphene_centers_list.append(simulator.sample_centers(phos_i))
                input_centers_list.append(simulator.sample_centers(input_resized_i))

            phosphenes = torch.cat(phosphenes_list, dim=0)
            input_resized = torch.cat(input_resized_list, dim=0)
            target_resized = resize(label * cfg['circular_mask'], cfg['SPVsize'],)
            
            # Batch forward through decoder once.
            reconstruction = decoder(phosphenes)

            model_output = {
                'input': input_masked,
                'stimulation': stimulation,
                'phosphenes': phosphenes,
                'reconstruction': reconstruction * cfg['circular_mask'],
                'input_resized': input_resized,
                'phosphene_centers': torch.cat(phosphene_centers_list, dim=0),
                'input_centers': torch.cat(input_centers_list, dim=0),
                'target': label * cfg['circular_mask'],
                'target_resized': target_resized,
                'target_centers': simulator.sample_centers(target_resized),
            }
            loss_terms = compound_loss_func(model_output)
            val_running_total += loss_terms['total'].item()
            val_running_recon += loss_terms['reconstruction_loss'].item()
            val_running_reg += loss_terms['regularization_loss'].item()

    for m in models.values():
        if isinstance(m, torch.nn.Module):
            m.train()

    denom = max(1, len(valloader))
    return {
        'total': val_running_total / denom,
        'reconstruction_loss': val_running_recon / denom,
        'regularization_loss': val_running_reg / denom,
    }

def compute_stim_level_ratio(encoder, stimulation_tensor):
    """Return quantization level occupancy for one batch stimulation tensor."""
    flat = stimulation_tensor.detach().flatten().cpu()

    # Fallback: no safety layer -> return empty stats
    if not hasattr(encoder, 'safety_layer'):
        return {
            'enabled': False,
            'n_steps': 0,
            'levels': torch.tensor([], dtype=flat.dtype),
            'ratio': torch.tensor([], dtype=flat.dtype),
            'collapse_ratio_top2': float('nan'),
        }

    n_steps = int(encoder.safety_layer.n_steps)
    out_scaling = float(encoder.safety_layer.output_scaling)
    levels = torch.linspace(0.0, out_scaling, steps=n_steps)
    levels[0] = 1e-32  # match lower clamp in SafetyLayer

    dists = (flat[:, None] - levels[None, :]).abs()
    nearest_idx = torch.argmin(dists, dim=1)
    counts = torch.bincount(nearest_idx, minlength=n_steps).float()
    ratio = counts / counts.sum().clamp_min(1.0)

    top2 = torch.topk(ratio, k=min(2, n_steps)).values.sum().item()
    return {
        'enabled': True,
        'n_steps': n_steps,
        'levels': levels,
        'ratio': ratio,
        'collapse_ratio_top2': float(top2),
    }

class E2E_Encoder(nn.Module):
    """
    Simple non-generic encoder class that receives 128x128 input and outputs 32x32 feature map as stimulation protocol
    """
    def __init__(self, in_channels=3, out_channels=1, n_electrodes=638, out_scaling=1e-4, out_activation='relu'):
        super(E2E_Encoder, self).__init__()
        self.output_scaling = out_scaling
        self.out_activation = {'tanh': nn.Tanh(), ## NOTE: simulator expects only positive stimulation values 
                               'sigmoid': nn.Sigmoid(),
                               'relu': nn.ReLU(),
                               'softmax':nn.Softmax(dim=1)}[out_activation]

        # Model
        self.model = nn.Sequential(*convlayer(in_channels,8,3,1,1),
                                   *convlayer(8,16,3,1,1,resample_out=nn.MaxPool2d(2)),
                                   *convlayer(16,32,3,1,1,resample_out=nn.MaxPool2d(2)),
                                   ResidualBlock(32, resample_out=None),
                                   ResidualBlock(32, resample_out=None),
                                   ResidualBlock(32, resample_out=None),
                                   ResidualBlock(32, resample_out=None),
                                   *convlayer(32,16,3,1,1),
                                   nn.Conv2d(16,1,3,1,1),
                                   nn.Flatten(),
                                   nn.Linear(1024,n_electrodes),
                                   self.out_activation)

    def forward(self, x):
        self.out = self.model(x)
        stimulation = self.out*self.output_scaling #scaling improves numerical stability
        return stimulation


def get_e2e_encoder(cfg):

    # initialize encoder and decoder
    encoder = E2E_Encoder(in_channels=cfg['in_channels'],
                          n_electrodes=cfg['n_electrodes'],
                          out_scaling=cfg['output_scaling'],
                          out_activation=cfg['encoder_out_activation']).to(cfg['device'])
    
    # If output steps are specified, add safety layer at the end of the encoder model 
    if cfg['output_steps'] != 'None':
        assert cfg['encoder_out_activation'] == 'sigmoid'
        encoder.output_scaling = 1.0
        encoder = torch.nn.Sequential(encoder,
                                      SafetyLayer(n_steps=cfg['output_steps'],
                                                  order=2,
                                                  out_scaling=cfg['output_scaling'])).to(cfg['device'])
    return encoder