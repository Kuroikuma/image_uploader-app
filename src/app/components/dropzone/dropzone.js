import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

export function DropzoneFile () {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles && acceptedFiles.map((file) => {
      return console.log(file)
    })
  }, [])
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
    </div>
  )
}
