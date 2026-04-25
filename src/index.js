import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { RouterPath } from "@shared/constants/routerPath.js";
import { HomePage } from "@pages/home/HomePage.jsx";
import { Error } from "@pages/error/Error.jsx";
import { Layout } from "@shared/components/layout/Layout.jsx";
import "./index.css";
import { AuthPage } from "./modules/auth/AuthPage";
const router = createBrowserRouter([
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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
