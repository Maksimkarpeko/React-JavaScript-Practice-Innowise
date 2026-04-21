import clsx from "clsx"
import style from './buttonStyle.module'
import { Link } from "react-router"
export const Button = ({them,size,children,isLink,link}) => {
  const themes = clsx({
    [style.primary]: them === "primary",
    [style.secondary]: them === "secondary",
  })
  
  const sizes = clsx({
    [style.small]: size === "small",
    [style.medium]: size === "medium",
    [style.large]: size === "large",
  })
  
  return (
    <>
      {
      isLink ? 
        <Link to={link}>
          <button className={clsx(style.base,themes,sizes)}>
            {children}
          </button>
        </Link> :         
        <button className={clsx(style.base,themes,sizes)}>
          {children}
        </button>
      }
    </>
  )
}