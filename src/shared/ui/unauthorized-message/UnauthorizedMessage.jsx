import style from './UnauthorizedMessage.module.css';

export const UnauthorizedMessage = ({text}) => {
  return (
    <div className={style.unauthorizedMessageContainer}>
      {text}
    </div>
  )
}