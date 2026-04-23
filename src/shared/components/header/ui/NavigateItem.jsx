import { Link } from 'react-router';
import style from '../HeaderStyle.module.css';

export const NavigateItem = ({src,alt,text,to}) => {
  return (
    <li className={style.navigateItem} >
      <Link className={style.navigateItemLink} to={to}>
        <div>
          <img src={src} alt={alt} />
        </div>
        <span className={style.navigateItemText}>{text}</span>
      </Link>
    </li>
  )
}