import { useNavigate } from 'react-router';
import error from '@shared/assets/CatMem.jpg';
import { Button } from "@shared/ui/button/Button.jsx";
import { RouterPath } from '@shared/constants/routerPath';
import { LOCALIZATION } from '@shared/constants/localization';
import style from './errorStyle.module.css';


export const Error = () => {
  const navigate = useNavigate();

  return (
    <div className={style.errorContainer}>
      <img src={error} alt="error" className={style.img} />
      <p className={style.errorText}>{LOCALIZATION.en.error.unknown}</p>
      <Button 
        name="button"
        size={'medium'}
        variant={'primary'}
        onClick={()=>navigate(RouterPath.home)}
        ariaLabel="navigate the home"
      >
        {LOCALIZATION.en.error.navigation}
      </Button>
    </div>
  )
}