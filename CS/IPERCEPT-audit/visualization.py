from setup_model_params import *
from virtual_patient import *
from transform import *
import math
import torch
import matplotlib.pyplot as plt


def visualize_calibration_encoder_outputs(
    encoder,
    decoder,
    simulator,
    patient,
    dataset,
    fig_num=None,
    dataset_type="calibration_set",
    deterministic=True,
    mode="all",
    seed=42,
    as_numpy=False,
    apply_patient_transform=False,
):
    """
    Take images from the calibration set using encoder/decoder/simulator/patient/dataset
    and return full batch image arrays:
      original, phosphene, reconstruction
    """
    data_source = dataset[dataset_type] if isinstance(dataset, dict) else dataset
    generator = torch.Generator().manual_seed(seed)

    if mode == "all" or fig_num is None:
        sample_indices = list(range(len(data_source)))
    elif mode == "random":
        sample_indices = torch.randperm(len(data_source), generator=generator)[:fig_num].tolist()
    elif mode == "first":
        sample_indices = list(range(min(fig_num, len(data_source))))
    else:
        idx = torch.randint(0, len(data_source), (1,), generator=generator).item()
        sample_indices = [idx] * fig_num

    device = getattr(patient, "device", None)
    if device is None:
        device = next(encoder.parameters()).device

    images = torch.stack([data_source[idx][0] for idx in sample_indices], dim=0).to(device)
    mask = getattr(patient, "circular_mask", None)
    if mask is not None:
        mask = mask.to(device=device, dtype=images.dtype)
        original = images * mask
    else:
        original = images

    encoder_was_training = encoder.training
    decoder_was_training = decoder.training
    encoder.eval()
    decoder.eval()

    deterministic_algorithms_enabled = torch.are_deterministic_algorithms_enabled()
    if deterministic_algorithms_enabled:
        torch.use_deterministic_algorithms(False)

    with torch.no_grad():
        if apply_patient_transform:
            transformed_images = patient.transform_image(images)
        else:
            transformed_images = images
        try:
            stimulation = encoder(transformed_images, deterministic=deterministic)
        except TypeError:
            stimulation = encoder(transformed_images)

        simulator.reset()
        phosphenes_list = []
        for i in range(stimulation.shape[0]):
            phos_i = simulator(stimulation[i:i + 1]).unsqueeze(1)
            phosphenes_list.append(phos_i)

        phosphenes = torch.cat(phosphenes_list, dim=0)
        reconstruction = decoder(phosphenes)
        if mask is not None:
            reconstruction = reconstruction * mask


    if encoder_was_training:
        encoder.train()
    if decoder_was_training:
        decoder.train()

    outputs = {
        "original": original.detach().cpu(),
        "phosphene": phosphenes.detach().cpu(),
        "reconstruction": reconstruction.detach().cpu(),
        "transformed": transformed_images.detach().cpu(),
        "stimulation": stimulation.detach().cpu(),
    }

    if as_numpy:
        outputs = {key: value.numpy() for key, value in outputs.items()}

    return outputs, sample_indices


def plot_phos_batch(phos, title=None, figsize=(12, 3), save_path=None):
    """
    phos: Tensor [K, 1, H, W] or [K, H, W]
    """
    phos = phos.detach().cpu()

    if phos.dim() == 4:
        phos = phos.squeeze(1)  # [K, H, W]

    K = phos.shape[0]

    plt.figure(figsize=figsize)

    for k in range(K):
        plt.subplot(1, K, k + 1)
        plt.imshow(phos[k], cmap='gray')
        plt.axis('off')
        plt.title(f"{k}")

    if title is not None:
        plt.suptitle(title)

    plt.tight_layout()

    if save_path is not None:
        plt.savefig(save_path)

    plt.show(block=False)
    plt.pause(0.1)
