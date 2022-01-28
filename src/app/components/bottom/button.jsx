import React, { useRef, useState, useContext } from 'react'
import Context from './../../context/app.context'
import style from './button.module.css'

export const Button = () => {
  const [copySuccess, setCopySuccess] = useState('')
  const { isUploaded, file } = useContext(Context)
  const textRef = useRef(null)

  function copyToClipboard(e) {
    console.log(textRef)
    textRef.current.select()
    document.execCommand('copy')
    e.target.focus()
    setCopySuccess('Copied!')
  }
  return (
    <>
      {isUploaded ? (
        <div className={style.container}>
          <input
            readOnly={false}
            ref={textRef}
            value=" https://firebasestorage.googleapis.com/v0/b/medicall-3dced.appspot.com/o/25May2021124156Portada%20VACIA%20copia.jpg?alt=media&token=f96967fd-4ec7-4f47-b3dc-28ad102dacc2"
          />
          <button onClick={copyToClipboard}>Copy Link</button>
        </div>
      ) : (
        <button className={style.button}>Choose file</button>
      )}
    </>
  )
}
