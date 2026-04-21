import clsx from "clsx";

import style from "./LayoutStyle.module.css";

import { Header } from "../Header/Header";
import { Outlet } from "react-router";

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
