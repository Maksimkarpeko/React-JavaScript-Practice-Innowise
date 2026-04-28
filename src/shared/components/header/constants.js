import home from "@shared/assets/Home.png";
import Grid from "@shared/assets/Grid.png";
import Document from "@shared/assets/document.png";
import { RouterPath } from "@shared/constants/routerPath";

export const navigateList = [
  {
    src: home,
    alt: "Home",
    text: "Home",
    link: RouterPath.home,
  },
  {
    src: Grid,
    alt: "Dashboards",
    text: "Dashboards",
    link: RouterPath.dashboards,
  },
  {
    src: Document,
    alt: "Developers",
    text: "Developers",
    link: RouterPath.developers,
  },
];
