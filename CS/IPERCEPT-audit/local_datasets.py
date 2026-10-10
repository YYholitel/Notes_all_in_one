import numpy as np
import os
import pickle
from glob import glob
import torch
from torch.utils.data import Dataset
import torchvision.transforms as T
import torchvision.transforms.functional as F
from PIL import Image, ImageFont, ImageDraw, ImageFilter 
import string
from tqdm import tqdm
import torch
from torch.utils.data import Dataset
import torchvision.transforms as T
import torchvision.transforms.functional as F
from transform import *
def get_ade20k_dataset(cfg):
    trainset = ADE_Dataset(device=cfg['device'],
                                          directory=cfg['data_directory'],
                                          imsize=(128, 128),
                                          load_preprocessed=cfg['load_preprocessed'])
    valset = ADE_Dataset(device=cfg['device'], directory=cfg['data_directory'],
                                        imsize=(128, 128),
                                        load_preprocessed=cfg['load_preprocessed'],
                                        validation=True)
    return trainset, valset

def get_bouncing_mnist_dataset(cfg):
    trainset = Bouncing_MNIST(device=cfg['device'],
                                             directory=cfg['data_directory'],
                                             mode=cfg['mode'],
                                             n_frames=cfg['sequence_length'],
                                             imsize=(128, 128))
    valset = Bouncing_MNIST(device=cfg['device'],
                            directory=cfg['data_directory'],
                            mode=cfg['mode'],
                            n_frames=cfg['sequence_length'],
                            imsize=(128, 128),
                            validation=True)
    return trainset, valset


def get_character_dataset(cfg):
    trainset = Character_Dataset(directory=cfg['data_directory'],
                                 device=cfg['device'],
                                 imsize=(128,128),
                                 validation=False,
                                 ver_flip=cfg['flip_vertical'],
                                 hor_flip=cfg['flip_horizontal'])
    
    valset = Character_Dataset(directory=cfg['data_directory'],
                             device=cfg['device'],
                             imsize=(128,128),
                             validation=True,
                             random_pos=False,
                             ver_flip=cfg['flip_vertical'],
                             hor_flip=cfg['flip_horizontal'])
    return trainset, valset


def create_circular_mask(h, w, center=None, radius=None, circular_mask=True):

    if center is None: # use the middle of the image
        center = (int(w/2), int(h/2))
    if radius is None: # use the smallest distance between the center and image walls
        radius = min(center[0], center[1], w-center[0], h-center[1])

    x = torch.arange(h)
    Y, X = torch.meshgrid(x,x)
    dist_from_center = torch.sqrt((X - center[0])**2 + (Y-center[1])**2)

    mask = dist_from_center <= radius
    return mask



class Bouncing_MNIST(Dataset):

    def __init__(self, directory='xxx',
                 device = torch.device('cuda:0'),
                 mode = 'recon',
                 imsize=(128,128),
                 n_frames=6,
                 validation=False,
                 circular_mask=True):
        super().__init__()
        
        VALIDATION_SPLIT = 0.1 # Fraction of sequences used as validation set

        self.device = device
        self.mode = mode
        self.imsize = imsize
        self.n_frames = n_frames
        full_set = np.load(directory+'mnist_test_seq.npy').transpose(1, 0, 2, 3) # -> (Batch, Frame, Height, Width)
        
        n_val = int(VALIDATION_SPLIT*full_set.shape[0])
        if validation:
            data = torch.from_numpy(full_set[:n_val])
        else:
            data = torch.from_numpy(full_set[n_val:])

        
        _, seq_len, H, W  = data.shape # (original sequence has 20 frames)
        
        # In reconstruction mode, the target is same as input and only one set of images is returned
        if self.mode=='recon':
            
            # Use the remaining frames if the original sequence length (20) fits multiple output sequences (n_frames)
            divisor = seq_len//n_frames 
            full_set = data[:,:n_frames*divisor]
            if divisor>1: 
                data = data.reshape((-1,n_frames,H,W))

        self.data = data.unsqueeze(dim=1) # Add (grayscale) channel 
        
                    
        if circular_mask:
            self._mask = create_circular_mask(*imsize).repeat(1,n_frames,1,1) #(Channel, Frame, Height, Width)
        else:
            self._mask = None

    def __len__(self):
        return len(self.data)

    def __getitem__(self, i):
        if self.mode == 'recon':
            frames = T.Resize(128)(self.data[i]/255.)
            if self._mask is not None:
                frames = frames*self._mask
            return frames.detach().to(self.device)
        elif self.mode == 'recon_pred':
            input_frames = T.Resize(128)(self.data[i,:,:self.n_frames]/255.)#.to(self.device)
            future_frames = T.Resize(128)(self.data[i,:,self.n_frames:self.n_frames*2]/255.)#.to(self.device)
            
            if self._mask is not None:
                input_frames = input_frames*self._mask
                future_frames = future_frames*self._mask
            return input_frames.detach().to(self.device), future_frames.detach().to(self.device)
            
