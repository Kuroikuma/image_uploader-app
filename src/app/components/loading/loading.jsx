import style from './loading.module.css'

export const Loading = () => {
  return (
    <div className={style.Uploaded}>
      <h2>Uploading...</h2>
      <div className={style.bar}>
        <div className={style.Item__bar}></div>
      </div>
    </div>
  )
}
