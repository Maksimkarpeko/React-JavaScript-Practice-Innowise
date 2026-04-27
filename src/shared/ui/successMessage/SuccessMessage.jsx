import style from "./SuccessMessage.module.css"

export const SuccessMessage = ({text}) => {
  return <p className={style.successMessage}>{text}</p>
}