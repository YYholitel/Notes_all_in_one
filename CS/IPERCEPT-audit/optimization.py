import torch
import torch.nn.functional as F
def make_adamw(params, lr=1e-1, betas=(0.9, 0.999)):
    for p in params:
        p.requires_grad = True

    return torch.optim.AdamW(
        params,
        lr=lr,
        betas=betas
    )

def set_trainable(target_params, all_param_groups):
    for params in all_param_groups:
        requires_grad = params is target_params
        for p in params:
            p.requires_grad = requires_grad


def dpo_step(policy,ref_policy,x,a_w,a_l,beta,optimizer,target_params,all_param_groups,):
    for p in policy.parameters():
        p.requires_grad = False
    set_trainable(target_params, all_param_groups)

    _, logp_w, _, _ = policy.evaluate_action(x, a_w)
    _, logp_l, _, _ = policy.evaluate_action(x, a_l)

    with torch.no_grad():
        _, ref_logp_w, _, _ = ref_policy.evaluate_action(x, a_w)
        _, ref_logp_l, _, _ = ref_policy.evaluate_action(x, a_l)

    logits = beta * ((logp_w - logp_l) - (ref_logp_w - ref_logp_l))

    loss = -F.logsigmoid(logits).mean()

    optimizer.zero_grad()
    loss.backward()
    optimizer.step()

    return loss

def build_winner_loser_actions(rank_list, actions, verbose=False):
    winner_actions = []
    loser_actions = []

    for b, rank_b in enumerate(rank_list):
        best_idx = rank_b[-1] - 1
        worst_idx = rank_b[0] - 1

        winner_actions.append(actions[best_idx, b])
        loser_actions.append(actions[worst_idx, b])

        if verbose:
            print(best_idx, worst_idx)

    a_w = torch.stack(winner_actions, dim=0).detach()
    a_l = torch.stack(loser_actions, dim=0).detach()

    return a_w, a_l

def input_rank_for_sample(b, K, name="RBF"):
    if K != 2:
        raise ValueError("This input mode only supports K=2.")

    while True:
        if name == "shift":
            choice_str = input(
                f"Please compare the two phosphene images for the current letter and choose which is MORE CENTERED: 0=FIRST, 1=SECOND: "
            )
        elif name == "rotate":
            choice_str = input(
                f"Please compare the two phosphene images for the current letter and choose which has SMALLER ROTATION: 0=FIRST, 1=SECOND: "
            )
        elif name == "brightness":
            choice_str = input(
                f"Please compare the two phosphene images for the current letter and choose which has BETTER BRIGHTNESS: 0=FIRST, 1=SECOND: "
            )
        else:
            raise ValueError(f"Unknown name: {name}")

        try:
            choice = int(choice_str.strip())
            if choice not in (0, 1):
                raise ValueError

            # rank_b is from worst to best using 1-based indices
            rank_b = [2, 1] if choice == 0 else [1, 2]
            return rank_b

        except Exception:
            print("Invalid input, please enter 0 or 1.")


def flip_rank_if_noisy(rank, noise_prob, rng):
    """
    Only supports K=2.
    rank=[2,1] means the first image wins.
    rank=[1,2] means the second image wins.
    """
    rank = list(rank)
    u = rng.random()
    flipped = u < noise_prob

    event = {"flipped": flipped, "u": u}

    if not flipped:
        return rank, event

    if rank == [2, 1]:
        used_rank = [1, 2]
    elif rank == [1, 2]:
        used_rank = [2, 1]
    else:
        raise ValueError(f"Only K=2 rank is supported, got {rank}")

    return used_rank, event


import os
import random
import torch

def save_dpo_checkpoint(
    path,
    step,
    policy,
    optimizer_shift,
    optimizer_rotate,
    optimizer_brightness,
    logs,
    generator,
    noise_rng,
):
    ckpt = {
        "step": step,
        "policy": policy.state_dict(),

        "optimizer_shift": optimizer_shift.state_dict(),
        "optimizer_rotate": optimizer_rotate.state_dict(),
        "optimizer_brightness": optimizer_brightness.state_dict(),

        "logs": logs,

        "torch_rng_state": torch.get_rng_state(),
        "cuda_rng_state_all": (
            torch.cuda.get_rng_state_all()
            if torch.cuda.is_available()
            else None
        ),

        "batch_generator_state": generator.get_state(),
        "noise_rng_state": noise_rng.getstate(),
    }

    os.makedirs(os.path.dirname(path), exist_ok=True)
    torch.save(ckpt, path)


def load_dpo_checkpoint(
    path,
    policy,
    optimizer_shift,
    optimizer_rotate,
    optimizer_brightness,
    device,
    restore_rng=True,
):
    ckpt = torch.load(path, map_location="cpu")

    policy.load_state_dict(ckpt["policy"])
    policy.to(device)

    optimizer_shift.load_state_dict(ckpt["optimizer_shift"])
    optimizer_rotate.load_state_dict(ckpt["optimizer_rotate"])
    optimizer_brightness.load_state_dict(ckpt["optimizer_brightness"])

    def move_optimizer_to_device(optimizer, device):
        for state in optimizer.state.values():
            for k, v in state.items():
                if torch.is_tensor(v):
                    state[k] = v.to(device)

    move_optimizer_to_device(optimizer_shift, device)
    move_optimizer_to_device(optimizer_rotate, device)
    move_optimizer_to_device(optimizer_brightness, device)

    if restore_rng:
        if ckpt.get("torch_rng_state") is not None:
            torch_rng_state = ckpt["torch_rng_state"].cpu().to(torch.uint8)
            torch.set_rng_state(torch_rng_state)

        if torch.cuda.is_available() and ckpt.get("cuda_rng_state_all") is not None:
            saved_cuda_rng_states = ckpt["cuda_rng_state_all"]

            current_gpu_count = torch.cuda.device_count()
            saved_gpu_count = len(saved_cuda_rng_states)

            restore_gpu_count = min(current_gpu_count, saved_gpu_count)

            cuda_rng_state_all = [
                saved_cuda_rng_states[i].cpu().to(torch.uint8)
                for i in range(restore_gpu_count)
            ]

            torch.cuda.set_rng_state_all(cuda_rng_state_all)

            if current_gpu_count != saved_gpu_count:
                print(
                    f"[Warning] CUDA RNG states mismatch: "
                    f"checkpoint has {saved_gpu_count} GPUs, "
                    f"current environment has {current_gpu_count} GPUs. "
                    f"Restored first {restore_gpu_count} GPU RNG states only."
                )

    generator = torch.Generator()
    if ckpt.get("batch_generator_state") is not None:
        batch_generator_state = ckpt["batch_generator_state"].cpu().to(torch.uint8)
        generator.set_state(batch_generator_state)

    noise_rng = random.Random()
    if ckpt.get("noise_rng_state") is not None:
        noise_rng.setstate(ckpt["noise_rng_state"])

    return {
        "ckpt": ckpt,
        "start_step": ckpt["step"] + 1,
        "logs": ckpt.get("logs", {"steps": []}),
        "generator": generator,
        "noise_rng": noise_rng,
    }