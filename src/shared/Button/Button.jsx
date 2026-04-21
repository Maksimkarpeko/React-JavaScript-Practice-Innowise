import { Link } from "react-router";
import clsx from "clsx";

import style from './ButtonStyle.module';

export const Button = ({variant,size,children,isLink,to}) => {
  const variants = clsx({
    [style.primary]: variant === "primary",
    [style.secondary]: variant === "secondary",
  })
  
  const sizes = clsx({
    [style.small]: size === "small",
    [style.medium]: size === "medium",
    [style.large]: size === "large",
  })
  
  if (isLink) {
    return (
      <Link to={to} className={clsx(style.base,variants,sizes)}>
        {children}
      </Link>
    )
  }


  return (
    <button className={clsx(style.base,variants,sizes)}>
      {children}
    </button>
  )
}