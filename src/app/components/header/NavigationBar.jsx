import { Link } from 'react-router';
import style from './HeaderStyle.module.css';
import { navigateList } from './constants';
import { SideBar } from './SideBar';

export const NavigationBar = () => {
  return (
    <>
      <SideBar />
      <nav className={style.navigateContainer}>
        <ul className={style.navigateList}>
          {navigateList.map(item=>{
            return(
              <li className={style.navigateItem} key={item.src}>
                <Link className={style.navigateItemLink} to={item.link}>
                  <div>
                    <img src={item.src} alt={item.alt} />
                  </div>
                  <span className={style.navigateItemText}>
                    {item.text}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}