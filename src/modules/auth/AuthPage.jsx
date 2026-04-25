import { useSearchParams } from "react-router"
import { Button } from "@shared/ui/button/Button";
import style from "./AuthStyle.module.css"


export const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const authParams = searchParams.get('mode');
  const handelSubmit = (event) => {
    event.preventDefault();
    console.log('Submit');
  }
  return (
    <>
      {
        authParams === "login" ? 
        <div className={style.authContainer}>
          <form action="" className={style.authForm}>
            <h1 className={style.authFormTitle}>Login</h1>
            <p className={style.authFormSubTitle}>Log in to your account</p>
            <div>
              <p>Login</p>
              <input type="text" name="email" required className={style.input} placeholder="Your username"/>
            </div>
            <div>
              <p>Password</p>
              <input type="password" name="password" required className={style.input} placeholder="Your password"/>
            </div>
              <Button 
                variant="primary" 
                ariaLabel={"Submit and navigate to dashboard"}
                size="medium"
                name="password"
                onClick={handelSubmit}
                className = {style.addButton}
                >
                  <span className={style.authFormButtonText}>Login</span>
              </Button>
          </form>
        </div> 
        : 
        <div>
          Registration
        </div>
      }
    </>
  )
}