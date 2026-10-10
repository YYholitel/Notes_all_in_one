# iPercept — Codebase Audit

**Audited:** `/mnt/dataset4/tangjsh/eccv2026/closeloop_simulator/IPERCEPT` (server `lihy@10.20.38.38:1022`, host `nccserv0`)
**Commit:** `b6bc5a3 update` (zgy, 2026-05-07), branch `main`, remote `https://github.com/TangChings/IPERCEPT.git`
**Scope:** static read of all 6,077 lines across 8 Python modules + notebook + 4 configs, plus live verification of paths, datasets, environment and encoder behaviour on the server.
**Local snapshot of reviewed source:** `J:\My_notes\CS\IPERCEPT-audit\` (source only; assets excluded)

> Note on the path in the request: it is `tangjsh`, not `tangjs`. `/mnt/dataset4/tangjs/...` does not exist.

---

## 1. Verdict up front

The method is sound and the DPO formulation is implemented correctly, but **the repository cannot be run end-to-end today, and the notebook is not a runnable artifact**. Three independent blockers stand between a fresh clone and a first training step. None of them are algorithmic.

| Severity | Count | Meaning |
|---|---|---|
| Blocker | 3 | Notebook cannot execute |
| High | 5 | Silently wrong results or wrong-by-default configuration |
| Medium | 8 | Fragile, inconsistent, or will break on upgrade |
| Low | 9 | Cosmetic, dead code, style |

**The single most important finding:** `main_exp.ipynb` is a transcript of an interactive human-in-the-loop session, not an executable pipeline. It contains placeholder strings (`"xxx.ckpt"`, `run_id = "xxx"`, `user_name = 'xxx'`), it depends on a patient-state file that does not exist, and it requires a human to type rankings at a `input()` prompt for 100 steps × 2 samples × 3 criteria ≈ 600 interactive prompts. There is no batch/automated path for the preference signal even though `use_VLM` was clearly built for exactly that.

---

## 2. What the system actually is

Clearing up three things that the config files actively mislead you about:

**(a) The "encoder" is not an encoder.** Despite `model_architecture: end-to-end-autoencoder` and the name `get_personalized_e2e_autoencoder_new`, the instantiated class is `PolicyFeatureRBFDeformEncoder_brightness` — a **policy network with a Gaussian action space**. It never predicts stimulation from image content. It:

1. encodes the image into a 32-channel feature map `h` (`feature_encoder`, 4 residual blocks),
2. draws a **260-dimensional action** `a = [global_shift(2), global_rotate(1), rbf_shifts(64×2), rbf_gate_logit(64), rbf_raw_sigma(64), stim_scale_raw(1)]`,
3. uses `a` to build a **deformation field** applied to `h` via `grid_sample` (`deform_feature`),
4. maps the deformed feature to 1000 electrode currents with a `LazyLinear` (`stim_mapping`), sigmoid × `output_scaling`,
5. quantises through a `SafetyLayer` (`output_steps: 10`, order=2 soft-stairs).

Verified live: `sample_n_actions` → `actions (2,2,260)`, `stimulation (2,2,1000)`, `log_prob (2,2)`, `mean_action (2,260)`, `log_std (2,260)`.

**(b) The action-space distribution heads are the only trainable parameters.** In the DPO phase only 6 parameters are optimised:

| Group | Parameters | Size |
|---|---|---|
| shift | `global_shift_mean`, `global_shift_log_std` | 2, 2 |
| rotate | `global_rotate_mean`, `global_rotate_log_std` | 1, 1 |
| rbf | `rbf_shift_mean`/`log_std`, `rbf_gate_logit_mean`/`log_std`, `rbf_raw_sigma_mean`/`log_std` | 128+128, 64+64, 64+64 |
| brightness | `stim_scale_raw_mean`, `stim_scale_raw_log_std` | 1, 1 |

Everything else — `feature_encoder`, `rbf_centers`, `stim_mapping`, `SafetyLayer`, decoder — is frozen with `requires_grad = False`. This is a sensible, low-dimensional preference-optimisation formulation. **But note that `policy.train()` is called in cell 13 while `ref_policy` is in `.eval()` mode**, so the two branches of the DPO ratio normalise with different BatchNorm statistics (batch stats at batch_size=2 vs frozen running stats). See H-4.

**(c) `output_scaling` is a red herring.** `get_personalized_e2e_autoencoder_new` overwrites `encoder.output_scaling = 1.0` whenever `output_steps != 'None'`, so the `output_scaling: 0.000128` in the YAML only reaches the `SafetyLayer` as its quantisation ceiling, not the sigmoid scaling.

---

## 3. Blockers

### B-1 — `dino_set` is empty; the notebook crashes in cell 9

```
_Datasets/DINO/processed_contours/standardized_processed_val_inputs.pkl   5 bytes
_Datasets/DINO/processed_contours/standardized_processed_val_targets.pkl  5 bytes
```

Both unpickle to **empty lists** (verified). Notebook cell 9 calls:

```python
visualize_demo_samples_multi_patients(..., dataset_type="dino_set", fig_num=1)
```

→ `torch.randperm(0)[:1]` → empty `sample_indices` → `torch.stack([])` → `RuntimeError`.

The README advertises DINO-style contour inputs as a supported dataset. Either regenerate the pickles (needs `_Datasets/DINO/reference/*.jpg` + `_Datasets/DINO/raw/*`, neither of which exists — only `processed_contours/` is present) or drop `dino_set` from the notebook.

### B-2 — the `ipercept` conda environment does not exist

`environment.yml` declares `name: ipercept`; the server has only `base` and `ecg_r1`. The README's `conda env create -f environment.yml` has never been run here. `ecg_r1` has drift and is missing a required dependency:

| Package | `environment.yml` | `ecg_r1` | Impact |
|---|---|---|---|
| torch | 2.5.1+cu121 | 2.8.0+cu126 | different RNG/op behaviour; checkpoints not bit-reproducible |
| torchvision | 0.20.1+cu121 | 0.23.0+cu126 | — |
| numpy | 1.26.4 | 2.2.6 | **NumPy 2.x breaks `local_datasets.py:362`** (see M-3) |
| pillow | 12.1.1 | 11.3.0 | `ImageFont.getsize` still present (removed in 10+) |
| **dynaphos** | 0.1.3 | **missing** | **hard import failure** |

`dynaphos` is imported by `setup_model_params.py`, `new_model.py` and `virtual_patient.py`, so *every* module fails to import. A working copy exists at `../8_new_encoder_dpo/dynaphos/` (`simulator.py`, `cortex_models.py`, `utils.py`, `image_processing.py`, `plotting.py`) and can be put on `sys.path` as a stopgap. I used it to run the encoder probes below — it imports and runs cleanly under torch 2.8.

CUDA is fine: 8× RTX 3090 (24 GB each); GPUs 0–6 idle, GPU 3 and 7 hold 8.8 GB. The hardcoded `device: cuda:0` / `gpu: 0` in both configs is free.

### B-3 — no checkpoint exists anywhere

Cell 3 is `load_checkpoint(models, "xxx.ckpt", cfg["device"])` — a literal placeholder. A full search of `closeloop_simulator` for `*.ckpt` returned **nothing**. The DPO phase needs a pre-trained encoder+decoder, so both the pre-training step and its output are missing from the repo and from the server. `save_checkpoint()` exists in `new_model.py`, but there is no training loop that calls it (see H-1), so the checkpoint has to be produced by code that isn't in this repository.

---

## 4. High severity

### H-1 — there is no pre-training pipeline in the repo

`new_model.py` defines `save_checkpoint` (line 2766), `run_validation` (2776) and `compute_stim_level_ratio` (2848), and the configs describe a full supervised stage (`pipeline: supervised-boundary-reconstruction`, `epochs`, `trainstats_per_epoch`, `learning_rate`, `regularization_weight`). **No main loop, no loss function, no `__main__`, and no call site connects them.** The notebook jumps straight to loading a checkpoint and running DPO. The training stage that produces `xxx.ckpt` lives in a different codebase (probably a sibling directory — `8_new_encoder_dpo/` and `9_new_encoder_dpo_human/` both exist next door).

This means the README's "Quick Start" cannot possibly work, and it is the biggest documentation/engineering gap in the project.

### H-2 — `fix_idx` is silently ignored in the mode the notebook uses

`load_config_dataset.py:13` resolves indices as:

```python
if mode == 'random':
    indices = torch.randperm(N, generator=generator)[:batch_size].tolist()
else:
    idx = fix_idx if fix_idx is not None else torch.randint(0, N, (1,), generator=generator).item()
    indices = [idx] * batch_size
```

`fix_idx` is only honoured on the `else` branch. But notebook cell 14 calls:

```python
get_manual_batch(..., mode='random', fix_idx=4, generator=generator)
```

`fix_idx=4` is **dead**: `mode='random'` always takes `randperm`. If the intent was to always present letter E (index 4) for a controlled comparison, every experiment run so far silently used random letters instead. Either the call should be `mode='fix'` or the parameter has no reason to exist. This is exactly the kind of thing that invalidates a reported result, so it should be resolved before any further runs.

Related: `fix_idx` is not validated against `N`, and `torch.randperm(N)[:batch_size]` will return fewer than `batch_size` items (no error) if `N < batch_size` — for the 26-image calibration set, `batch_size` must stay ≤ 26.

### H-3 — `load_dataset` always loads the 1.7 GB ADE20K training pickle

`load_config_dataset.load_dataset()` unconditionally constructs `ADE_Dataset` with `load_preprocessed: true`, which unpickles `standardized_processed_train_inputs.pkl` + `_targets.pkl` (1.68 GB each), then builds a `DataLoader`, then does `next(iter(valloader))` for an `example_batch`. The DPO notebook only ever reads `calibration_set` and `dino_set`, so the entire ADE20K corpus and the `example_batch` are loaded into RAM **and** moved to GPU (`x.detach().to(self.device)` in `__getitem__`) for nothing.

This costs minutes of I/O and multiple GB of GPU memory before the first useful line runs. Make the ADE/train/val loads lazy or conditional on `dataset` in the config.

### H-4 — DPO ratio computed across mismatched BatchNorm modes

Notebook cell 11/13:

```python
policy = models['encoder']
ref_policy = copy.deepcopy(policy).eval()   # eval mode, frozen running stats
...
policy.train()                              # cell 13 — training mode, batch stats
```

`dpo_step` then computes `(logp_w − logp_l) − (ref_logp_w − ref_logp_l)`. Both branches run `encode_feature`, which contains 7 `BatchNorm2d` layers. In train mode those normalise with **batch statistics** (batch_size = 2, so extremely noisy); in eval mode the reference uses **frozen running statistics**. The ratio therefore mixes two different normalisation regimes, and — because only the distribution heads have `requires_grad=True` — the BatchNorm running stats are also being updated as a side effect of training. Convention in offline preference optimisation is to keep both policies in `eval()` for the ratio. Recommended: `policy.eval()` before `dpo_step`, or `policy.train()` on the heads only.

### H-5 — VLM ranking output is parsed without validation

`vlm_evaluate_shift/rotation/brightness/all` all end with the same pattern:

```python
ranked_indices = [int(x) for x in re.findall(r'\bimage\s*[_-]?\s*(\d+)\b', result_text, re.I)]
...
else:
    ranked_indices = [1]
```

There is no check that the result is a valid permutation of `1..K`. If the model emits `Result: image2 < image1 < image1`, or repeats, or returns nothing (→ `[1]`), the ranking flows straight into `build_winner_loser_actions`, which does `best_idx = rank_b[-1] - 1` / `worst_idx = rank_b[0] - 1`. A malformed ranking silently becomes a wrong preference label with no warning. Given that `use_VLM=True` is the intended automated path (and the whole point of the paper's scalability claim), this deserves a validator plus a fallback-skip on invalid output.

Also in the same functions: `label[0]` is used in the prompt while the notebook passes a bare string (`label_input`), so `label[0]` yields the first *character*. It happens to work for single letters, but it is type-confused — `vlm_evaluate_rotation` explicitly handles both cases at line 399 while `vlm_evaluate_shift` (line 467) and `vlm_evaluate_brightness` (line 210) do not.

---

## 5. Medium severity

### M-1 — `visualize_demo_samples_multi_patients` returns empty dicts, and annotates only the last patient

`visualization.py:348-355`:

```python
if show:
    plt.show()
else:
    plt.close(fig)
    all_outputs[patient_name] = outputs_demo
    all_figs[patient_name] = fig
    all_axes[patient_name] = axes
    all_eval_answers[patient_name] = eval_answers
```

Three problems:
1. The dict assignments live in the `else` branch, so with the **default `show=True`** the function returns `{}` for outputs, figures, axes and eval answers. The notebook calls it with `show` omitted (i.e. `True`) in cells 9 and 17 and ignores the return values, so the bug is currently invisible — but any caller that uses the returns gets nothing.
2. `figure.suptitle(patient_name)` and `fig.tight_layout()` sit **outside** the `for patient_name, patient in patients.items()` loop, so with multiple patients every figure is titled with the last patient's name.
3. `eval_answers = {}` is then assigned into `all_eval_answers`, and `vlm_evaluate_all` is never called anywhere in this function, so eval answers are empty by construction.

There is also no `else` fallback for an unknown `dataset_type`: `images_demo` is simply never assigned → `UnboundLocalError`.

### M-2 — `create_circular_mask` is correct but fragile, and applied inconsistently

I checked the geometry empirically because it looks wrong at a glance: it is **right**. For `create_circular_mask(128, 128)` the mask is `(128,128)` bool with **12,851** true pixels against an ideal area of π·64² ≈ 12,868; the corner `(0,0)` is `False`; the edge midpoint `(0,64)` is `True` only because the boundary test is inclusive (`dist == radius`); and `meshgrid`'s default `indexing='ij'` does put row indices in `Y` and column indices in `X`, which is what the `(X − center[0], Y − center[1])` formula assumes. No bug.

Remaining fragility:
- It is called as `create_circular_mask(*imsize)`, which implicitly requires `h == w` and never asserts it — a non-square `imsize` silently returns a nonsense mask.
- `torch.meshgrid(x, x)` omits `indexing=`, which emits `UserWarning: torch.meshgrid: in an upcoming release, it will be required to pass the indexing argument` (confirmed under torch 2.8). It will become an error.
- `Bouncing_MNIST` (line 118) does `create_circular_mask(*imsize).repeat(1, n_frames, 1, 1)`, turning a `(1,128,128)` mask into `(1, 128·n_frames, 128, 128)`, which cannot broadcast against data of shape `(n_frames, 1, 128, 128)`. Latent — that dataset is never constructed by the current configs.

The mask **is** applied inconsistently: `ADE_Dataset` masks input and target, `Calibration_Dataset_contour` masks both, but `DINO_Dataset_contour.__getitem__` masks **only the label** (lines 621-622) and leaves the input unmasked.

### M-3 — NumPy 2.x / Pillow 10+ break the eager-preprocessing paths

`local_datasets.py:362`:

```python
free_space = np.subtract(self.imsize, textsize)   # self.imsize is a tuple
free_space += self.padding_correction
location = np.random.rand(2) * (free_space)
```

Under NumPy ≥ 1.24 (`npm.subtract` on a ragged sequence), let alone NumPy 2.2.6 as installed, this raises. And `ImageFont.getsize` (lines 349, 361) was removed in Pillow 10; the `while` loop at 349-352 is also an O(fontsize) re-render that should just be `getbbox`. These paths are currently dormant because every dataset config sets `load_preprocessed: true`, which is precisely why they will rot.

Note `Calibration_Dataset_contour` **ignores its configured `imsize`** — the preprocessing branch hardcodes nothing but silently uses `self.img_transform` (RGB→tensor) for a `convert('L')` image, and its `save()` writes `processed_contours/` into the *source* directory, so a stale pickle silently shadows any preprocessing change. Verified: `calibration_letters/processed_contours/*_inputs.pkl` and `*_targets.pkl` are byte-identical in size (1,711,955 B each), consistent with `self.inputs += [t]` and `self.targets += [t]` storing the same tensor — i.e. for the calibration set **input and target are the same image**, not raw-vs-contour as the docstring at line 402-408 claims.

### M-4 — `sample_simulator_params` seed is dead when the notebook uses it

`setup_model_params.py:64`:

```python
def sample_simulator_params(ranges, train_config, seed=None, _fixed_subject_params=None):
    if train_config.get('subject_params_random', True):
        rng = np.random.default_rng(seed)
```

The notebook calls `sample_simulator_params(simulator_ranges, train_config=train_config, seed=None)` with `subject_params_random: true` in the config → `default_rng(None)` → **every new patient is randomly different even though `subject_params_seed: 42` is set in the YAML**. The `subject_params_seed` branch is only reachable when `subject_params_random` is `false`, which no config sets. So "reproducible patient" is not actually reproducible in the path being used; reproducibility currently relies entirely on the `patient_state.npy` snapshot (which is why `fixed_patient` exists).

### M-5 — `affine_params_to_theta` hard-disables determinism globally

`transform.py:39-40` mutates global torch state as a side effect:

```python
torch.use_deterministic_algorithms(False)
torch.set_deterministic_debug_mode(0)
```

This is called from `VirtualPatient.__init__` (line 82) and directly in the `theta is not None` branch (line 84-85). It silently overrides whatever `set_deterministic_mode()` set earlier, so `use_deterministic_algorithms: false` in the YAML is not the only thing controlling this. Global-state mutation inside a constructor is a debugging trap — pin it locally (`with torch.backends.cudnn.flags(...)`) or remove it.

Also dead in the same function: `sx = torch.exp(0 * torch.tanh(log_sx))` (line 51-52) — the `0 *` makes both scale factors exactly 1.0, so `log_sx`/`log_sy` (2 of the 7 affine parameters) have **no effect whatsoever**; the shear follows. If scale was meant to be active, the `0 *` looks like leftover debugging.

### M-6 — `undo_standardize` uses the wrong constants

`transform.py:31`:

```python
def undo_standardize(x, mean=0.459, std=0.227):
```

but `ADE_Dataset.__init__` (line 173-174) normalises with ImageNet stats `mean=[0.485,0.456,0.406], std=[0.229,0.224,0.225]`, and `to_grayscale` (line 182-185) then collapses the channels with `[.3,.59,.11]`. `undo_standardize` is used by `run_validation` (line 2788) and `evaluate_and_plot_samples` (line 419) for display and for `input_masked`, but the constants don't correspond to the grayscale-weighted ImageNet transform, so displayed "originals" are slightly off. Either apply the correct per-channel inverse before the grayscale collapse, or standardise once in grayscale.

### M-7 — `ref_policy` is not restored on resume

`ref_policy = copy.deepcopy(policy).eval()` with `requires_grad=False` is the correct DPO setup, and the deepcopy has independent BatchNorm buffers, so the snapshot is genuinely frozen. The problem is lifecycle: `ref_policy` is saved to disk as `ref_policy.pt` in the **new-training** branch only (cell 13), and the `resume_training` branch never reloads it. A resumed run therefore re-deepcopies the *current, already-DPO-updated* policy as its new reference, silently changing the objective (the KL anchor moves) partway through a run, and `logs["steps"]` becomes a mix of two different objectives. On resume, `ref_policy` must be loaded from `ref_policy.pt`.

### M-8 — `load_dpo_checkpoint` has no fallback for missing optimiser state

`save_dpo_checkpoint` stores `optimizer_shift`/`optimizer_rotate`/`optimizer_brightness` but **not** `optimizer_rbf`, and `load_dpo_checkpoint` restores exactly those three. Since the notebook keeps the RBF DPO step commented out (cell 14, lines with `dpo_loss_rbf`), this is currently consistent — but `optimizer_rbf` is constructed (cell 11) and passed to `rbf_params` yet never used, and the checkpoint format will silently lose state the moment RBF optimisation is re-enabled. Also `policy.to(device)` in `load_dpo_checkpoint` (line 171) moves the whole policy but the optimiser state is moved separately (correctly) — worth noting the load path is `map_location="cpu"` then manual device moves.

---

## 6. Low severity / hygiene

| # | Location | Issue |
|---|---|---|
| L-1 | `setup_model_params.py:115` and `:121` | `load_checkpoint` defined **twice**; the first is dead. Delete one. |
| L-2 | `setup_model_params.py:127` | The lazy-init guard checks `hasattr(encoder.base_encoder, '_init_deform_params')`, a method that only exists on `PolicyFeatureLowDeformEncoder` (line 1959) — which is never instantiated here. **Verified dead code.** `LazyLinear` initialises correctly from `load_state_dict` anyway, and I confirmed `load_checkpoint` succeeds on a fresh encoder. Harmless but misleading. |
| L-3 | `load_config_dataset.py:150` | `load_mnist` call site passes `cache_dir='../_Datasets/mnist_cache'` (relative to CWD) while `load_mnist`'s own default is `Path(__file__).parents[1]/"_Datasets"/"mnist_cache"` (relative to the module). Inconsistent; the directory does not exist either way. Moot for the current config (`hilo_target_source: calibration`) because the MNIST branch isn't taken. |
| L-4 | `load_config_dataset.py:171-176` | The `dino` branch prints `"Using calibration targets"` — copy-paste. Also `dataset["calibration_set"]` is set to `None` unless `hilo_target_source == "calibration"`, so `get_manual_batch(..., dataset_type="calibration_set")` → `len(None)` → `TypeError`. The current config happens to set `calibration`, but this is a loaded gun. |
| L-5 | `load_config_dataset.py:145-176` | The four `if hilo_target_source == ...` blocks are not exclusive; `hilo_target_source` is reassigned inside the first block on failure, so `targets_test` can end up unset entirely if an unexpected value is configured → `NameError` at line 186. |
| L-6 | `virtual_patient.py:584` | `vlm_evaluate_all` iterates `for stimulation in stimulations:` — `stimulations` is an undefined global (the parameter is named `phos_batch`). **Cell 9/17 will crash** the moment `vlm_evaluate_all` is actually reached. It currently isn't, because `visualize_demo_samples_multi_patients` never calls it (see M-1). |
| L-7 | `virtual_patient.py:148`, cell 14 | `vlm_identify(self, phosphene)` is named for a phosphene image, but the notebook passes `x[b]` — an ImageNet-standardised tensor with mean≈0. `_to_pil_image(normalize=False)` then does `(x*255).clip(0,255)`, so negative values clip to 0 and the VLM would see a near-black image. Misleading name *and* wrong tensor if `use_VLM=True` is enabled. |
| L-8 | `virtual_patient.py:1-17` | Imports both `Qwen2_5_VLForConditionalGeneration` and `Qwen3VLForConditionalGeneration` with the same name `AutoProcessor` (second wins), plus `modelscope.snapshot_download` and `qwen_vl_utils`, all at module import time — so `virtual_patient` (and therefore `visualization`) cannot be imported at all without the full VLM stack, regardless of `use_VLM=False`. `image_names`/`mapping` are also built and partly unused in every VLM method. |
| L-9 | `load_config_dataset.py` / `visualization.py` | `load_config_dataset.py` imports `Path` three times (lines 2, 3, 10); `new_model.py` imports `torch`/`nn`/`F`/`Normal`/`Independent`/`math` twice (lines 1-13); `local_datasets.py` imports `torch`/`Dataset`/`T`/`F` twice (lines 5-15). All modules end with a star-import chain (`from load_config_dataset import *`, `from setup_model_params import *`, `from virtual_patient import *`), which makes the dependency graph opaque and is why a plain static undefined-name scan is impossible. |

---

## 7. What I verified empirically (not just read)

Run on the server in `ecg_r1`, with the sibling `dynaphos` on `sys.path`.

**Findings that held up under test:**

1. **DINO pickles are empty lists** — confirmed by unpickling (both are 5-byte pickles of `[]`).
2. **`calibration_set` has 26 images** (`letter_A…letter_Z`), so `chr(sample_indices[b] + ord('A'))` in cell 14 is consistent — but it breaks silently for any index ≥ 26.
3. **All four configured data paths resolve**; ADE20K `processed_contours` holds real 1.68 GB + 0.13 GB pickles, `calibration_letters/processed_contours` holds non-empty ones.
4. **GPU inventory:** 8× RTX 3090 (24 GB), GPUs 0–6 idle. The hardcoded `cuda:0` / `gpu: 0` is free.
5. **The installed env cannot import the project.** `ecg_r1` has torch 2.8.0+cu126 / numpy 2.2.6 / Pillow 11.3.0 and **no `dynaphos`**; every module imports it.
6. **`git` needs `safe.directory`** — the tree is owned by `unonou`/`ncclab` while the login is `lihy`, so all `git` commands fail with "dubious ownership" until `git config --global --add safe.directory '*'`.
7. **`create_circular_mask(128,128)` is a correct circle** — 12,851 true pixels vs. an ideal π·64² ≈ 12,868, corner `False`, edge midpoint `True` only via the inclusive boundary test, and `meshgrid`'s default `indexing='ij'` matches the formula's assumption.
8. **`fix_idx` is genuinely ignored** — reading `get_manual_batch` against the notebook's call is unambiguous: `mode='random'` takes the `randperm` branch regardless of `fix_idx`.

**Hypotheses I formed and then disproved — recorded so nobody re-raises them:**

9. **The `Independent(...)` `reinterpreted_batch_ndims` values are correct, not a bug.** I initially flagged them as mis-scaled. Testing shows `Independent(…, 3)` on `(B,1,1,2)` gives `batch_shape (B,)`, `event_shape (1,1,2)`; `Independent(…, 2)` on `(B,64,2)` gives `batch_shape (B,)`, `event_shape (64,2)`; `Independent(…, 2)` on `(B,64,1)` gives `(B,)`/`(64,1)`. All six blocks produce exactly `(B,)` per sample. The full DPO path is shape-correct: `sample_n_actions` → `actions (2,2,260)`, `stimulation (2,2,1000)`, `log_prob (2,2)`; and `evaluate_action(x, a_w)` with `a_w: (2,260)` — exactly what `build_winner_loser_actions` produces — returns `log_prob (2,)`.
10. **`LazyLinear` is not a checkpoint-loading hazard.** `load_checkpoint` succeeds on a completely fresh encoder, so the dead lazy-init guard (L-2) has no consequence either way. My first attempt at this test was masked by a `FileNotFoundError` from a placeholder path, which is itself a nice illustration of B-3.

---

## 8. Recommended order of work

1. **Decide the `fix_idx` question (H-2).** If any reported experiment was supposed to hold the stimulus fixed at letter E, that result needs re-running. This is the only finding that can invalidate existing numbers.
2. **Build the environment for real (B-2).** `conda env create -f environment.yml` from the repo, then either install `dynaphos==0.1.3` or vendor `../8_new_encoder_dpo/dynaphos`. Do not keep using `ecg_r1`.
3. **Recover or regenerate the missing checkpoint (B-3) and the pre-training loop (H-1).** Check `8_new_encoder_dpo/` and `9_new_encoder_dpo_human/` — they are the likely homes of the supervised stage.
4. **Make the notebook actually runnable.** Replace `"xxx.ckpt"`, `run_id`, `user_name`; guard cell 6's `FileNotFoundError` and give cell 8 a defined `patient_file`; drop or regenerate `dino_set` (B-1). Better: extract the DPO loop from the notebook into `train_dpo.py`, since a 570-cell-line notebook with 600 interactive prompts is not a reproducible artifact.
5. **Fix the correctness items:** BatchNorm eval/train mismatch in the DPO ratio (H-4), `ref_policy` reload on resume (M-7), VLM ranking validation (H-5), and `vlm_evaluate_all`'s undefined `stimulations` (L-6).
6. **Fix the leaks and the dead weight:** stop loading ADE20K in `load_dataset` (H-3), delete the duplicate `load_checkpoint` and the dead guard (L-1, L-2), fix the NumPy-2/Pillow-10 breakage and the `meshgrid` indexing in the preprocessing paths (M-2, M-3), and decide whether the `0 * tanh` in `affine_params_to_theta` was intentional (M-5).
7. **Then** re-run the DPO experiment and confirm the loss curves reproduce.

## 9. Two questions only the authors can answer

- **Was `fix_idx=4` (H-2) meant to pin the stimulus?** This determines whether existing DPO results are valid.
- **Where is the supervised pre-training loop?** `save_checkpoint`/`run_validation` are defined but never called from this repo, so the checkpoint in cell 3 must come from elsewhere.

---

*Audit performed on the `b6bc5a3` working tree. Source snapshot preserved at `J:\My_notes\CS\IPERCEPT-audit\` for follow-up work; no files on the server were modified.*
