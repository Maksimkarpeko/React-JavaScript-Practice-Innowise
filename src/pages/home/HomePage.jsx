import style from "./HomeStyle.module.css";
import { Button } from "@shared/ui/button/Button.jsx";
import logo from '@shared/assets/LogoXL.svg';
import { RouterPath } from "@shared/constants/routerPath";
import { useNavigate } from "react-router";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className={style.homeContainer}>
        <img src={logo} alt="logo" className={style.homeContainerImg}/>
        <h1 className={style.homeContainerTitle}>Welcome to the HR WebSite</h1>
        <p className={style.homeContainerText}>
          Monitor workforce engagement and track key personnel metrics across all departments.
        </p>   
        <div className={style.homeContainerButtonContainer}> 
          <Button size="medium" variant="primary" onClick={()=> {navigate(RouterPath.dashboards)}}>
            To learn more
          </Button>
        </div>
    </div>
  )
}