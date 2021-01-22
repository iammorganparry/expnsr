import { useCallback } from 'react'
import {useDropzone} from 'react-dropzone'
import { StyledDropzone } from './Dropzone.styles'
import Tesseract from 'tesseract.js';
import { ImageParser } from '@expnsr/services/ImageParser'
import Upload from '../../../common/icons/Upload/Upload';

export const Dropzone = () => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the files
        acceptedFiles.forEach(async (file: File) => {
            const {data: { text }} = await Tesseract.recognize(file, 'eng', {
                logger: m => console.log(m)
            })
            console.log(text)
            const items = new ImageParser(text)
            
        })
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
      return (
        <StyledDropzone {...getRootProps()}>
          <Upload width='74px' height='74px' />
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the reciept here ...</p> :
              <p>Drag 'n' drop some reciept here, or click to select reciept</p>
          }
        </StyledDropzone>
      )
}