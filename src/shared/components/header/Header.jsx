import { useNavigate } from "react-router";
import style from "./HeaderStyle.module.css";
import { NavigateBar } from "./ui/NavigateBar";
import { Button } from "@shared/ui/button/Button";
import { RouterPath } from "@shared/constants/routerPath";


export const Header = () => {
  const navigate = useNavigate();
  let isAuth = false // IT'S THE PLUG
  return (
    <header className={style.header}>
      <div className={style.headerLeftSide}></div>
      <NavigateBar />
       {
        isAuth ? "PROFILE": (
          <div className={style.headerAuthContainer}>
            <Button size="medium" variant="primary" onClick={()=>navigate({pathname:RouterPath.register,search:"?mode=register"})}>
              Register
            </Button>
            <Button size="medium" variant="secondary" onClick={()=>navigate({pathname:RouterPath.login,search:"?mode=Login"})}>
              Login
            </Button>
          </div>
        )
      }
    </header>
  )
}