import { Link } from 'react-router'
import style from './navigateItem.module.css'
export const NavigateItem = ({src,alt,text,link}) => {
  return (
    <li className={style.item}>
      <div>
        <img src={src} alt={alt} />
      </div>
      <Link className={style.itemText} to={link}>
        <span >{text}</span>
      </Link>
    </li>
  )
}