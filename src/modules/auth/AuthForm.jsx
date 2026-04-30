import { Link } from 'react-router';
import { useCallback } from 'react';
import { ModePath } from '@shared/constants/router-path';
import { Button, Input, ErrorMessage, SuccessMessage, Spinner } from '@shared/ui';
import { APP_TEXT, RouterPath } from '@shared/constants';
import { useAddUserMutation, useLoginUserMutation } from '../auth/api/authApi';
import style from './AuthStyle.module.css';



export const AuthForm = ({
  authParams,
  handleLoginSubmit,
  handleRegistrationSubmit,
  handleOnChange,
  errors,
  value,
  isFormInvalid,
}) => {

  const displayError = useCallback((errorName) =>  {
    if (!errors[errorName]) return null;

    const isActionRule = Object
      .values(errors[errorName])
      .find((rule) => rule.isAction);

    return isActionRule && <ErrorMessage text={isActionRule.message}/>
  },[errors]);

  const [_,
    { 
      isError: isAddError, 
      isSuccess: isAddSuccess, 
      error: addError, 
      isLoading: isAddLoading,
    }
  ] = useAddUserMutation();
  
  const [__,
    {
      isError: isLoginError,
      isSuccess: isLoginSuccess,
      error: loginError,
      isLoading: isLoginLoading,
    },
  ] = useLoginUserMutation();  

  const typeText = authParams === 'login' ? 'Login' : 'Registration';
  const handleSubmit = authParams === 'login' ? handleLoginSubmit : handleRegistrationSubmit;
  const subTitle = authParams === 'login'  ? APP_TEXT.auth.login.subTitle : APP_TEXT.auth.registration.subTitle;
  const footerText = authParams === 'login' ? APP_TEXT.auth.login.footerText : APP_TEXT.auth.registration.footerText;
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
            onChange={handleOnChange}
          />
          <div className={style.errorContainer}>
            {displayError('username')}
          </div>
        </div>
        <div className={style.inputContainer}>
          <p>Password</p>
          <Input 
            type="password" 
            name="password" 
            isRequired={true} 
            placeholder="Your password"
            value={value.password}
            onChange={handleOnChange}
          />
          <div className={style.errorContainer}>
            {displayError('password')}
          </div>
        </div>
        <div className={style.errorContainer}>
          {isAddError && <ErrorMessage text={addError?.data?.message || 'Registration failed'}/>}
          {(isAddSuccess || isLoginSuccess) && <SuccessMessage text={'success!'}/>}
          {isLoginError && <ErrorMessage text={loginError?.data?.message || 'Invalid username or password'}/>}
          {(isLoginLoading || isAddLoading) && <Spinner/>}
        </div>
        <p className={style.authParagraph}>
          {footerText} <span></span>
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
          onClick={handleSubmit}
          className={style.addButton}
          isDisabled={isFormInvalid}
        >
          <span className={style.authFormButtonText}>{typeText}</span>
        </Button>
      </form>
    </div>
  )
}