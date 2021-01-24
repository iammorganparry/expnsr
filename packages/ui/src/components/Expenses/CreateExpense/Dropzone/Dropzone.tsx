import { useCallback, useContext, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { StyledDropzone } from './Dropzone.styles';
import Upload from '../../../common/icons/Upload/Upload';
import { ImageCrop } from './ImageCrop/ImageCrop';

export const Dropzone = () => {
  const [image, setImage] = useState<string | null>(null);
  const [showImageDialogue, setShowImageDialogue] = useState<boolean>(false)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setShowImageDialogue(true)
    //open the dialogue
    // Do something with the files
    acceptedFiles.forEach((file: File) => {
      setImage(window.URL.createObjectURL(file));
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <>
      <StyledDropzone {...getRootProps()}>
        <Upload width="74px" height="74px" />
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the reciept here ...</p>
        ) : (
          <p>Drag 'n' drop some reciept here, or click to select reciept</p>
        )}
      </StyledDropzone>
      <ImageCrop open={showImageDialogue} closeFn={setShowImageDialogue} image={image} />
    </>
  );
};
