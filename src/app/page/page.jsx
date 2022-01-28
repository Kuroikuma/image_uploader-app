import style from './page.module.css'
import { DropzoneFile } from '../components/dropzone/dropzone'
export const Page = () => {
  return (
    <>
      <h1 className={style.title}> Hola mundo</h1>
      <DropzoneFile />
    </>
  )
}
