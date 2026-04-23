import clsx from "clsx";
import style from './ButtonStyle.module';

export const Button = ({variant,size,children, onClick}) => {
  const variants = clsx({
    [style.primary]: variant === "primary",
    [style.secondary]: variant === "secondary",
  })
  
  const sizes = clsx({
    [style.small]: size === "small",
    [style.medium]: size === "medium",
    [style.large]: size === "large",
  })
  

  return (
    <button className={clsx(style.base,variants,sizes)} onClick={onClick}>
      {children}
    </button>
  )
}