# iPercept: Interactive Preference Learning for Perceptual Alignment in Visual Prostheses

iPercept is an interactive preference-learning framework for aligning phosphene perception in visual prostheses. The system simulates patient-specific phosphene percepts and uses preference feedback to optimize stimulation patterns toward better perceptual alignment.


![Optimization process](assets/policy_process_sample_0_step_0_99.gif)

## Framework


![Framework overview](assets/framework_01.png)

## Results

We will include optimization results here.

![Optimization results](assets/result1_01.png)

## Data

Our experiments use contour-based visual stimuli and calibration images for phosphene perception alignment. The current implementation supports:

- contour images derived from ADE20K,
- letter/shape calibration stimuli,
- additional evaluation stimuli such as DINO-style contour inputs,
- MNIST-style targets for simple controlled experiments.

Dataset paths are configured in `configs/train_config_boundary.yaml` and `configs/train_config.yaml`. Before running the notebook, update the local paths for your machine, for example:

```yaml
data_directory: ../_Datasets/ADE20K/processed_contours
calibration_data_directory: ../_Datasets/calibration_letters/processed_contours
dino_data_directory: ../_Datasets/DINO
```

We will provide more details on dataset preprocessing and release format later.

## Quick Start

Create the environment:

```bash
conda env create -f environment.yml
conda activate ipercept
```

Run the main experiment notebook:

```bash
jupyter lab main_exp.ipynb
```

Before running, update the dataset paths, checkpoint path, and CUDA device in the config files or notebook.


