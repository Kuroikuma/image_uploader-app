import React, { useContext } from 'react'
import Context from './../../context/app.context'
import style from './title.module.css'
import check from '../../../assets/checked.png'

export const Title = () => {
  const { isUploaded } = useContext(Context)
  return (
    <>
      {isUploaded ? (
        <div className={style.container}>
          <img src={check} alt="Checked" />
          <h2>Uploaded Successfully!</h2>
        </div>
      ) : (
        <div className={style.container}>
          <h2>Upload your image</h2>
          <p>File should be Jpeg, Png,...</p>
        </div>
      )}
    </>
  )
}
