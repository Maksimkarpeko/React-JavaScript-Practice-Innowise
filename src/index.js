import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app/app";
import 'leaflet/dist/leaflet.css';

createRoot(document.getElementById("root")).render(<App />);
