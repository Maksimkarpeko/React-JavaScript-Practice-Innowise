import { Links } from "../../constants/links"
import { Button } from "../Button/Button"
import style from "./headerActionStyle.module.css"
export const HeaderAction = ({isAuth = false}) => {
  return(
    <>
      {
        isAuth ? "": (
          <div className={style.auth}>
            <Button size="medium" them="primary" isLink link={Links.register}>
              Register
            </Button>
            <Button size="medium" them="secondary" isLink link={Links.login}>
              Login
            </Button>
          </div>
        )
      }
    </>
  )
}