import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@shared/ui';
import { RouterPath, APP_TEXT } from '@shared/constants';
import { ModePath } from '@shared/constants/router-path';
import { logOutUser } from '@modules/auth/store/authSlice';
import { Profile } from './Profile';
import style from './HeaderStyle.module.css';
import { NavigationBar } from './NavigationBar';


export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state)=> state.auth);
  const handelLogOut = () => {
    dispatch(logOutUser());
    navigate('/' + RouterPath.home);
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
                onClick={()=>navigate({pathname:RouterPath.register,search:`?mode=${ModePath.modeRegister}`})}
                ariaLabel="navigate to register page"
              >
                {APP_TEXT.header.registration}
              </Button>
              <Button 
                name="button"
                size="medium" 
                variant="secondary" 
                onClick={()=>navigate({pathname:RouterPath.login,search:`?mode=${ModePath.modeLogin}`})}
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