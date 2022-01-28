import { app } from '../../../fb'
import { useContext } from 'react'
import Context from '../../context/app.context'

export const useFileStorage = () => {
  const { setFile, setIsLoading } = useContext(Context)
  const fileHandler = async (fileProps) => {
    const file = fileProps
    const storegeRef = app.storage().ref()
    const filePath = storegeRef.child(file.name)
    await filePath.put(file)
    const linkUrl = await filePath.getDownloadURL()
    setFile(linkUrl)
    setIsLoading(false)
  }
  return [fileHandler]
}
