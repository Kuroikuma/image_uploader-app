import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useFileStorage } from './useFileStorage'

export function DropzoneFile () {
  const [fileUrl, fileHandler] = useFileStorage()
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles && acceptedFiles.map((file) => {
      return fileHandler(file)
    })
  }, [fileHandler])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive
        ? (
          <p>Drop the files here ...</p>
          )
        : (
          <p>Drag 'n' drop some files here, or click to select files</p>
          )}
      {fileUrl ? <img src={fileUrl} alt='FileStorage' /> : null}
    </div>
  )
}
