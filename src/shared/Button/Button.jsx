import clsx from "clsx"
import style from './buttonStyle.module'
export const Button = ({them,size,children}) => {
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
    <button className={clsx(style.base,themes,sizes)}>
      {children}
    </button>
  )
}