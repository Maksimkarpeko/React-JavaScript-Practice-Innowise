import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
import { RouterPath } from "@shared/constants/routerPath.js";
import { HomePage } from "@pages/home/HomePage.jsx";
import { Error } from "@pages/error/Error.jsx";
import { DevelopersPage } from "@pages/developers/DevelopersPage";
import { Layout } from "@shared/components/layout/Layout.jsx";
import "./index.css";
import { AuthPage } from "./modules/auth/AuthPage";
import { store } from "./app/redux/store";

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
        path: RouterPath.developers,
        element: <DevelopersPage />,
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
