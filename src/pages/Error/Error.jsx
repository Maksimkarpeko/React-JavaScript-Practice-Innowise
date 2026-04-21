import { Layout } from "../../shared/Layout/Layout"
import error from '../../assets/c03e7347881e6b8350eab44c1a487ac8.jpg'
import { Button } from "../../shared/Button/Button"
import style from './errorStyle.module.css'
export const Error = () => {
  return (
    <Layout className={style.container}>
      <img src={error} alt="error" className={style.img} />
      I don't know what happened
      <Button size={'medium'} them={'primary'}>
        Go to the Main page
      </Button>
    </Layout>
  )
}