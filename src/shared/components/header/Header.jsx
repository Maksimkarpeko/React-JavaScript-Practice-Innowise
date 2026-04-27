import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@shared/ui/button/Button";
import { RouterPath } from "@shared/constants/routerPath";
import { APP_TEXT } from "@shared/constants/appText";
import { Profile } from "@shared/ui/profile/Profile";
import { logOutUser } from "@modules/auth/hook/authSlice";
import style from "./HeaderStyle.module.css";
import { NavigateBar } from "./NavigationBar";


export const Header = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const parseAuthData = JSON.parse(auth);
  const dispatch = useDispatch();
  const {user} = useSelector((state)=> state.auth)
  const handelLogOut = () => {
    localStorage.removeItem("user");
    dispatch(logOutUser())
    navigate("/" + RouterPath.home);
  }

  return (
    <header className={style.header}>
      <div className={style.headerLeftSide}></div>
      <NavigateBar />
       {
        auth ? 
        <Profile onClick={handelLogOut} username={user?.username || parseAuthData.username}/>
        : 
        (
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
              onClick={()=>navigate({pathname:RouterPath.login,search:"?mode=login"})}
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