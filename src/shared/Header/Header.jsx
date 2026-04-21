import style from "./HeaderStyle.module.css";
import { HeaderAction } from "./component/HeaderAction";
import { Navigate } from "./component/Navigate";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.left}></div>
      <Navigate />
      <HeaderAction />
    </header>
  )
}