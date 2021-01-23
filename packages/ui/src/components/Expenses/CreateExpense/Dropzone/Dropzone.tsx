import { useCallback, useContext, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { StyledDropzone } from './Dropzone.styles';
import Tesseract from 'tesseract.js';
import { ImageParser } from '@expnsr/services/ImageParser';
import Upload from '../../../common/icons/Upload/Upload';
import { Dialogue } from './Dialogue/Dialogue';
import { ParsedItemsContext } from '../../../../hooks/useParsedItems/context';

interface TesseractResponseObject {
  workerId: string;
  jobId: string;
  status: string;
  progress: number;
}
export const Dropzone = () => {
  const [tesseractState , setTerreractState] = useState<any | null>(null)
  const [showDiaglogue, setShowDialogue] = useState<boolean>(false)
  const [, setItems] = useContext(ParsedItemsContext)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    //open the dialogue
    setShowDialogue(true)
    // Do something with the files
    acceptedFiles.forEach(async (file: File) => {
      const {
        data: { text },
      } = await Tesseract.recognize(file, 'eng', {
        logger: (m: TesseractResponseObject) => {
          console.log(m)
          setTerreractState(m)
        }
      });
      setTimeout(() => setShowDialogue(false),500)
      console.log(text);
      const items = new ImageParser(text).parseItems(); 
      setItems(items)
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
    <Dialogue progress={tesseractState?.status === 'recognizing text' ? tesseractState?.progress : 0} open={showDiaglogue} />
    </>
  );
};
