import { useState } from 'react';
import { NavLink } from 'react-router';
import { Button } from '@shared/ui';
import style from './HeaderStyle.module.css'
import { navigateList } from './constants';


export const SideBar = () => {
  const [ isActive, setActive ] = useState(false);
  const handleOpenMenu = () => setActive(!isActive);

  return (
    <aside className={`${style.sideBarContainer}`}>
      <Button 
        name="button" 
        variant="primary" 
        size="small" 
        ariaLabel="Open sideBar menu" 
        onClick={handleOpenMenu}
      > 
        {isActive ? '▾' : '▴'}
      </Button>
      { isActive &&
        <ul>
          {navigateList.map(item=>{
            return(
              <li className={style.navigateItem} key={item.src}>
                <NavLink className={({ isActive })=>  isActive ? `${style.navigateItemLink} ${style.active}` : style.navigateItemLink} to={item.link}>
                  <div>
                    <img src={item.src} alt={item.alt} />
                  </div>
                  <span className={style.navigateItemText}>
                    {item.text}
                  </span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      }
    </aside>
  )
}