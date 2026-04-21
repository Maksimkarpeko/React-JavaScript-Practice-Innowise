import { Button } from "../Button/Button"
import style from "./headerActionStyle.module.css"
export const HeaderAction = ({isAuth = false}) => {
  return(
    <>
      {
        isAuth ? "": (
          <div className={style.auth}>
            <Button size="medium" them="primary">
              Register
            </Button>
            <Button size="medium" them="secondary" >
              Login
            </Button>
          </div>
        )
      }
    </>
  )
}