class ADE_Dataset(Dataset):
    
    def __init__(self, directory,
                 device=torch.device('cuda:0'),
                 imsize = (128,128),
                 grayscale = True,
                 normalize = True,
                 contour_labels = True,
                 validation=False,
                 load_preprocessed=False,
                 circular_mask=True):
        
        self.validation = validation
        self.contour_labels = contour_labels
        self.normalize = normalize
        self.grayscale = grayscale
        self.device = device
    
        contour = lambda im: im.filter(ImageFilter.FIND_EDGES).point(lambda p: p > 1 and 255) if self.contour_labels else im
        # to_grayscale = lambda im: im.convert('L') if self.grayscale else im

        # Image and target tranformations (square crop and resize)
        self.img_transform = T.Compose([T.Lambda(lambda img:F.center_crop(img, min(img.size))),
                                        T.Resize(imsize),
                                        T.ToTensor()
                                        ])
        self.trg_transform = T.Compose([T.Lambda(lambda img:F.center_crop(img, min(img.size))),
                                        T.Resize(imsize,interpolation=T.InterpolationMode.NEAREST), # Nearest Neighbour
                                        T.Lambda(contour),
                                        T.ToTensor()
                                        ])
        
        # Normalize
        self.normalizer = T.Normalize(mean = [0.485, 0.456, 0.406],
                                      std = [0.229, 0.224, 0.225])        
        
        if circular_mask:
            self._mask = create_circular_mask(*imsize).view(1,*imsize)
        else:
            self._mask = None
        
        # RGB converter
        weights=[.3,.59,.11]
        self.to_grayscale = lambda image:torch.sum(torch.stack([weights[c]*image[c,:,:] for c in range(3)],dim=0),
                                                   dim=0,
                                                   keepdim=True)

        self.inputs = []
        self.targets = []
        
        if load_preprocessed:
            self.load(directory)
            # print('----Loaded preprocessed data----')
            # print(f'input length: {len(self.inputs)} samples')
        else:
            # Collect files 
            img_files, seg_files = [],[]
            print('----Listing training images----')
            # for path, subdirs, files in tqdm(os.walk(os.path.join(directory,'images','training'))):
            # for path, subdirs, files in os.walk(os.path.join(directory,'training')):
                # img_files+= glob(os.path.join(path,'*.jpg'))
                # seg_files+= glob(os.path.join(path,'*seg.png'))
                # val_img_files, val_seg_files, = [],[]
            # modification
            img_files = glob(os.path.join(directory, 'images', 'ADE','training', '*', '*', '*.jpg'))
            seg_files = glob(os.path.join(directory, 'images', 'ADE','training', '*', '*', '*seg.png'))
            val_img_files, val_seg_files = [], []

            print('----Listing validation images----')
            # for path, subdirs, files in tqdm(os.walk(os.path.join(directory,'images','validation'))):
            # # for path, subdirs, files in os.walk(os.path.join(directory,'validation')):
            #     val_img_files+= glob(os.path.join(path,'*.jpg'))
            #     val_seg_files+= glob(os.path.join(path,'*seg.png'))
            val_img_files = glob(os.path.join(directory, 'images', 'ADE', 'validation', '*', '*', '*.jpg'))
            val_seg_files = glob(os.path.join(directory, 'images', 'ADE','validation', '*', '*', '*seg.png'))
            for l in [img_files,seg_files,val_img_files,val_seg_files]:
                l.sort()

            print('Finished listing files')
            # Image and target files
            if validation:
                self.input_files = val_img_files
                self.target_files = val_seg_files
            else:
                self.input_files = img_files
                self.target_files = seg_files

            print('----Preprocessing ADE20K input----')
            for image, target in tqdm(zip(self.input_files, self.target_files),total=len(self.input_files)):
                im = Image.open(image).convert('RGB')
                t = Image.open(target).convert('L')

                # Crop, resize & transform
                x = self.img_transform(im)
                t = self.trg_transform(t)
                                            
                # Additional tranforms:
                if self.normalize:
                    x = self.normalizer(x)
                if self.grayscale:
                    x = self.to_grayscale(x)

                self.inputs += [x]
                self.targets += [t]
            print('----Finished preprocessing----')
            self.save(directory)

    def save(self,directory):
        
        # Make directory if it doesn't exist
        path = os.path.join(directory, 'processed_contours')
        if not os.path.exists(path):
            os.makedirs(path)
        
        # Save files
        mode = '_val' if self.validation else '_train'
        with open(os.path.join(path,f'standardized_processed{mode}_inputs.pkl'),'wb') as f:
            pickle.dump(self.inputs,f)
        with open(os.path.join(path,f'standardized_processed{mode}_targets.pkl'),'wb') as f:
            pickle.dump(self.targets,f)

    def load(self,directory):
        mode = '_val' if self.validation else '_train'
        with open(os.path.join(directory,f'standardized_processed{mode}_inputs.pkl'),'rb') as f:
            self.inputs = pickle.load(f)
        with open(os.path.join(directory,f'standardized_processed{mode}_targets.pkl'),'rb') as f:
            self.targets = pickle.load(f)

    def __len__(self):
        return len(self.inputs)

    def __getitem__(self, i):
        
        x = self.inputs[i]
        t = self.targets[i]

        if self._mask is not None:
            x = x*self._mask
            t = t*self._mask
    
        return x.detach().to(self.device),t.detach().to(self.device)
    
    
