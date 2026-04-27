import style from "./ErrorStyle.module.css"

export const ErrorMessage = ({text}) =>{
  return <p className={style.errorMessage}>{text}</p>
}