import { ImageParser } from '@expnsr/services/ImageParser';
import { useCallback, useContext, useEffect, useState } from 'react';
import Tesseract, { ImageLike } from 'tesseract.js';
import { ParsedItemsContext } from '../useParsedItems/context';


interface TesseractResponseObject {
    workerId: string;
    jobId: string;
    status: string;
    progress: number;
  }

export const useTesseract = (image: Blob, cb: () => void) => {
    const [showDialogue, setShowDialogue] = useState<boolean>(false)
    const [tesseractState, setTerreractState] = useState<TesseractResponseObject | null>(null);
    const [,setItems] = useContext(ParsedItemsContext);

    const callTesseract = useCallback(async () => {
        setShowDialogue(true)
        const { data: { text } } = await Tesseract.recognize(window.URL.createObjectURL(image), 'eng', {
            logger: (m: TesseractResponseObject) => {
              console.log(m);
              setTerreractState(m);
            },
          })
        setTimeout(() => setShowDialogue(false), 500);
        console.log(text);
        const items = new ImageParser(text).parseItems();
        setItems(items);
        cb();
    }, [])



    useEffect(() => {
        image && callTesseract()
      return () => {
      };
    }, [image])
    
    return { 
        showDialogue,
        tesseractState
    }
}