def visualize_demo_samples(patient, dataset,models,cfg,fig_num=4,dataset_type='calibration_set',show=True,deterministic = True, mode = 'random',seed=42):
    generator = torch.Generator().manual_seed(seed)
    # random sampling
    if mode == 'random':
        sample_indices = torch.randperm(len(dataset[dataset_type]), generator=generator)[:fig_num].tolist()
    else:
        sample_indices = [torch.randint(0, len(dataset[dataset_type]), (1,), generator=generator).item()] * fig_num

    # build input images
    if dataset_type == 'targets_test':
        images_demo = torch.stack([torch.as_tensor(dataset[dataset_type][idx]) for idx in sample_indices],dim=0)
        images_demo = images_demo.to(cfg['device'])
        images_demo = images_demo.permute(0, 3, 1, 2).contiguous()
    else:
        images_demo = torch.stack([dataset[dataset_type][idx][0] for idx in sample_indices],dim=0)
        images_demo = images_demo.to(cfg['device'])

    # unnormalize + mask
    # unstandardized_images = undo_standardize(images_demo)
    input_masked = images_demo * cfg['circular_mask']

    with torch.no_grad():

        images_demo = patient.transform_image(images_demo)
        stimulation = models['encoder'](images_demo, deterministic = deterministic)
        simulator = patient.get_simulator()
        simulator.reset()
        phosphenes_list = []
        label_input_list = [] 
        for i in range(stimulation.shape[0]):
            stimulation_i = stimulation[i:i+1] 
            phos_i = simulator(stimulation_i).unsqueeze(1)
            phosphenes_list.append(phos_i)
            # phos_identify = patient.vlm_identify(phos_i)
            label_input = patient.vlm_identify(images_demo[i])
            label_input_list.append(label_input)
        phosphenes = torch.cat(phosphenes_list, dim=0)
        reconstruction = models['decoder'](phosphenes)
        all_answer = patient.vlm_evaluate_all(stimulation,label_input_list)
        print(f"Overall evaluation answer: {all_answer}")
    outputs_demo = {
        'input': input_masked.detach().cpu(),
        'phosphenes': phosphenes.detach().cpu(),
        'reconstruction': (reconstruction * cfg['circular_mask']).detach().cpu(),
    }

    # visualize data
    orig_vis = outputs_demo['input'].squeeze(1)
    phos_vis = outputs_demo['phosphenes'].squeeze(1)
    recon_vis = outputs_demo['reconstruction'].squeeze(1)

    fig, axes = plt.subplots(3, fig_num, figsize=(3 * fig_num, 8))

    # support fig_num=1 case
    if fig_num == 1:
        axes = axes.reshape(3, 1)

    for i in range(fig_num):
        axes[0, i].imshow(orig_vis[i], cmap='gray')
        axes[0, i].set_title(f'Original (idx={sample_indices[i]})')

        axes[1, i].imshow(phos_vis[i], cmap='gray')
        axes[1, i].set_title('Phosphene')

        axes[2, i].imshow(recon_vis[i], cmap='gray')
        axes[2, i].set_title('Reconstruction')

    for ax in axes.ravel():
        ax.axis('off')

    fig.tight_layout()

    if show:
        plt.show()

    return outputs_demo, sample_indices, fig, axes

