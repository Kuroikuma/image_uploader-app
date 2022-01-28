import React, { useRef, useState, useContext } from 'react'
import Context from './../../context/app.context'
import style from './button.module.css'

export const Button = () => {
  const [copySuccess, setCopySuccess] = useState('')
  const { isUploaded, file } = useContext(Context)
  const textRef = useRef(null)
  const hiddenFileInput = useRef(null)

  function handleClick() {
    hiddenFileInput.current.click()
  }

  const copyToClipboard = (e) => {
    console.log(textRef)
    textRef.current.select()
    document.execCommand('copy')
    e.target.focus()
    setCopySuccess('Copied!')
  }
  return (
    <>
      {isUploaded ? (
        <>
          <div className={style.container}>
            <input readOnly ref={textRef} value={file} />
            <button onClick={copyToClipboard}>Copy Link</button>
          </div>
          <p className={style.p}>{copySuccess}</p>
        </>
      ) : (
        <div className={style.container2}>
          <p>Or</p>
          <button onClick={handleClick} type="button" className={style.button}>
            Choose file
          </button>
          <input ref={hiddenFileInput} type="file" className={style.none} />
        </div>
      )}
    </>
  )
}
