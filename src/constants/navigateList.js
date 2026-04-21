import home from "../assets/Home.png";
import Grid from "../assets/Grid.png";
import Document from "../assets/Bill.png";
import { Links } from "./links";

export const navigateList = [
  { src: home, alt: "Home", text: "Home", link: Links.home },
  { src: Grid, alt: "Tables", text: "Tables", link: Links.tables },
  {
    src: Document,
    alt: "Document",
    text: "Documentation",
    link: Links.document,
  },
];
