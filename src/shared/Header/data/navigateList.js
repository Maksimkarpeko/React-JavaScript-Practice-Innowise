import home from "../../../assets/Home.png";
import Grid from "../../../assets/Grid.png";
import Document from "../../../assets/document.png";

import { RouterPath } from "../../../constants/routerPath";

export const navigateList = [
  { src: home, alt: "Home", text: "Home", link: RouterPath.home },
  { src: Grid, alt: "Tables", text: "Tables", link: RouterPath.tables },
  {
    src: Document,
    alt: "Document",
    text: "Documentation",
    link: RouterPath.document,
  }
];