def visualize_demo_samples_multi_patients(patients, dataset, models, cfg, fig_num=4, dataset_type='calibration_set',show=True, deterministic=True, mode='random', generator = None):

    if 'encoder' in models and 'decoder' in models:
        models = {'model': models}

    if not isinstance(patients, dict):
        patients = {'patient': patients}

    model_names = list(models.keys())

    if mode == 'random':
        sample_indices = torch.randperm(len(dataset[dataset_type]))[:fig_num].tolist()
    else:
        # sample_indices = [torch.randint(0,len(dataset[dataset_type]), (1,)).item()] * fig_num
        sample_indices = [2] * fig_num

    if dataset_type == 'targets_test':
        images_demo = torch.stack([torch.as_tensor(dataset[dataset_type][idx]) for idx in sample_indices], dim=0)
        images_demo = images_demo.to(cfg['device'])
        images_demo = images_demo.permute(0, 3, 1, 2).contiguous()
    elif dataset_type == 'calibration_set':
        images_demo = torch.stack([dataset[dataset_type][idx][0] for idx in sample_indices], dim=0)
        images_demo = images_demo.to(cfg['device'])
    elif dataset_type == 'valset':
        print('here')     
        images_demo = torch.stack([dataset[dataset_type][idx][1] for idx in sample_indices], dim=0)
        images_demo = images_demo.to(cfg['device'])
    elif dataset_type == 'dino_set':
        images_demo = torch.stack([dataset[dataset_type][idx][0] for idx in sample_indices], dim=0)
        images_demo = images_demo.to(cfg['device'])

    all_outputs = {}
    all_figs = {}
    all_axes = {}
    all_eval_answers = {}

    for patient_name, patient in patients.items():
        input_masked = images_demo * cfg['circular_mask']

        outputs_demo = {}
        eval_answers = {}

        with torch.no_grad():
            transformed_images = patient.transform_image(images_demo)

            for model_name, model in models.items():
                stimulation = model['encoder'](transformed_images,deterministic=deterministic)
                simulator = patient.get_simulator()
                simulator.reset()
                phosphenes_list = []

                for i in range(stimulation.shape[0]):
                    stimulation_i = stimulation[i:i + 1]
                    phos_i = simulator(stimulation_i).unsqueeze(1)
                    phosphenes_list.append(phos_i)

                phosphenes = torch.cat(phosphenes_list, dim=0)
                reconstruction = model['decoder'](phosphenes)

                outputs_demo[model_name] = {
                    'input': input_masked.detach().cpu(),
                    'phosphenes': phosphenes.detach().cpu(),
                    'reconstruction': (
                        reconstruction * cfg['circular_mask']
                    ).detach().cpu(),
                    'stimulation': stimulation.detach().cpu(),
                }

        num_rows = 1 + len(model_names)*2

        fig, axes = plt.subplots(
            num_rows,
            fig_num,
            figsize=(3 * fig_num, 2.6 * num_rows)
        )

        if fig_num == 1:
            axes = axes.reshape(num_rows, 1)

        orig_vis = input_masked.detach().cpu().squeeze(1)

        for i in range(fig_num):
            sample_idx = int(sample_indices[i])
            axes[0, i].imshow(orig_vis[i], cmap="gray")
            axes[0, i].set_title(f"Original (idx={sample_idx})")

        save_dir = os.path.join("phosphene_images", patient_name)
        os.makedirs(save_dir, exist_ok=True)

        for row, model_name in enumerate(model_names, start=1):
            phos_row = 2 * row - 1
            recon_row = 2 * row

            model_save_dir = os.path.join(save_dir, model_name)
            os.makedirs(model_save_dir, exist_ok=True)

            phos_vis = outputs_demo[model_name]["phosphenes"].detach().cpu().squeeze(1)
            recon_vis = outputs_demo[model_name]["reconstruction"].detach().cpu().squeeze(1)

            for i in range(fig_num):
                sample_idx = int(sample_indices[i])

                # overview plot: phosphene row
                axes[phos_row, i].imshow(phos_vis[i], cmap="gray")
                axes[phos_row, i].set_title(f"{model_name} Phosphene")

                # overview plot: reconstruction row
                axes[recon_row, i].imshow(recon_vis[i], cmap="gray")
                axes[recon_row, i].set_title(f"{model_name} Reconstruction")

                # save phosphene individually
                fig_single, ax_single = plt.subplots(figsize=(3, 3))
                ax_single.imshow(phos_vis[i], cmap="gray")
                ax_single.axis("off")
                save_path = os.path.join(
                    model_save_dir,
                    f"{model_name}_phosphene_idx_{sample_idx}.jpg"
                )
                fig_single.savefig(save_path, format="jpg", bbox_inches="tight", pad_inches=0, dpi=300)
                plt.close(fig_single)

                # save reconstruction individually
                fig_single, ax_single = plt.subplots(figsize=(3, 3))
                ax_single.imshow(recon_vis[i], cmap="gray")
                ax_single.axis("off")
                save_path = os.path.join(
                    model_save_dir,
                    f"{model_name}_reconstruction_idx_{sample_idx}.jpg"
                )
                fig_single.savefig(save_path, format="jpg", bbox_inches="tight", pad_inches=0, dpi=300)
                plt.close(fig_single)

        for ax in axes.ravel():
            ax.axis("off")

    fig.suptitle(patient_name, fontsize=16)
    fig.tight_layout()

    if show:
        plt.show()
    else:
        plt.close(fig)

        all_outputs[patient_name] = outputs_demo
        all_figs[patient_name] = fig
        all_axes[patient_name] = axes
        all_eval_answers[patient_name] = eval_answers

    return all_outputs, sample_indices, all_figs, all_axes, all_eval_answers


