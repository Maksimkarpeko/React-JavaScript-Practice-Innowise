import style from './errorStyle.module.css';
import error from '@shared/assets/CatMem.jpg';
import { Button } from "@shared/ui/button/Button.jsx";
import { RouterPath } from '@shared/constants/routerPath';
import { useNavigate } from 'react-router';

export const Error = () => {
  const navigate = useNavigate();
  return (
    <div className={style.errorContainer}>
      <img src={error} alt="error" className={style.img} />
      <p className={style.errorText}>I don't know what happened</p>
      <Button size={'medium'} variant={'primary'} onClick={()=>navigate(RouterPath.home)}>
        Go to the Main page
      </Button>
    </div>
  )
}