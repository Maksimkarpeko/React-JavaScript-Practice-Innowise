import style from './navigateItem.module.css'
export const NavigateItem = ({src,alt,text}) => {
  return (
    <li className={style.item}>
      <div>
        <img src={src} alt={alt} />
      </div>
      <span className={style.itemText}>{text}</span>
    </li>
  )
}