import { HeaderAction } from "../HeaderAction/HeaderAction"
import { Navigate } from "../Navigate/Navigate"
import style from "./headerStyle.module"
export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.left}></div>
      <Navigate/>
      <HeaderAction/>
    </header>
  )
}