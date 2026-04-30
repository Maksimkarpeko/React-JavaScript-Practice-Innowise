import { Outlet } from 'react-router';
import clsx from 'clsx';
import { Header } from '../header/Header';
import style from './LayoutStyle.module.css';

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
