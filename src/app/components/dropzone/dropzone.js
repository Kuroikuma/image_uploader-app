import React, { useCallback, useContext } from 'react'
import Context from './../../context/app.context'
import image from '../../../assets/image.svg'
import style from './dropzone.module.css'
import { useDropzone } from 'react-dropzone'
import { useFileStorage } from './useFileStorage'

export function DropzoneFile() {
  const [fileHandler] = useFileStorage()
  const { file, setIsLoading, isUploaded } = useContext(Context)
  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles &&
        acceptedFiles.map((file) => {
          setIsLoading(true)
          return fileHandler(file)
        })
    },
    [fileHandler, setIsLoading]
  )
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div
      className={
        isUploaded
          ? `${style.container} ${style.Uploaded}`
          : `${style.container}`
      }
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {isUploaded ? (
        <img src={file} alt="FileStorage" />
      ) : (
        <>
          <img id={style.back_img} src={image} alt="background" />
          <p>Drag & Drop your image here</p>
        </>
      )}
    </div>
  )
}
