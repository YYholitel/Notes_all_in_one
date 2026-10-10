import copy
import importlib
from dynaphos.simulator import GaussianSimulator as PhospheneSimulator
from setup_model_params import *
import torch
import transform
importlib.reload(transform)
from transform import affine_params_to_theta
from transformers import Qwen2_5_VLForConditionalGeneration, AutoProcessor
from transformers import Qwen3VLForConditionalGeneration, AutoProcessor
from modelscope import snapshot_download
from qwen_vl_utils import process_vision_info
import os
from tqdm.auto import tqdm
from PIL import Image
import re
import gc
import torch
class VirtualPatient:
    def __init__(self,sampled_params,simulator_ranges,simulator_config,coordinates_visual_field,cfg, affine_params = None, local_params = None,patient_id=None, non_linear_num=0, theta=None, use_VLM=True,model_dir=None):
        self.patient_id = patient_id
        self.sampled_params = sampled_params
        self.simulator_ranges = simulator_ranges
        self.device = cfg["device"]
        self.model_dir = model_dir
        if sampled_params is None:

            self.params = copy.deepcopy(simulator_config)
            gpu_id = int(self.device.split(":")[-1]) if ":" in str(self.device) else int(self.device)
            self.params["run"]["gpu"] = gpu_id

            self.simulator = PhospheneSimulator(self.params, coordinates_visual_field)
            self.simulator.reset()
        else:

            self.subject_params = make_subject_params(sampled_params=sampled_params,simulator_ranges=simulator_ranges,device=self.device)
            simulator_params = make_simulator_params(self.subject_params,simulator_ranges=simulator_ranges)
            self.simulator_params = simulator_params[0]

            self.params = copy.deepcopy(simulator_config)
            gpu_id = int(self.device.split(":")[-1]) if ":" in str(self.device) else int(self.device)
            self.params["run"]["gpu"] = gpu_id
            self.params = apply_sampled_params(self.params, self.simulator_params)


            self.simulator = PhospheneSimulator(self.params, coordinates_visual_field)
            self.simulator.reset()

        # affine
        self.circular_mask = cfg["circular_mask"]
        self.non_linear_num = non_linear_num
        if affine_params is None:
            g = torch.Generator(device=self.device)
            g.seed()  # truly random
            
            # affine_params = 1.2 * torch.randn(1, 7, device=self.device,dtype=torch.float32, generator=g)
            affine_params = torch.empty(
                                    1, 7,
                                    device=self.device,
                                    dtype=torch.float32
                                ).uniform_(-2.0, 2.0, generator=g)
        # print("VirtualPatient __init__ reached", flush=True)
        if local_params is None:
            local_params = self.init_patient_params(K=self.non_linear_num, max_shift=0.05, device=self.device, dtype=torch.float32)
        
        self.local_params = local_params
        self.affine_params = affine_params

        # print affine parameters
        # tx, ty, rot, log_sx, log_sy, shx, shy = torch.unbind(self.affine_params, dim=-1)

        # print("Affine Parameters:")
        # print(f"tx     : {tx.item():.4f}")
        # print(f"ty     : {ty.item():.4f}")
        # print(f"rot    : {rot.item():.4f}")
        # print(f"log_sx : {log_sx.item():.4f}")
        # print(f"log_sy : {log_sy.item():.4f}")
        # print(f"shx    : {shx.item():.4f}")
        # print(f"shy    : {shy.item():.4f}")

        if theta is None:
            self.theta = affine_params_to_theta(self.affine_params)
        else:
            torch.use_deterministic_algorithms(False)
            torch.set_deterministic_debug_mode(0)
            theta = torch.as_tensor(theta, device=self.device, dtype=self.affine_params.dtype)
            self.theta = theta
        if use_VLM:
            self.setup_vlm(self.model_dir)

    def init_patient_params(self,K=3,max_shift=0.05,center_range=0.4,device="cuda",dtype=torch.float32):
        if K == 0:
            return None

        local_params = torch.empty(1, K, 4, device=device, dtype=dtype)

        # control points appear only within the central field of view
        local_params[..., 0:2] = (torch.rand(1, K, 2, device=device, dtype=dtype) * 2 - 1) * center_range

        # local displacements
        local_params[..., 2:4] = (torch.rand(1, K, 2, device=device, dtype=dtype) * (2 * max_shift)- max_shift)

        return local_params

    def transform_image(self, x):
        """
        x: [B, C, H, W]
        Apply the same transformation to all images for this patient by default
        """
        
        theta = self.theta

        if theta.size(0) == 1 and x.size(0) > 1:
            theta = theta.expand(x.size(0), -1, -1)

        theta = theta.to(device=x.device, dtype=x.dtype)

        grid = F.affine_grid(theta, x.size(), align_corners=False)
        
        if self.local_params is not None:
            grid = add_local_random_warp(grid, self.local_params)
        x_trans = F.grid_sample(
            x, grid,
            mode='bilinear',
            padding_mode='zeros',
            align_corners=False
        )
        return x_trans * self.circular_mask
    
    def reset(self):
        self.simulator.reset()

    def get_simulator(self):
        return self.simulator

    def __repr__(self):
        return f"VirtualPatient(id={self.patient_id})"
    
    def setup_vlm(self, model_dir):

        self.vlm_model = Qwen3VLForConditionalGeneration.from_pretrained(
            model_dir,
            torch_dtype=torch.float16,
            device_map=None,
            attn_implementation="eager",
        ).to(self.device)
        self.vlm_processor = AutoProcessor.from_pretrained(model_dir)
    def vlm_identify(self, phosphene):
        img = self._to_pil_image(phosphene,normalize=False)

        prompt = """Classify the main contour in the image as one uppercase letter (A-Z). Output only the letter."""

        messages = [{
            "role": "user",
            "content": [
                {"type": "text", "text": prompt},
                {"type": "image"}
            ]
        }]

        text = self.vlm_processor.apply_chat_template(
            messages, tokenize=False, add_generation_prompt=True,
        )

        inputs = self.vlm_processor(
            text=[text],
            images=[img],
            return_tensors="pt",
            padding=True
        )

        inputs = {
            k: v.to(self.vlm_model.device) if hasattr(v, "to") else v
            for k, v in inputs.items()
        }

        with torch.no_grad():
            out = self.vlm_model.generate(
                **inputs,
                max_new_tokens=5000,
                do_sample=False
            )

        ans = self.vlm_processor.batch_decode(
            out[:, inputs["input_ids"].shape[1]:],
            skip_special_tokens=True
        )[0].strip()

        print("===== RAW IDENTIFY ANSWER =====")
        print(ans)

        ans_clean = ans.upper().strip()

        return ans_clean
    def vlm_evaluate_brightness(self, phos_batch,label):
        imgs = []

        # phos_batch can be a list or a torch.Tensor
        if isinstance(phos_batch, list):
            phos_iter = phos_batch
        else:
            phos_iter = [phos_batch[i] for i in range(phos_batch.shape[0])]

        for phos in phos_iter:
            img = self._to_pil_image(phos, normalize=False)
            imgs.append(img)

        num_images = len(imgs)
        image_names = [f"phosphenes{i+1}" for i in range(num_images)]
        mapping =  [f"phosphenes{i+1} is {label[i]}" for i in range(num_images)]
        prompt = f"""
        You are comparing phosphene images only by brightness suitability.

        This is a RELATIVE comparison task for optimizing a stimulation encoder.
        Only evaluate brightness. Do NOT evaluate letter shape, recognizability, rotation, or position.

        Goal:
        Rank all images from WORST to BEST brightness suitability.

        Core principle:
        Good brightness preserves clear, separated phosphene particles without saturation or merging.

        Bad brightness either:
        - destroys structure by overexposure (merging, blobs), OR
        - weakens structure by making particles too faint to see.

        Brightness preference (from WORST to BEST):

        1. Extremely overexposed:
        Large saturated white regions dominate the image; particles are fully merged with no clear boundaries, and structural information is almost completely lost.
        2. Extremely underexposed:
        Particles are almost invisible; image appears dominated by darkness with negligible usable information.
        3. Severely overexposed:
        Strong saturation is present; particles are heavily merged, and structural details are significantly distorted.
        4. Severely underexposed:
        Particles are barely visible; most structural information is hard to perceive.
        5. Moderately overexposed:
        Particles appear enlarged with partial merging; overall structure is still visible but clearly degraded.
        6. Moderately underexposed:
        Particles are faint and difficult to distinguish; structural details are partially lost.
        7. Slightly overexposed:
        Particles are somewhat enlarged with minor merging; structure remains mostly intact.
        8. Slightly bright:
        Brightness is slightly above optimal; particles are clear but mildly expanded, with no significant saturation.
        9. Ideal:
        Particles are clearly visible, well separated, and of moderate size; no saturation or merging is present.

        Important rules:

        - Do NOT prefer an image simply because it is brighter.
        - A brighter image is worse if particles merge or saturate.
        - Do NOT treat black background as a problem.
        - Darkness should only be penalized when particles themselves are hard to see.
        - Clearly separated particles are more important than overall brightness level.
        - A slightly dim but clean (well-separated) image is better than a bright but merged or blob-like image.
        - A severely dark image is worse than a moderately bright one if particles are barely visible.

        Relative ranking rules:

        - Rank all images from WORST to BEST.
        - Do not use numeric scores.
        - Ties are forbidden unless images are pixel-identical.
        - If all images are bad, still rank by which preserves particle structure better.
        - Do not assume later images are better.

        Output exactly:

        Reason:
        Briefly explain which images are overexposed, underexposed, or closest to ideal based on particle separation and visibility.

        Result:
        imageX < imageY < ... < imageZ
        """

        messages = [{
            "role": "user",
            "content": (
                [{"type": "text", "text": prompt}] +
                [{"type": "image"} for _ in range(num_images)]
            )
        }]

        text = self.vlm_processor.apply_chat_template(
            messages, tokenize=False, add_generation_prompt=True, 
        )

        inputs = self.vlm_processor(
            text=[text],
            images=imgs,
            return_tensors="pt",
            padding=True
        )

        inputs = {
            k: v.to(self.vlm_model.device) if hasattr(v, "to") else v
            for k, v in inputs.items()
        }

        with torch.no_grad():
            out = self.vlm_model.generate(
                **inputs,
                max_new_tokens=1500,
                do_sample=False,
            )

        ans = self.vlm_processor.batch_decode(
            out[:, inputs["input_ids"].shape[1]:],
            skip_special_tokens=True
        )[0].strip()
        print(ans)
        m = re.search(r'Result\s*[:：]\s*(.*)', ans, re.IGNORECASE | re.DOTALL)

        if m:
            result_text = m.group(1).strip()
            ranked_indices = [
                int(x) for x in re.findall(r'\bimage\s*[_-]?\s*(\d+)\b', result_text, re.IGNORECASE)
            ]
        else:
            ranked_indices = [1]

        return ranked_indices
    
    def vlm_evaluate_rotation(self, phos_batch,label):
        imgs = []

        # phos_batch can be a list or a torch.Tensor
        if isinstance(phos_batch, list):
            phos_iter = phos_batch
        else:
            phos_iter = [phos_batch[i] for i in range(phos_batch.shape[0])]

        for phos in phos_iter:
            img = self._to_pil_image(phos, normalize=False)
            imgs.append(img)

        num_images = len(imgs)
        image_names = [f"phosphenes{i+1}" for i in range(num_images)]
        mapping =  [f"phosphenes{i+1} is {label[i]}" for i in range(num_images)]
        prompt = f"""
        You are comparing phosphene images ONLY by rotation correctness relative to a target letter.

        This is a RELATIVE comparison task for optimizing a stimulation encoder.

        Goal:
        Rank all images from WORST to BEST based on rotation correctness.

        Definition of rotation correctness:
        - Compare each phosphene image to the target printed letter "{label[0]}" in its normal upright reading orientation.
        - Rotation correctness means how well the phosphene pattern matches the correct orientation of that letter.
        - Upright means the phosphene pattern is NOT rotated relative to the standard upright orientation of the target letter.
        - Always judge rotation relative to the expected appearance of the letter, not geometric verticality.

        To judge rotation:
        - Imagine fitting a line or axis through the dominant cluster.
        - Estimate the angle of this axis relative to the upright orientation of the letter.
        - Compare only this angle.

        Rotation categories (for reasoning only):
        - Strongly rotated: clearly far from the correct letter orientation (large angle).
        - Moderately rotated: noticeable rotation but still somewhat aligned.
        - Slightly rotated: small deviation, close to correct orientation.
        - Upright: matches the correct orientation with minimal or no rotation.

        Important rules:
        - Do NOT judge brightness, sparsity, completeness, shape quality, or recognizability.
        - Even if the image is noisy or incomplete, still estimate its orientation.
        - Sparse but correctly oriented structures should be considered upright.
        - Ignore small outlier dots; focus on the main cluster.
        - If orientation is ambiguous, choose the most plausible orientation based on the dominant structure.

        Relative ranking rules:
        - Rank ALL images from WORST to BEST (largest rotation error → smallest rotation error).
        - Use absolute rotation error relative to the correct letter orientation.
        - Do NOT use numeric scores.
        - Ties are NOT allowed unless images are pixel-identical.
        - If all images are rotated, rank by which is closest to correct orientation.
        - If all images are upright, still rank by tiny differences in rotation.
        - Do NOT assume later images are better.

        Internal reasoning (do not output explicitly):
        1. Identify the dominant phosphene cluster in each image.
        2. Estimate its rotation relative to the correct orientation of "{label[0]}".
        3. Compare absolute rotation errors.
        4. Sort from largest error to smallest.

        Output exactly:

        Reason:
        Briefly state which images are strongly rotated, moderately rotated, slightly rotated, or upright relative to the target letter "{label[0]}".

        Result:
        imageX < imageY < ... < imageZ
        """
        content = [{"type": "text", "text": prompt}]

        for i, img in enumerate(imgs):
            content.append({
                "type": "text",
                "text": f"\nImage {i+1}: This is image{i+1}. Target letter is {label[i] if isinstance(label, list) else label}."
            })
            content.append({"type": "image"})

        messages = [{
            "role": "user",
            "content": content
        }]

        text = self.vlm_processor.apply_chat_template(
            messages, tokenize=False, add_generation_prompt=True, 
        )

        inputs = self.vlm_processor(
            text=[text],
            images=imgs,
            return_tensors="pt",
            padding=True
        )

        inputs = {
            k: v.to(self.vlm_model.device) if hasattr(v, "to") else v
            for k, v in inputs.items()
        }

        with torch.no_grad():
            out = self.vlm_model.generate(
                **inputs,
                max_new_tokens=1500,
                do_sample=False,
            )

        ans = self.vlm_processor.batch_decode(
            out[:, inputs["input_ids"].shape[1]:],
            skip_special_tokens=True
        )[0].strip()
        print(ans)
        m = re.search(r'Result\s*[:：]\s*(.*)', ans, re.IGNORECASE | re.DOTALL)

        if m:
            result_text = m.group(1).strip()
            ranked_indices = [
                int(x) for x in re.findall(r'\bimage\s*[_-]?\s*(\d+)\b', result_text, re.IGNORECASE)
            ]
        else:
            ranked_indices = [1]

        return ranked_indices
    
    def vlm_evaluate_shift(self, phos_batch, label):
        imgs = []

        # phos_batch can be a list or a torch.Tensor
        if isinstance(phos_batch, list):
            phos_iter = phos_batch
        else:
            phos_iter = [phos_batch[i] for i in range(phos_batch.shape[0])]

        for phos in phos_iter:
            img = self._to_pil_image(phos, normalize=False)
            imgs.append(img)

        num_images = len(imgs)

        num_images = len(imgs)
        image_names = [f"phosphenes{i+1}" for i in range(num_images)]
        mapping =  [f"phosphenes{i+1} is {label[i]}" for i in range(num_images)]
        prompt = f"""
        You are comparing phosphene images of a target printed letter {label[0]}.

        The "main phosphene structure" means the largest coherent structure that plausibly supports the target letter pattern.
        It is NOT simply the brightest, densest, or most central cluster.

        You are comparing images only by positional fidelity of the letter-supporting phosphene structure.
        Do NOT evaluate letter recognizability quality, brightness, sparsity, sharpness, or rotation.

        Goal:
        Rank all images from WORST to BEST positional fidelity.

        Critical distinction:
        - Letter-supporting structure: connected or spatially organized phosphenes that form strokes, contours, or a partial layout of the target printed letter {label[0]}.
        - Noise: isolated dots, compact random blobs, scattered speckles, or clusters that do not contribute to the target letter layout.
        - A centered noise blob must NOT be treated as well centered.
        - If the letter-supporting structure is off-center but noise is centered, judge the image as off-center.
        - If there is no plausible letter-supporting structure, rank it worse than images with a plausible letter-supporting structure, even if its noise is centered.

        Definition of positional fidelity:
        - The letter-supporting phosphene structure should be located near the geometric center of the image.
        - Centered means the visual center of the plausible letter-like structure is close to the image center.
        - The ideal position is near the middle of the image, not shifted too far left, right, up, or down.

        How to judge position:
        1. First identify the phosphenes that plausibly belong to the target letter structure.
        2. Ignore random centered blobs, isolated dots, scattered noise, and background artifacts.
        3. Estimate the visual center or center of mass of only the letter-supporting structure.
        4. Compare that center to the image center.
        5. Penalize displacement in any direction: left, right, up, or down.

        Important rules:
        - Do NOT reward a centered cluster unless it contributes to the target letter structure.
        - Do NOT let random bright center noise improve the ranking.
        - Do NOT judge fine shape quality, but use coarse letter layout only to decide what is signal vs noise.
        - A noisy image with an off-center letter-like structure is off-center.
        - A sparse image can be centered if its letter-supporting phosphenes are centered.
        - A rotated pattern can still be well centered.

        Relative ranking rules:
        - Rank all images from WORST to BEST (most off-center letter-supporting structure → most centered letter-supporting structure).
        - Do not use numeric scores.
        - Ties are forbidden unless images are pixel-identical.
        - If all images are poor, still rank by the position of the most plausible letter-supporting structure.
        - Do not assume later images are better.

        Output exactly:

        Reason:
        Briefly explain which image regions were treated as letter-supporting structure and which centered clusters/noise were ignored.

        Result:
        imageX < imageY < ... < imageZ
        """
        messages = [{
            "role": "user",
            "content": (
                [{"type": "text", "text": prompt}] +
                [{"type": "image"} for _ in range(num_images)]
            )
        }]

        text = self.vlm_processor.apply_chat_template(
            messages, tokenize=False, add_generation_prompt=True, 
        )

        inputs = self.vlm_processor(
            text=[text],
            images=imgs,
            return_tensors="pt",
            padding=True
        )

        inputs = {
            k: v.to(self.vlm_model.device) if hasattr(v, "to") else v
            for k, v in inputs.items()
        }

        with torch.no_grad():
            out = self.vlm_model.generate(
                **inputs,
                max_new_tokens=1500,
                do_sample=False,
            )

        ans = self.vlm_processor.batch_decode(
            out[:, inputs["input_ids"].shape[1]:],
            skip_special_tokens=True
        )[0].strip()
        print(ans)
        m = re.search(r'Result\s*[:：]\s*(.*)', ans, re.IGNORECASE | re.DOTALL)

        # if m:
        #     result_text = m.group(1).strip()
        #     ranked_indices = [
        #         int(x) for x in re.findall(r'\bimage\s*[_-]?\s*(\d+)\b', result_text, re.IGNORECASE)
        #     ]
        # else:
        #     ranked_indices = [1]
        
        if m:
            result_text = m.group(1).strip()

            ranked_indices = [
                int(x) for x in re.findall(r'\bimage\s*[_-]?\s*(\d+)\b', result_text, re.IGNORECASE)
            ]

            if not ranked_indices:
                ranked_indices = [1]

        else:
            ranked_indices = [1]


        return ranked_indices

    def vlm_evaluate_all(self, phos_batch, label):
        imgs = []
        for stimulation in stimulations:
            self.simulator.reset()
            phosphene = self.simulator(stimulation)
            img = self._to_pil_image(phosphene, normalize=False)
            imgs.append(img)

        num_images = len(imgs)
        image_names = [f"phosphenes{i+1}" for i in range(num_images)]
        mapping =  [f"phosphenes{i+1} is {label[i]}" for i in range(num_images)]
        prompt = f"""
        You are comparing phosphene images of a target printed letter.

        Target letter: {mapping}

        This is a RELATIVE comparison task for optimizing a stimulation encoder.
        Do NOT assign absolute quality scores.
        Instead, rank the images relative to each other on each criterion.

        Goal:
        Provide a useful optimization signal. Ties are forbidden unless images are pixel-identical.

        Criteria, in strict priority order:

        1. Recognizability:
        Rank images by which one makes the target letter most inferable as a whole.
        Broken, sparse, or disconnected strokes are acceptable if the global letter structure is more recognizable.

        2. Rotation correctness:
        Rank images by which one is more upright and less tilted relative to a standard printed letter.

        3. Positional fidelity:
        Rank images by which one places the main letter-like structure closer to the image center.

        4. Localization:
        Rank images by which one has a more localized main phosphene pattern and less globally scattered noise.

        5. Shape fidelity:
        Rank images by which one has proportions and geometry closer to the standard upright printed target letter.

        Relative ranking rules:
        - For each criterion, rank all images from WORST to BEST.
        - Do not use numeric scores.
        - Ties are forbidden unless images are pixel-identical.
        - If all images are poor, still rank them by tiny relative differences.
        - If the target letter is not recognizable in any image, recognizability should prefer the image with the most useful partial target-letter-like structure.
        - Do not say images are equally bad.
        - Do not assume later images are better.

        Final ranking rule:
        Use lexicographic priority:
        First use Recognizability ranking.
        Only if two images are nearly indistinguishable in Recognizability, use Rotation correctness.
        If still indistinguishable, use Positional fidelity.
        Then Localization.
        Then Shape fidelity.

        Output exactly:

        Criterion rankings:
        Recognizability: imageX < imageY < ... < imageZ
        reason: ...

        Rotation correctness: imageX < imageY < ... < imageZ
        reason: ...

        Positional fidelity: imageX < imageY < ... < imageZ
        reason: ...

        Localization: imageX < imageY < ... < imageZ
        reason: ...

        Shape fidelity: imageX < imageY < ... < imageZ
        reason: ...

        Final explanation:
        Explain which criteria determined the final ranking. Use only as many criteria as needed.

        Result:
        imageX < imageY < ... < imageZ
        """

        messages = [{
            "role": "user",
            "content": (
                [{"type": "text", "text": prompt}] +
                [{"type": "image"} for _ in range(num_images)]
            )
        }]

        text = self.vlm_processor.apply_chat_template(
            messages, tokenize=False, add_generation_prompt=True, 
        )

        inputs = self.vlm_processor(
            text=[text],
            images=imgs,
            return_tensors="pt",
            padding=True
        )

        inputs = {
            k: v.to(self.vlm_model.device) if hasattr(v, "to") else v
            for k, v in inputs.items()
        }

        with torch.no_grad():
            out = self.vlm_model.generate(
                **inputs,
                max_new_tokens=1500,
                do_sample=False,
            )

        ans = self.vlm_processor.batch_decode(
            out[:, inputs["input_ids"].shape[1]:],
            skip_special_tokens=True
        )[0].strip()
        print(ans)
        m = re.search(r'Result\s*[:：]\s*(.*)', ans, re.IGNORECASE | re.DOTALL)

        if m:
            result_text = m.group(1).strip()
            ranked_indices = [
                int(x) for x in re.findall(r'\bimage\s*[_-]?\s*(\d+)\b', result_text, re.IGNORECASE)
            ]
        else:
            ranked_indices = [1]

        return ranked_indices

    def _to_pil_image(self, x, normalize=True):
        if isinstance(x, torch.Tensor):
            x = x.detach().cpu().squeeze().numpy()
        else:
            x = np.asarray(x).squeeze()

        x = x.astype(np.float32)
        if normalize:
            x_min, x_max = x.min(), x.max()
            if x_max > x_min:
                x = (x - x_min) / (x_max - x_min)
            else:
                x = np.zeros_like(x)

        x = (x * 255).clip(0, 255).astype(np.uint8)

        return Image.fromarray(x).convert("L")
    def release(self, clear_simulator=False):
        """
        Release GPU/memory resources held by the current patient.
        If clear_simulator=True, also attempt to release the simulator.
        """
        # 1) release VLM
        if hasattr(self, "vlm_model") and self.vlm_model is not None:
            try:
                self.vlm_model.cpu()   # move back to CPU first to help free CUDA memory
            except Exception:
                pass
            del self.vlm_model
            self.vlm_model = None

        if hasattr(self, "vlm_processor") and self.vlm_processor is not None:
            del self.vlm_processor
            self.vlm_processor = None

        # 2) release affine-related tensors
        if hasattr(self, "affine_params") and self.affine_params is not None:
            del self.affine_params
            self.affine_params = None

        if hasattr(self, "theta") and self.theta is not None:
            del self.theta
            self.theta = None

        # 3) release simulator if requested
        if clear_simulator and hasattr(self, "simulator") and self.simulator is not None:
            try:
                # if the simulator provides close/release/reset-like interfaces, call them first
                if hasattr(self.simulator, "close"):
                    self.simulator.close()
                elif hasattr(self.simulator, "release"):
                    self.simulator.release()
                elif hasattr(self.simulator, "reset"):
                    self.simulator.reset()
            except Exception:
                pass

            del self.simulator
            self.simulator = None

        # 4) Python / PyTorch garbage collection
        gc.collect()

        if torch.cuda.is_available():
            try:
                torch.cuda.synchronize()
            except Exception:
                pass
            torch.cuda.empty_cache()
            torch.cuda.ipc_collect()

