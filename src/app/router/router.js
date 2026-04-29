import { createBrowserRouter } from 'react-router';
import { RouterPath } from '@shared/constants';
import { HomePage } from '@pages/home';
import { Error } from '@pages/error';
import { Layout } from '@app/components';
import { AuthPage } from '@pages/auth';
import { UsersPage } from '@pages/users';
import { UserProfilePage } from '@modules/users';
import { DashboardsPage } from '@pages/dashboards';

export const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: RouterPath.dashboards,
        element: <DashboardsPage />,
      },
      {
        path: RouterPath.users,
        element: <UsersPage />,
      },
      {
        path: RouterPath.userProfile,
        element: <UserProfilePage />,
      },
      {
        path: RouterPath.register,
        element: <AuthPage />,
      },
      {
        path: RouterPath.login,
        element: <AuthPage />,
      },
    ],
    errorElement: <Error />,
  },
]);
