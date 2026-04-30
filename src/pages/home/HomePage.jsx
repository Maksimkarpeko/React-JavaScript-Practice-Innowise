import logo from '@shared/assets/LogoXL.svg';
import { APP_TEXT } from '@shared/constants';
import style from './HomeStyle.module.css';

export const HomePage = () => {
  return (
    <div className={style.homeContainer}>
      <img src={logo} alt="logo" className={style.homeContainerImg}/>
      <h1 className={style.homeContainerTitle}>
        {APP_TEXT.home.title}
      </h1>
      <p className={style.homeContainerText}>
        {APP_TEXT.home.description}
      </p>   
    </div>
  )
}