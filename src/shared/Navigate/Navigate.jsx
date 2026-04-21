
import { navigateList } from "../../constants/navigateList";
import { NavigateItem } from "../NavigateItem/NavigateItem";
import style from "./navigate.module.css"
console.log(style);

export const Navigate = () => {
  return (
    <nav className={style.navigate}>
      <ul className={style.list}>
        {navigateList.map(item=>{
          return(
            <NavigateItem src={item.src} alt={item.alt} text={item.text} link={item.link} key={item.alt}/>
          )
        })}
      </ul>
    </nav>
  )
}