def evaluate_and_plot_samples(
    patient,dataset,models,cfg,
    dataset_type='calibration_set',
    max_samples=None,          # maximum number of samples to draw; None = draw all
    cols=4,                    # number of samples per row
    figsize_per_sample=(3.2, 8),
    show=True,
    n=20
):
    """
    Evaluate the entire dataset sample by sample and plot for each image:
      1) input
      2) phosphene
      3) reconstruction
    Also show:
      - input label
      - phosphene label
      - whether they match

    Returns:
      accuracy, results, fig, axes
    """

    # -------- 1. prepare inputs --------
    if dataset_type == 'targets_test':
        images = torch.stack(
            [torch.as_tensor(x) for x in dataset[dataset_type]], dim=0
        ).to(cfg['device']).permute(0, 3, 1, 2).contiguous()
    else:
        images = torch.stack(
            [dataset[dataset_type][i][0] for i in range(len(dataset[dataset_type]))], dim=0
        ).to(cfg['device'])

    if max_samples is not None:
        images = images[:max_samples]

    if n > images.shape[0]:
        n = images.shape[0]


    results = []

    # -------- 2. forward pass and record each sample --------
    with torch.no_grad():
        images_transformed = patient.transform_image(images)
        stimulation = models['encoder'](images_transformed,deterministic=True)

        simulator = patient.get_simulator()
        simulator.reset()

        for i in range(n):
            img_i = images[i:i+1]
            img_trans_i = images_transformed[i:i+1]
            stim_i = stimulation[i:i+1]

            phos_i = simulator(stim_i).unsqueeze(1)
            recon_i = models['decoder'](phos_i)

            # unnormalize for display
            input_vis = undo_standardize(img_i)
            input_vis = input_vis * cfg['circular_mask']
            recon_vis = recon_i * cfg['circular_mask']

            label_phos = patient.vlm_identify(phos_i)
            label_input = patient.vlm_identify(img_trans_i)

            is_correct = (label_phos == label_input)

            results.append({
                'index': i,
                'input': input_vis.detach().cpu(),
                'phosphene': phos_i.detach().cpu(),
                'reconstruction': recon_vis.detach().cpu(),
                'label_input': label_input,
                'label_phos': label_phos,
                'correct': is_correct,
            })

    # -------- 3. compute accuracy --------
    accuracy = sum(r['correct'] for r in results) / len(results)

    # -------- 4. plot results --------
    cols = min(cols, n)
    rows = math.ceil(n / cols)

    fig, axes = plt.subplots(
        rows * 3, cols,
        figsize=(figsize_per_sample[0] * cols, figsize_per_sample[1] * rows)
    )

    # make axes dimension compatible
    if rows * 3 == 1 and cols == 1:
        axes = axes.reshape(1, 1)
    elif cols == 1:
        axes = axes.reshape(rows * 3, 1)

    for sample_id in range(n):
        r = sample_id // cols
        c = sample_id % cols

        ax_input = axes[r * 3 + 0, c]
        ax_phos  = axes[r * 3 + 1, c]
        ax_recon = axes[r * 3 + 2, c]

        input_img = rsltsafe_squeeze(results[sample_id]['input'])
        phos_img  = rsltsafe_squeeze(results[sample_id]['phosphene'])
        recon_img = rsltsafe_squeeze(results[sample_id]['reconstruction'])

        ax_input.imshow(input_img, cmap='gray')
        ax_phos.imshow(phos_img, cmap='gray')
        ax_recon.imshow(recon_img, cmap='gray')

        ax_input.set_title(
            f"Input\nidx={results[sample_id]['index']}\nlabel={results[sample_id]['label_input']}",
            fontsize=10
        )
        ax_phos.set_title(
            f"Phosphene\npred={results[sample_id]['label_phos']}\nmatch={results[sample_id]['correct']}",
            fontsize=10,
            color='green' if results[sample_id]['correct'] else 'red'
        )
        ax_recon.set_title("Reconstruction", fontsize=10)

        ax_input.axis('off')
        ax_phos.axis('off')
        ax_recon.axis('off')

    # turn off extra subplots
    total_slots = rows * cols
    for empty_id in range(n, total_slots):
        r = empty_id // cols
        c = empty_id % cols
        axes[r * 3 + 0, c].axis('off')
        axes[r * 3 + 1, c].axis('off')
        axes[r * 3 + 2, c].axis('off')

    fig.tight_layout()

    if show:
        plt.show()

    return accuracy, results, fig, axes


def rsltsafe_squeeze(x):
    """
    Safely convert common tensor shapes to 2D for imshow display.
    Supports:
      [1,1,H,W], [1,H,W], [H,W]
    """
    if isinstance(x, torch.Tensor):
        x = x.squeeze().numpy()
    return x
