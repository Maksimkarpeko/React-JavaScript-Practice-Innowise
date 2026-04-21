import clsx from "clsx";
import { Header } from "../Header/Header";
import style from "./layoutStyle.module"
export const Layout = ({ children, className }) => {
  return (
    <>
      <Header />
      <main className={clsx(style.main,className)}>{children}</main>
    </>
  );
};
