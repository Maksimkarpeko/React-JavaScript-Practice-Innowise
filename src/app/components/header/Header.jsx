import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Button, Profile } from "@shared/ui";
import { RouterPath, APP_TEXT } from "@shared/constants";
import { logOutUser } from "@modules/auth/store/authSlice";
import style from "./HeaderStyle.module.css";
import { NavigationBar } from "./NavigationBar";


export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state)=> state.auth)
  const handelLogOut = () => {
    localStorage.removeItem("user");
    dispatch(logOutUser())
    navigate("/" + RouterPath.home);
  }

  return (
    <header className={style.header}>
      <div className={style.headerLeftSide}></div>
      <NavigationBar />
       {
        user 
        ? <Profile onClick={handelLogOut} username={user?.username}/>
        : (
          <div className={style.headerAuthContainer}>
            <Button 
              name="button"
              size="medium" 
              variant="primary" 
              onClick={()=>navigate({pathname:RouterPath.register,search:RouterPath.searchModeRegister})}
              ariaLabel="navigate to register page"
            >
              {APP_TEXT.header.registration}
            </Button>
            <Button 
              name="button"
              size="medium" 
              variant="secondary" 
              onClick={()=>navigate({pathname:RouterPath.login,search:RouterPath.searchModeLogin})}
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