import React, { useCallback, useContext } from 'react'
import Context from './../../context/app.context'
import { useDropzone } from 'react-dropzone'
import { useFileStorage } from './useFileStorage'

export function DropzoneFile () {
  const [fileHandler] = useFileStorage()
  const { file, setIsLoading } = useContext(Context)
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles && acceptedFiles.map((file) => {
      setIsLoading(true)
      return fileHandler(file)
    })
  }, [fileHandler, setIsLoading])
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
      {file ? <img src={file} alt='FileStorage' /> : null}
    </div>
  )
}
