import { useTesseract } from '@/hooks/useTesseract';
import { ImageParser } from '@expnsr/services/ImageParser';
import { Dialog } from '@material-ui/core';
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import ReactCrop from 'react-image-crop';
import Tesseract, { ImageLike } from 'tesseract.js';
import { Dialogue } from '../Dialogue/Dialogue';
import { StyledDialog } from './ImageCrop.styles';

interface CropObj {
  aspect?: number;
  unit?: string;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
}

interface ImageCropProps {
    image: string
    open: boolean
    closeFn: React.Dispatch<React.SetStateAction<boolean>>
}
export const ImageCrop = ({ image, open, closeFn }: ImageCropProps) => {
  const [crop, setCrop] = useState({  });
  const [canvas, setCanvas] = useState<Blob>(null);
  const ref = useRef<HTMLImageElement>(null);
  const handleImageLoaded = (image: HTMLImageElement) => {
    ref.current = image;
  };

  const handleCropChange = (crop: CropObj) => {
    setCrop(crop);
  };

  const handleCropComplete = (crop: CropObj) => {
    makeClientCrop(crop);
  };

  const makeClientCrop = async (crop: CropObj) => {
    if (ref.current && crop.width && crop.height) {
      const croppedImg  = await getCroppedImg(ref.current, crop);
      await initCanvas(croppedImg)
    //   setCanvas(croppedImg)
        setCrop({})
        closeFn(false)
}
  };

  const initCanvas = (image: Blob) => new Promise(resolve => setTimeout(() => {
      setCanvas(image)
      resolve(true)
  }, 500))

  const getCroppedImg = (
    image: HTMLImageElement,
    crop: CropObj,
  ): Promise<Blob> => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height,
    );
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob: Blob) => {
        if (!blob) {
          console.error('Canvas is empty');
          return;
        }
        // fileUrl = window.URL.createObjectURL(blob);
        console.log('success');
        resolve(blob);
      }, 'image/jpeg');
    });
  };

  useEffect(() => {
    return () => {
        setCrop({ })
        setCanvas(null)
        ref.current = null    
    };
  }, [])

  return (
    <>
      <StyledDialog maxWidth='md' open={open}>
        <ReactCrop
          ruleOfThirds
          src={image}
          crop={crop}
          onImageLoaded={handleImageLoaded}
          onComplete={handleCropComplete}
          onChange={handleCropChange}
        />
      </StyledDialog>
      {canvas && <TesseractComponent setter={setCanvas} image={canvas} /> }
    </>
  );
};

interface TesseractProps {
    image: Blob
    setter: React.Dispatch<React.SetStateAction<Blob>>
}
const TesseractComponent = ({ image, setter }: TesseractProps) => {
    const { showDialogue, tesseractState } = useTesseract(image, () => {
        setter(null)
    })
    return (
        <Dialogue
        progress={
          tesseractState?.status === 'recognizing text'
            ? tesseractState?.progress
            : 0
        }
        open={showDialogue}
      />
    )
}