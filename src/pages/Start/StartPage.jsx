import { Button } from "../../shared/Button/Button"
import { Layout } from "../../shared/Layout/Layout"
import logo from '../../assets/LogoXL.svg'
import style from "./startStyle.module.css"
import { Links } from "../../constants/links"

export const StartPage = () => {
  return (
    <Layout className={style.container}>
        <img src={logo} alt="logo" width={"5%"} className={style.img}/>
        <h1 className={style.title}>Welcome to the HR WebSite</h1>
        <p className={style.text}>
          Monitor workforce engagement and track key personnel metrics across all departments.
        </p>   
        <div className={style.buttonContainer}> 
          <Button size="medium" them="primary" isLink  link={Links.register}>
            Register
          </Button>
          <Button size="medium" them="secondary" isLink link={Links.login}>
            Login
          </Button>
        </div>
        
    </Layout>
  )
}