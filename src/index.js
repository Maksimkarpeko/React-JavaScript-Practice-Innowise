import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router";
import { Links } from "./constants/links.js";
import { StartPage } from "./pages/Start";
import { Error } from "./pages/Error";

const router = createBrowserRouter([
  { path: Links.startScreen, element: <StartPage />, errorElement: <Error /> },
  { path: Links.home, element: <>Home Page</>, errorElement: <Error /> },
  { path: Links.tables, element: <>Tables Page</>, errorElement: <Error /> },
  {
    path: Links.document,
    element: <>Document Page</>,
    errorElement: <Error />,
  },
  {
    path: Links.register,
    element: <>Register Page</>,
    errorElement: <Error />,
  },
  { path: Links.login, element: <>Login Page</>, errorElement: <Error /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
