import { createBrowserRouter } from "react-router";
import { RouterPath } from "@shared/constants";
import { HomePage } from "@pages/home";
import { Error } from "@pages/error";
import { Layout } from "@app/components";
import { AuthPage } from "@pages/authPage";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: RouterPath.dashboards,
        element: <>Dashboards Page</>,
      },
      {
        path: RouterPath.document,
        element: <>Document Page</>,
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
