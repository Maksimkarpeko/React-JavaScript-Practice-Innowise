import { Link } from 'react-router'
import { Button } from '@shared/ui/button/Button'
import style from './AuthStyle.module.css'

export const AuthForm = ({
  handelSubmit,
  title,
  subTitle,
  children,
  buttonText,
  textLink,
  to,
  footerText,
}) => {
  return (
    <div className={style.authContainer}>
      <form action="#" className={style.authForm}>
        <h1 className={style.authFormTitle}>{title}</h1>
        <p className={style.authFormSubTitle}>{subTitle}</p>
        {children}
        <p className={style.authParagraph}>
          {footerText} <span></span>
          <Link 
          to={to}  
          className={style.authLink}
          >
            {textLink}
          </Link>
        </p>
        <Button 
          type="submit"
          variant="primary" 
          ariaLabel={"Submit and navigate to dashboard"}
          size="medium"
          name="password"
          onClick={handelSubmit}
          className={style.addButton}
        >
          <span className={style.authFormButtonText}>{buttonText}</span>
        </Button>
      </form>
    </div>
  )
}