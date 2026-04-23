import { useNavigate } from "react-router";
import { Button } from "@shared/ui/button/Button.jsx";
import logo from '@shared/assets/LogoXL.svg';
import { RouterPath } from "@shared/constants/routerPath";
import { LOCALIZATION } from "@shared/constants/localization";
import style from "./HomeStyle.module.css";
export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={style.homeContainer}>
        <img src={logo} alt="logo" className={style.homeContainerImg}/>
        <h1 className={style.homeContainerTitle}>
          {LOCALIZATION.en.home.title}
        </h1>
        <p className={style.homeContainerText}>
          {LOCALIZATION.en.home.description}
        </p>   
        <div className={style.homeContainerButtonContainer}> 
          <Button 
            name="button"
            size="medium"
            variant="primary"
            onClick={()=> {navigate(RouterPath.dashboards)}}
            ariaLabel="navigate to dashboards page"
          >
            {LOCALIZATION.en.home.goToDashboard}
          </Button>
        </div>
    </div>
  )
}