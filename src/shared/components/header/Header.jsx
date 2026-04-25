import { useNavigate } from "react-router";
import { Button } from "@shared/ui/button/Button";
import { RouterPath } from "@shared/constants/routerPath";
import { APP_TEXT } from "@shared/constants/appText";
import style from "./HeaderStyle.module.css";
import { NavigateBar } from "./NavigationBar";


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
            <Button 
              name="button"
              size="medium" 
              variant="primary" 
              onClick={()=>navigate({pathname:RouterPath.register,search:"?mode=register"})}
              ariaLabel="navigate to register page"
            >
              {APP_TEXT.header.registration}
            </Button>
            <Button 
              name="button"
              size="medium" 
              variant="secondary" 
              onClick={()=>navigate({pathname:RouterPath.login,search:"?mode=Login"})}
              ariaLabel="navigate to login page"
            >
              {APP_TEXT.header.login}
            </Button>
          </div>
        )
      }
    </header>
  )
}