import { app } from '../../../fb'
import { useState } from 'react'

export const useFileStorage = () => {
  const [fileUrl, setFileUrl] = useState('')
  const fileHandler = async (fileProps) => {
    const file = fileProps
    const storegeRef = app.storage().ref()
    const filePath = storegeRef.child(file.name)
    await filePath.put(file)
    const linkUrl = await filePath.getDownloadURL()
    setFileUrl(linkUrl)
  }
  return [fileUrl, fileHandler]
}