class Character_Dataset(Dataset):
    """ Pytorch dataset containing images of single (synthetic) characters.
    __getitem__ returns an image containing one of 26 ascci lowercase characters, 
    typed in one of 47 fonts(default: 38 train, 9 validation) and the corresponding
    alphabetic index as label.
    """
    def __init__(self,directory,
                 device=torch.device('cuda:0'),
                 imsize = (128,128),
                 train_val_split = 0.8,
                 validation=False,
                 word_scale=.8,
                 invert = True, 
                 circular_mask=True, 
                 random_pos = True,
                 ver_flip = False,
                 hor_flip = False): 
        
        self.imsize = imsize
        self.tensormaker = T.ToTensor()
        self.device = device
        self.validation = validation
        self.word_scale = word_scale
        self.invert = invert
        self.random_pos = random_pos
        
        if circular_mask:
            self._mask = create_circular_mask(*imsize).view(1,*imsize)
        else:
            self._mask = None
        
        
        
        characters = string.ascii_lowercase
        fonts = glob(os.path.join(directory,'Fonts/*.ttf'))
        
        self.split = round(len(fonts)*train_val_split)
        train_data, val_data = [],[]
        for c in characters:
            for f in fonts[:self.split]:
                train_data.append((f,c))
            for f in fonts[self.split:]:
                val_data.append((f,c))
        self.data = val_data if validation else train_data
        self.classes = characters
        self.lookupletter = {letter: torch.tensor(index) for index, letter in enumerate(characters)}
        self.padding_correction = 6 #By default, PILs ImageDraw function uses excessive padding     
        
        self.ver_flip = ver_flip
        self.hor_flip = hor_flip
        
        
    def __len__(self):
        return len(self.data)

    def __getitem__(self, i):
        
        # Load font and character
        f,c = self.data[i]
        
        # Get label (alphabetic index of character)
        lbl  = self.lookupletter[c]
        
        # Scale character to image
        fontsize = 1
        font = ImageFont.truetype(f,fontsize)
        while max(font.getsize(c))/min(self.imsize) <= self.word_scale:
            fontsize += 1
            font = ImageFont.truetype(f,fontsize)
        fontsize -=1  
        font = ImageFont.truetype(f,fontsize)

        # PIL draw object
        img = Image.fromarray(255*np.ones(self.imsize).astype('uint8'))
        draw = ImageDraw.Draw(img)
        
        if self.random_pos:
            # Calculate left-over space
            textsize = font.getsize(c)
            free_space = np.subtract(self.imsize,textsize)
            free_space += self.padding_correction

            # Draw character at random position
            location = np.random.rand(2)*(free_space)
            location[1]-= self.padding_correction
            draw.text(location,c,(0,),font=font)       
        else:
            location = np.array([*self.imsize])//2
            draw.text(location, c, (0,), font=font, anchor='mm', align='center')

        img = self.tensormaker(img)
        
        
        if self.invert:
            img = 1-img
            
        if self._mask is not None:
            img = img*self._mask
            
        if self.ver_flip:
            img = img.flip([1])
           
        if self.hor_flip:
            img = img.flip([2])

        return img.to(self.device), lbl.to(self.device)




