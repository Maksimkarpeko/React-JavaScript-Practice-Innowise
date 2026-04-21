import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css";

import { RouterPath } from "@constants/routerPath.js";
import { HomePage } from "@pages/home/index.js";
import { Error } from "@pages/error/index.js";
import { Layout } from "@shared/Layout/Layout.jsx";

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: RouterPath.tables,
        element: <>Tables Page</>,
      },
      {
        path: RouterPath.document,
        element: <>Document Page</>,
      },
      {
        path: RouterPath.register,
        element: <>Register Page</>,
      },
      {
        path: RouterPath.login,
        element: <>Login Page</>,
      }
    ],
    errorElement: <Error />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
