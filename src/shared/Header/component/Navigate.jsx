import { NavigateItem } from "./NavigateItem";

import style from "../HeaderStyle.module.css";
import { navigateList } from "../data/navigateList";

export const Navigate = () => {
  return (
    <nav className={style.navigate}>
      <ul className={style.list}>
        {navigateList.map(item=>{
          return(
            <NavigateItem src={item.src} alt={item.alt} text={item.text} to={item.link} key={item.alt}/>
          )
        })}
      </ul>
    </nav>
  )
}