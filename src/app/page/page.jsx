import style from './page.module.css'
import { DropzoneFile } from '../components/dropzone/dropzone'
import React, { useContext } from 'react'
import Context from './../context/app.context'
import { Button } from '../components/bottom/button'

export const Page = () => {
  const { isLoading } = useContext(Context)
  return (
    <>
      {/*
      {isLoading ? (
        <p>Esta cargando</p>
      ) : (
        <>
          <h1 className={style.title}> Hola mundo</h1>
          <DropzoneFile />
        </>
      )}
      */}
      <Button />
    </>
  )
}
