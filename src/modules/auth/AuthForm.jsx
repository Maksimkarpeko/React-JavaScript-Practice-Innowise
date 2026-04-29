import { Link } from 'react-router'
import { Button,Input,ErrorMessage, SuccessMessage } from '@shared/ui'
import { APP_TEXT } from '@shared/constants'
import { RouterPath } from '@shared/constants'
import { ModePath } from '@shared/constants/router-path'
import { useAddUserMutation, useLoginUserMutation } from '../auth/api/authApi'
import style from './AuthStyle.module.css'

export const AuthForm = ({
  authParams,
  handelLoginSubmit,
  handelRegistrationSubmit,
  handelOnChange,
  commonError,
  customError,
  value,
}) => {
  const [
    { 
      data, 
      isError, 
      isSuccess, 
      error, 
      isLoading,
    }
  ] = useAddUserMutation(); //перенести
  
  const [_,
    {
      isError: isLoginError,
      isSuccess: isLoginSuccess,
      error: loginError,
      isLoading: isLoginLoading,
    },
  ] = useLoginUserMutation();

  const typeText = authParams === 'login' ? 'Login' : 'Registration';
  const handelSubmit = authParams === 'login' ? handelLoginSubmit : handelRegistrationSubmit;
  //
  const subTitle = authParams === 'login'  ? APP_TEXT.auth.login.subTitle : APP_TEXT.auth.registration.footerText;
  const textLink = authParams === 'login' ? 'Registration' : 'Log in';
  const to = authParams === 'login' ? {
    pathname: '/'+ RouterPath.register,
    search: `?mode=${ModePath.modeRegister}`,
  } : {
    pathname: '/'+RouterPath.login,
    search:`?mode=${ModePath.modeLogin}`,
  };

  return (
    <div className={style.authContainer}>
      <form action="#" className={style.authForm}>
        <h1 className={style.authFormTitle}>{typeText}</h1>
        <p className={style.authFormSubTitle}>{subTitle}</p>
        <div className={style.inputContainer}>
          <p>Login</p>
          <Input 
            type="text" 
            name="username" 
            isRequired={true} 
            placeholder="Your username"
            value={value.username}
            onChange={handelOnChange}
          />
          {customError.errorUsername && <ErrorMessage text={customError.errorUsername}/>}
        </div>
        <div className={style.inputContainer}>
          <p>Password</p>
          <Input 
            type="password" 
            name="password" 
            isRequired={true} 
            placeholder="Your password"
            value={value.password}
            onChange={handelOnChange}
          />
          <div className={style.errorContainer}>
            {customError.errorPassword && <ErrorMessage text={customError.errorPassword}/>}
          </div>
        </div>
        <div className={style.errorContainer}>
          {commonError && <ErrorMessage text={commonError}/>}
          {isError && <ErrorMessage text={error?.data?.message}/>}
          {((isSuccess && data) || isLoginSuccess) && <SuccessMessage text={'success!'}/>}
          {isLoginError && <ErrorMessage text={loginError?.data?.message}/>}
          {(isLoginLoading|| isLoading) && 'Loading...'}
        </div>
        <p className={style.authParagraph}>
          {subTitle} <span></span>
          <Link to={to} className={style.authLink}>
            {textLink}
          </Link>
        </p>
        <Button 
          type="submit"
          variant="primary" 
          ariaLabel={'Submit and navigate to dashboard'}
          size="medium"
          name="password"
          onClick={handelSubmit}
          className={style.addButton}
        >
          <span className={style.authFormButtonText}>{typeText}</span>
        </Button>
      </form>
    </div>
  )
}