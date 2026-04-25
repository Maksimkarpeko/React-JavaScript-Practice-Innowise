import { useNavigate } from "react-router";
import { Button } from "@shared/ui/button/Button";
import { RouterPath } from "@shared/constants/routerPath";
import { LOCALIZATION } from "@shared/constants/localization";
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
              {LOCALIZATION.en.header.registration}
            </Button>
            <Button 
              name="button"
              size="medium" 
              variant="secondary" 
              onClick={()=>navigate({pathname:RouterPath.login,search:"?mode=login"})}
              ariaLabel="navigate to login page"
            >
              {LOCALIZATION.en.header.login}
            </Button>
          </div>
        )
      }
    </header>
  )
}