class Calibration_Dataset_contour(Dataset):

    def __init__(self, directory,
                 device=torch.device('cuda:0'),
                 imsize=(128, 128),
                 contour_labels=True,
                 validation=False,
                 load_preprocessed=False,
                 circular_mask=True):
        """
        Now returns: (label_, label)
        label_: distorted/shifted contour
        label: original contour

        aug_per_image: how many augmented samples are generated per original image
        """

        self.validation = validation
        self.contour_labels = contour_labels
        self.device = device

        contour = lambda im: im.filter(ImageFilter.FIND_EDGES).point(lambda p: 255 if p > 1 else 0) if self.contour_labels else im

        # Only keep target processing here because images are no longer stored
        self.trg_transform = T.Compose([
            T.Lambda(lambda img: F.center_crop(img, min(img.size))),
            T.Resize(imsize, interpolation=T.InterpolationMode.NEAREST),
            T.Lambda(contour),
            T.ToTensor()
        ])
        self.img_transform = T.Compose([T.Lambda(lambda img:F.center_crop(img, min(img.size))),
                                T.Resize(imsize),
                                T.ToTensor()
                                ])

        if circular_mask:
            self._mask = create_circular_mask(*imsize).view(1, *imsize)
        else:
            self._mask = None

        self.inputs = []   # raw input, center-cropped/resized only
        self.targets = []  # current reference contour target

        if load_preprocessed:
            self.load(directory)
        else:
            img_files, seg_files = [], []

            print('----Listing training images----')
            img_files = glob(os.path.join(directory, 'images', '*.png'))
            seg_files = glob(os.path.join(directory, 'images', '*.png'))

            print('----Listing validation images----')
            val_img_files = glob(os.path.join(directory, 'images', '*.png'))
            val_seg_files = glob(os.path.join(directory, 'images', '*.png'))

            for l in [img_files, seg_files, val_img_files, val_seg_files]:
                l.sort()

            print('Finished listing files')

            if validation:
                self.input_files = val_img_files
                self.target_files = val_seg_files
            else:
                self.input_files = img_files
                self.target_files = seg_files

            print('----Preprocessing DINO input/target----')
            for image, target in tqdm(zip(self.input_files, self.target_files),total=len(self.input_files)):

                t = Image.open(target).convert('L')

                # Crop, resize & transform
                t = self.img_transform(t)
                                            
                self.inputs += [t]
                self.targets += [t]
            print('----Finished preprocessing----')
            self.save(directory)


    def save(self, directory):
        path = os.path.join(directory, 'processed_contours')
        if not os.path.exists(path):
            os.makedirs(path)

        mode = '_val' if self.validation else '_train'
        with open(os.path.join(path, f'standardized_processed{mode}_inputs.pkl'), 'wb') as f:
            pickle.dump(self.inputs, f)
        with open(os.path.join(path, f'standardized_processed{mode}_targets.pkl'), 'wb') as f:
            pickle.dump(self.targets, f)

    def load(self, directory):
        mode = '_val' if self.validation else '_train'
        with open(os.path.join(directory, f'standardized_processed{mode}_inputs.pkl'), 'rb') as f:
            self.inputs = pickle.load(f)
        with open(os.path.join(directory, f'standardized_processed{mode}_targets.pkl'), 'rb') as f:
            self.targets = pickle.load(f)

    def __len__(self):
        return len(self.inputs)

    def __getitem__(self, i):
        inputs = self.inputs[i]
        label = self.targets[i]

        if self._mask is not None:
            inputs = inputs * self._mask
            label = label * self._mask

        return inputs.detach().to(self.device), label.detach().to(self.device)
    
