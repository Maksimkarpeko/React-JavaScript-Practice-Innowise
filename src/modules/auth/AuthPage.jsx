import { ErrorMessage } from "@shared/ui/errorMessage/ErrorMessage";
import { Input } from "@shared/ui/input/Input";
import { RouterPath } from "@shared/constants/routerPath";
import { SuccessMessage } from "@shared/ui/successMessage/SuccessMessage";
import { APP_TEXT } from "@shared/constants/appText";
import style from "./AuthStyle.module.css"
import { AuthForm } from "./AuthForm";
import { useAuth } from "./hook/useAuth";
import { useAddUserMutation, useLoginUserMutation } from "./api/authApi";

export const AuthPage = () => {
  const [
    addUser, 
    { 
      data, 
      isError, 
      isSuccess, 
      error, 
      isLoading 
    }
  ] = useAddUserMutation();
  const [
    loginUser,
    {
      isError: isLoginError,
      isSuccess: isLoginSuccess,
      error: loginError,
      isLoading: isLoginLoading,
    },
  ] = useLoginUserMutation();
  const [
    authParams,
    handelLoginSubmit,
    handelRegistrationSubmit,
    handelOnChange,
    value,
    commonError,
    customError,
  ] = useAuth(addUser, loginUser);

  return (
    <>
      {
        <AuthForm 
          title={authParams === "login" ? "Login" : "Registration"} 
          buttonText =
          {
            authParams === "login" 
            ? "Login" 
            : "Registration"
          } 
          handelSubmit =
          {
            authParams === 'login'
            ? handelLoginSubmit 
            : handelRegistrationSubmit
          } 
          subTitle =
          {
            authParams === "login" 
            ? APP_TEXT.auth.login.subTitle
            : APP_TEXT.auth.registration.footerText
          }
          footerText =
          {
            authParams === "login" 
            ? APP_TEXT.auth.login.subTitle
            : APP_TEXT.auth.registration.footerText
          }
          textLink =
          {
            authParams === "login" 
            ? "Registration" 
            : "Log in"
          }
          to={
            authParams === "login" 
            ? {
              pathname:"/"+ RouterPath.register,
              search:"?mode=registration",
            } : {
              pathname:"/"+RouterPath.login,
              search:"?mode=login"
            }
          }
        >
          <div className={style.inputContainer}>
            <p>Login</p>
            <Input 
              type="text" 
              name="username" 
              isRequired={true} 
              placeholder="Your username"
              value={value.login}
              onChange={handelOnChange}
            />
            {customError.errorLogin && <ErrorMessage text={customError.errorLogin}/>}
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
            {((isSuccess && data) || isLoginSuccess) && <SuccessMessage text={"success!"}/>}
            {isLoginError && <ErrorMessage text={loginError?.data?.message}/>}
            {(isLoginLoading|| isLoading) && "Loading..."}
          </div>
        </AuthForm> 
      }
    </>
  )
}