import { NavigateItem } from "./NavigateItem";
import style from "../HeaderStyle.module.css";
import { navigateList } from "../data/navigateList";

export const NavigateBar = () => {
  return (
    <nav className={style.navigateContainer}>
      <ul className={style.navigateList}>
        {navigateList.map(item=>{
          return(
            <NavigateItem src={item.src} alt={item.alt} text={item.text} to={item.link} key={item.alt}/>
          )
        })}
      </ul>
    </nav>
  )
}