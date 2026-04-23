import clsx from "clsx";
import style from './ButtonStyle.module';

export const Button = ({
  type = "button",
  name,
  variant,
  size,
  children,
  onClick,
  ariaLabel
}
) => {
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
    <button 
      type={type} 
      name={name} 
      className={clsx(style.base,variants,sizes)} 
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}