import { Link } from 'react-router';
import { useCallback } from 'react';
import { Button, Input, ErrorMessage, SuccessMessage, Spinner } from '@shared/ui';
import { APP_TEXT, RouterPath } from '@shared/constants';
import style from './AuthStyle.module.css';


export const AuthForm = ({
  authParams,
  handleSubmit,
  handleOnChange,
  errors,
  value,
  isFormInvalid,
  addStatuses,
  loginStatuses,
}) => {

  const displayErrors = useCallback((fieldName) =>  {
    if (!errors[fieldName]) return null;

    const isActionRule = Object
      .values(errors[fieldName])
      .filter((rule) => rule.isAction);

    return isActionRule && isActionRule.map((rule) => (<ErrorMessage key={rule} text={rule.message}/>))
  },[errors]);

  const { 
    isError: isAddError, 
    isSuccess: isAddSuccess, 
    error: addError, 
    isLoading: isAddLoading,
  } = addStatuses;
  
  const {
    isError: isLoginError,
    isSuccess: isLoginSuccess,
    error: loginError,
    isLoading: isLoginLoading,
  } = loginStatuses;  

  const formType = ['login'].includes(authParams) ?  'register' : 'login' ;

  const { subTitle, footerText, formName, linkText, buttonText } =  APP_TEXT.auth[authParams];
  const to =  {
    pathname: '/'+ RouterPath[formType],
    search: new URLSearchParams({mode: RouterPath[formType]}).toString(),
  }
  
  return (
    <div className={style.authContainer}>
      <form action="#" className={style.authForm}>
        <h1 className={style.authFormTitle}>{formName}</h1>
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
            {displayErrors('username')}
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
            {displayErrors('password')}
          </div>
        </div>
        <div className={style.errorContainer}>
          {isAddError && <ErrorMessage text={addError?.data?.message || 'Registration failed'}/>}
          {(isAddSuccess || isLoginSuccess) && <SuccessMessage text={'success!'}/>}
          {isLoginError && <ErrorMessage text={loginError?.data?.message || 'Invalid username or password'}/>}
          {(isLoginLoading || isAddLoading) && <Spinner/>}
        </div>
        <p className={style.authParagraph}>
          {footerText}
          <Link to={to} className={style.authLink}>
            {linkText}
          </Link>
        </p>
        <Button 
          type="submit"
          variant="primary" 
          ariaLabel={'Submit and navigate to dashboard'}
          size="medium"
          name="password"
          onClick={handleSubmit}
          isDisabled={isFormInvalid}
        >
          <span className={style.authFormButtonText}>{buttonText}</span>
        </Button>
      </form>
    </div>
  )
}