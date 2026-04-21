import style from './errorStyle.module.css';

import error from '@assets/CatMem.jpg';
import { Button } from "@shared/Button/Button";
import { RouterPath } from '@constants/routerPath';

export const Error = () => {
  return (
    <>
      <img src={error} alt="error" className={style.img} />
      <p>I don't know what happened</p>
      <Button size={'medium'} variant={'primary'} to={RouterPath.home}>
        Go to the Main page
      </Button>
    </>
  )
}