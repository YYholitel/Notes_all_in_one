import copy
import pickle
import torch
from dynaphos.simulator import GaussianSimulator as PhospheneSimulator
import numpy as np
from new_model import *
param_key_map = {
    "k": ("cortex_model", "k"),
    "a": ("cortex_model", "a"),
    "b": ("cortex_model", "b"),
    "alpha": ("cortex_model", "alpha"),
    "dropout_rate": ("cortex_model", "dropout_rate"),
    "noise_scale": ("cortex_model", "noise_scale"),
    "MD": ("size", "MD"),
    "I_half": ("size", "I_half"),
    "slope_size": ("size", "slope_size"),
    "current_spread": ("size", "current_spread"),
    "radius_to_sigma": ("size", "radius_to_sigma"),
    "cps_half": ("brightness_saturation", "cps_half"),
    "slope_brightness": ("brightness_saturation", "slope_brightness"),
    "rheobase": ("thresholding", "rheobase"),
    "activation_threshold": ("thresholding", "activation_threshold"),
    "activation_threshold_sd": ("thresholding", "activation_threshold_sd"),
    "relative_stim_duration": ("default_stim", "relative_stim_duration"),
    "pw_default": ("default_stim", "pw_default"),
    "freq_default": ("default_stim", "freq_default"),
    "gamma": ("gabor", "gamma"),
}
def simulator_config_to_phi_true(simulator_config, simulator_ranges, key_map=param_key_map, device="cpu"):
    values = []
    for name in simulator_ranges.keys():
        if name not in key_map:
            raise KeyError(f"{name} not found in key_map")
        section, key = key_map[name]
        values.append(float(simulator_config[section][key]))
    return torch.tensor(values, dtype=torch.float32, device=device)

def apply_sampled_params(sim_cfg, sampled,key_map=param_key_map):
    for name, value in sampled.items():
        if name in key_map:
            section, key = key_map[name]
            sim_cfg[section][key] = value
    return sim_cfg

def make_simulator_params(phi_batch, simulator_ranges):
    keys = list(simulator_ranges.keys())

    if hasattr(phi_batch, "detach"):
        phi_batch = phi_batch.detach().cpu()

    sampled_params_batch = []
    for phi in phi_batch:
        phi_list = phi.flatten().tolist()
        assert len(phi_list) == len(keys)
        sampled_params = {k: float(v) for k, v in zip(keys, phi_list)}
        sampled_params_batch.append(sampled_params)

    return sampled_params_batch

def make_subject_params(sampled_params, simulator_ranges, device):
    values = [float(sampled_params[k]) for k in simulator_ranges.keys()]
    return torch.tensor(values, device=device).unsqueeze(0)

def sample_simulator_params(ranges, train_config,seed=None,_fixed_subject_params=None):
    if train_config.get('subject_params_random', True):
        rng = np.random.default_rng(seed)
        sampled = {}
        for name, bounds in ranges.items():
            sampled[name] = float(rng.uniform(bounds[0], bounds[1]))
        return sampled

    if _fixed_subject_params is None:
        fixed_seed = train_config.get('subject_params_seed', 42)
        rng = np.random.default_rng(fixed_seed)
        sampled = {}
        for name, bounds in ranges.items():
            sampled[name] = float(rng.uniform(bounds[0], bounds[1]))
        _fixed_subject_params = sampled

    return dict(_fixed_subject_params)

def build_models(train_config, simulator_config, simulator_ranges):
    cfg = dict(train_config)

    with open(cfg["phosphene_map"], "rb") as handle:
        coordinates_visual_field = pickle.load(handle)

    params = copy.deepcopy(simulator_config)
    params["run"]["batch_size"] = int(cfg.get("simulator_batch_size", 1))
    params["run"]["gpu"] = int(cfg.get("gpu", params["run"].get("gpu", 0)))
    params["thresholding"]["batch_size"] = int(cfg.get("simulator_batch_size", 1))

    simulator = PhospheneSimulator(params, coordinates_visual_field)

    cfg["SPVsize"] = simulator.phosphene_maps.shape[-2:]
    cfg["subject_param_dim"] = len(simulator_ranges)
    cfg["svp_size"] = int(cfg["SPVsize"][0])

    encoder, decoder = get_personalized_e2e_autoencoder_new(cfg)

    optimizer = torch.optim.Adam(
        [*encoder.parameters(), *decoder.parameters()],
        lr=cfg["learning_rate"],
    )

    models = {
        "encoder": encoder,
        "decoder": decoder,
        "optimizer": optimizer,
        "simulator": simulator,
    }
    return cfg, models, coordinates_visual_field


def load_checkpoint(models, ckpt_path, device):
    checkpoint = torch.load(ckpt_path, map_location=device)
    models["encoder"].load_state_dict(checkpoint["encoder_state_dict"])
    models["decoder"].load_state_dict(checkpoint["decoder_state_dict"])
    return checkpoint

def load_checkpoint(models, ckpt_path, device):
    checkpoint = torch.load(ckpt_path, map_location=device)

    # PolicyFeatureGlobalDeformEncoder uses lazy initialization for deform params.
    # A dummy forward is needed to create those params before loading state_dict.
    encoder = models["encoder"]
    if hasattr(encoder, 'base_encoder') and hasattr(encoder.base_encoder, '_init_deform_params'):
        cfg_ckpt = checkpoint.get('cfg', {})
        in_channels = int(cfg_ckpt.get('in_channels', 1))
        dummy_input = torch.zeros(1, in_channels, 128, 128, device=device)
        with torch.no_grad():
            _ = encoder(dummy_input)

    models["encoder"].load_state_dict(checkpoint["encoder_state_dict"])
    models["decoder"].load_state_dict(checkpoint["decoder_state_dict"])
    return checkpoint