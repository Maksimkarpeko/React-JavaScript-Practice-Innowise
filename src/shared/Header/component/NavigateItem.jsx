import { Link } from 'react-router';

import style from '../HeaderStyle.module.css';

export const NavigateItem = ({src,alt,text,to}) => {
  return (
    <li className={style.item}>
      <div>
        <img src={src} alt={alt} />
      </div>
      <Link className={style.itemText} to={to}>
        <span>{text}</span>
      </Link>
    </li>
  )
}