import user from '@shared/assets/user.png'
import { Button } from "../button/Button"
import style from './Profile.module.css'

export const Profile = ({username,onClick}) => {
  return (
    <div className={style.profileContainer}>
      <img src={user} alt="profile image"/>
      <p className={style.profileText}>{username}</p>
      <Button 
        variant={"primary"} 
        name={"logOut"} 
        size={"medium"} 
        ariaLabel={"Log out"} 
        onClick={onClick}
      >
        Log out
      </Button>
    </div>
  )
}