from pathlib import Path
import yaml
from pathlib import Path
from types import SimpleNamespace
import numpy as np
import torch
from torch.utils.data import DataLoader
from local_datasets import *
import torch.nn.functional as F
from pathlib import Path
from torchvision.datasets import MNIST

def get_manual_batch(dataset, batch_size, device, mode='random', dataset_type="calibration_set", generator = None, fix_idx=None):

    
    N = len(dataset[dataset_type])
    if generator is not None:
        if mode == 'random':
            indices = torch.randperm(N, generator=generator)[:batch_size].tolist()
        else:
            idx = fix_idx if fix_idx is not None else torch.randint(0, N, (1,), generator=generator).item()
            indices = [idx] * batch_size
    else:
        if mode == 'random':
            indices = torch.randperm(N)[:batch_size].tolist()
        else:
            idx = fix_idx if fix_idx is not None else torch.randint(0, N, (1,)).item()
            indices = [idx] * batch_size

    images = torch.stack([dataset[dataset_type][idx][0] for idx in indices],dim=0).to(device)

    return images, indices


def load_mnist(model, scale=2.0, pad=2, cache_dir=None):
    """Load MNIST targets with DSE-equivalent preprocessing.

    Returns:
        (x_train, y_train), (x_test, y_test)
    where x_* is float32 NHWC with shape (N, H, W, 1).
    """
    h = int(model.grid.shape[0])
    w = int(model.grid.shape[1])
    h_in = h - 2 * int(pad)
    w_in = w - 2 * int(pad)
    if h_in <= 0 or w_in <= 0:
        raise ValueError(f"Invalid grid/pad combination: grid=({h}, {w}), pad={pad}")

    if cache_dir is None:
        cache_dir = Path(__file__).resolve().parents[1] / "_Datasets" / "mnist_cache"

    train_ds = MNIST(root=str(cache_dir), train=True, download=True)
    test_ds = MNIST(root=str(cache_dir), train=False, download=True)

    def preprocess(images_u8):
        x = images_u8.to(torch.float32).div(255.0).mul(float(scale)).unsqueeze(1)
        x = F.interpolate(x, size=(h_in, w_in), mode="bilinear", align_corners=False)
        x = F.pad(x, (int(pad), int(pad), int(pad), int(pad)), mode="constant", value=0.0)
        x = x.permute(0, 2, 3, 1).contiguous()
        return x.cpu().numpy().astype("float32")

    x_train = preprocess(train_ds.data)
    y_train = train_ds.targets.cpu().numpy()
    x_test = preprocess(test_ds.data)
    y_test = test_ds.targets.cpu().numpy()

    return (x_train, y_train), (x_test, y_test)


def load_yaml(path):
    path = Path(path)
    with open(path, "r", encoding="utf-8") as f:
        return yaml.safe_load(f)


def load_all_configs(config_dir="configs", custom_config=None):
    config_dir = Path(config_dir)

    if custom_config:
        train_config = load_yaml(config_dir / custom_config)
    else:
        train_config = load_yaml(config_dir / "train_config_boundary.yaml")

    simulator_config = load_yaml(config_dir / "simulator_config.yaml")
    ranges_config = load_yaml(config_dir / "simulator_ranges.yaml")

    simulator_ranges = ranges_config["simulator_ranges"]
    simulator_ranges_training = ranges_config["simulator_ranges_training"]
    simulator_ranges_testing = ranges_config["simulator_ranges_testing"]

    return train_config, simulator_config, simulator_ranges, simulator_ranges_training, simulator_ranges_testing

def load_dataset(train_config):
    trainset = ADE_Dataset(
        device=train_config["device"],
        directory=train_config["data_directory"],
        imsize=(128, 128),
        load_preprocessed=train_config.get("load_preprocessed", True),
        contour_labels=True,
    )

    valset = ADE_Dataset(
        device=train_config["device"],
        directory=train_config["data_directory"],
        imsize=(128, 128),
        load_preprocessed=train_config.get("load_preprocessed", True),
        validation=True,
        contour_labels=True,
    )

    calibset = Calibration_Dataset_contour(
        device=train_config["device"],
        directory=train_config["calibration_data_directory"],
        imsize=(128, 128),
        load_preprocessed=train_config.get("calibration_load_preprocessed", True),
        validation=True,
        contour_labels=True,
    )
    dinoset = DINO_Dataset_contour(
        device=train_config["device"],
        directory=train_config["dino_data_directory"],
        imsize=(128, 128),
        load_preprocessed=train_config.get("dino_load_preprocessed", True),
        validation=True,
        contour_labels=True,
    )

    trainloader = DataLoader(
        trainset,
        batch_size=train_config["batch_size"],
        shuffle=True,
        drop_last=True,
    )

    valloader = DataLoader(
        valset,
        batch_size=train_config["batch_size"],
        shuffle=False,
        drop_last=True,
    )

    example_batch = next(iter(valloader))
    train_config["circular_mask"] = trainset._mask.to(train_config["device"])

    hilo_target_source = train_config.get("hilo_target_source", "mnist")

    if hilo_target_source == "mnist":
        dummy_model = SimpleNamespace(grid=np.zeros((128, 128), dtype=np.float32))
        try:
            (_, _), (x_test, _) = load_mnist(dummy_model, scale=2.0, pad=2,cache_dir='../_Datasets/mnist_cache')
            targets_test = x_test[:2048].astype("float32")
            print(f"Using HILO.load_mnist; targets_test shape: {targets_test.shape}")
        except Exception as e:
            print(f"HILO.load_mnist failed ({type(e).__name__}: {e}); fallback to val targets.")
            hilo_target_source = "val"

    if hilo_target_source == "val":
        targets_test = torch.stack([valset[idx][1] for idx in range(len(valset))], dim=0).detach().cpu()
        if targets_test.ndim == 4 and targets_test.shape[1] == 1:
            targets_test = targets_test.permute(0, 2, 3, 1).contiguous()
        targets_test = targets_test.numpy().astype("float32")
        print(f"Using valset targets; targets_test shape: {targets_test.shape}")

    if hilo_target_source == "calibration":
        targets_test = torch.stack([calibset[idx][1] for idx in range(len(calibset))], dim=0).detach().cpu()
        if targets_test.ndim == 4 and targets_test.shape[1] == 1:
            targets_test = targets_test.permute(0, 2, 3, 1).contiguous()
        targets_test = targets_test.numpy().astype("float32")
        print(f"Using calibration targets; targets_test shape: {targets_test.shape}")
    
    if hilo_target_source == "dino":
        targets_test = torch.stack([dinoset[idx][1] for idx in range(len(dinoset))], dim=0).detach().cpu()
        if targets_test.ndim == 4 and targets_test.shape[1] == 1:
            targets_test = targets_test.permute(0, 2, 3, 1).contiguous()
        targets_test = targets_test.numpy().astype("float32")
        print(f"Using calibration targets; targets_test shape: {targets_test.shape}")

    dataset = {
        "trainset": trainset,
        "valset": valset,
        "calibration_set": calibset if hilo_target_source == "calibration" else None,
        "dino_set": dinoset,
        "trainloader": trainloader,
        "valloader": valloader,
        "example_batch": example_batch,
        "targets_test": targets_test,
    }
    return dataset
