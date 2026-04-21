import style from "../HeaderStyle.module.css";

import { Button } from "@shared/Button/Button";

import { RouterPath } from "@constants/routerPath";

export const HeaderAction = ({isAuth = false}) => {
  return(
    <>
      {
        isAuth ? "PROFILE": (
          <div className={style.auth}>
            <Button size="medium" variant="primary" isLink to={RouterPath.register}>
              Register
            </Button>
            <Button size="medium" variant="secondary" isLink to={RouterPath.login}>
              Login
            </Button>
          </div>
        )
      }
    </>
  )
}