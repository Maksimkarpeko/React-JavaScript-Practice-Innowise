import { Outlet } from "react-router";
import clsx from "clsx";
import style from "./LayoutStyle.module.css";
import { Header } from "../header/Header";


export const Layout = ({ className }) => {
  return (
    <>
      <Header />
      <main className={clsx(style.main,className)}>
        {<Outlet />}
      </main>
    </>
  );
};