class DINO_Dataset_contour(Dataset):

    def __init__(self, directory='xxx',
                 device=torch.device('cuda:0'),
                 imsize=(128, 128),
                 contour_labels=True,
                 validation=False,
                 load_preprocessed=False,
                 circular_mask=True):


        self.validation = validation
        self.contour_labels = contour_labels
        self.device = device

        contour = lambda im: im.point(lambda p: 255 if p > 20 else 0) if self.contour_labels else im

        # Raw images are used as inputs; current reference contour images are targets.
        self.trg_transform = T.Compose([
            T.Lambda(lambda img: F.center_crop(img, min(img.size))),
            T.Resize(imsize, interpolation=T.InterpolationMode.NEAREST),
            T.Lambda(contour),
            T.ToTensor()
        ])
        self.img_transform = T.Compose([T.Lambda(lambda img:F.center_crop(img, min(img.size))),
                                T.Resize(imsize),
                                T.ToTensor()
                                ])

        if circular_mask:
            self._mask = create_circular_mask(*imsize).view(1, *imsize)
        else:
            self._mask = None

        self.inputs = []   # label_
        self.targets = []  # label

        if load_preprocessed:
            self.load(directory)
        else:
            print('----Listing training images----')
            seg_files = glob(os.path.join(directory, 'reference', '*.jpg'))

            print('----Listing validation images----')
            val_seg_files = glob(os.path.join(directory, 'reference', '*.jpg'))

            for l in [seg_files, val_seg_files]:
                l.sort()

            print('Finished listing files')

            if validation:
                self.target_files = val_seg_files
            else:
                self.target_files = seg_files
            self.input_files = [self._raw_file_for_target(path, directory) for path in self.target_files]

            print('----Preprocessing calibration input----')
            for image, target in tqdm(zip(self.input_files, self.target_files),total=len(self.input_files)):

                im = Image.open(image).convert('RGB')
                t = Image.open(target).convert('L')

                # Crop, resize & transform
                # t = t.filter(ImageFilter.MaxFilter(9)) 
                x = self.img_transform(im)
                t = self.trg_transform(t)
                # t = dilation3x3(t)
                                  
                self.inputs += [x]
                self.targets += [t]
            print('----Finished preprocessing----')
            self.save(directory)

    def _raw_file_for_target(self, target_path, directory):
        target_name = os.path.basename(target_path)
        raw_dir = os.path.join(directory, 'raw')
        candidates = [
            os.path.join(raw_dir, target_name),
            os.path.join(raw_dir, target_name.replace('_final', '')),
        ]
        for path in candidates:
            if os.path.exists(path):
                return path
        raise FileNotFoundError(
            f"No matching raw input found for target {target_path}. "
            f"Tried: {candidates}"
        )


    def save(self, directory):
        path = os.path.join(directory, 'processed_contours')
        if not os.path.exists(path):
            os.makedirs(path)

        mode = '_val' if self.validation else '_train'
        with open(os.path.join(path, f'standardized_processed{mode}_inputs.pkl'), 'wb') as f:
            pickle.dump(self.inputs, f)
        with open(os.path.join(path, f'standardized_processed{mode}_targets.pkl'), 'wb') as f:
            pickle.dump(self.targets, f)

    def load(self, directory):
        mode = '_val' if self.validation else '_train'
        with open(os.path.join(directory, f'standardized_processed{mode}_inputs.pkl'), 'rb') as f:
            self.inputs = pickle.load(f)
        with open(os.path.join(directory, f'standardized_processed{mode}_targets.pkl'), 'rb') as f:
            self.targets = pickle.load(f)

    def __len__(self):
        return len(self.inputs)

    def __getitem__(self, i):
        inputs = self.inputs[i]
        label = self.targets[i]

        if self._mask is not None:
            label = label * self._mask

        return inputs.detach().to(self.device), label.detach().to(self.device)
