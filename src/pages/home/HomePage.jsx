import style from "./HomeStyle.module.css";


import { Button } from "@shared/Button/Button";
import logo from '@assets/LogoXL.svg';
import { RouterPath } from "@constants/routerPath";

export const HomePage = () => {
  return (
    <div className={style.container}>
        <img src={logo} alt="logo" className={style.img}/>
        <h1 className={style.title}>Welcome to the HR WebSite</h1>
        <p className={style.text}>
          Monitor workforce engagement and track key personnel metrics across all departments.
        </p>   
        <div className={style.buttonContainer}> 
          <Button size="medium" variant="primary" isLink  to={RouterPath.tables}>
            To learn more
          </Button>
        </div>
    </div>
  )
}