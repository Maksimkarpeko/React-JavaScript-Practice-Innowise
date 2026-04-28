import { useNavigate } from "react-router";
import { Button } from "@shared/ui";
import logo from '@shared/assets/LogoXL.svg';
import { RouterPath, APP_TEXT } from "@shared/constants";
import style from "./HomeStyle.module.css";

export const HomePage = () => {
  const navigate = useNavigate();
  
  return (
    <div className={style.homeContainer}>
        <img src={logo} alt="logo" className={style.homeContainerImg}/>
        <h1 className={style.homeContainerTitle}>
          {APP_TEXT.home.title}
        </h1>
        <p className={style.homeContainerText}>
          {APP_TEXT.home.description}
        </p>   
        <div className={style.homeContainerButtonContainer}> 
          <Button 
            name="button"
            size="medium"
            variant="primary"
            onClick={()=> {navigate(RouterPath.dashboards)}}
            ariaLabel="navigate to dashboards page"
          >
            {APP_TEXT.home.goToDashboard}
          </Button>
        </div>
    </div>
  )
}