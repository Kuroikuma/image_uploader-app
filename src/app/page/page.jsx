import style from './page.module.css'
import { DropzoneFile } from '../components/dropzone/dropzone'
import React, { useContext } from 'react'
import Context from './../context/app.context'
import { Button } from '../components/bottom/button'
import { Title } from '../components/title/title'
import { Loading } from '../components/loading/loading'

export const Page = () => {
  const { isLoading } = useContext(Context)
  return (
    <div className={style.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={style.card}>
          <Title />
          <DropzoneFile />
          <Button />
        </div>
      )}
    </div>
  )
}
