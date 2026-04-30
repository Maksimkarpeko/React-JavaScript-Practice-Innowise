import { createRoot } from 'react-dom/client';
import 'leaflet/dist/leaflet.css';
import './index.css';
import { App } from './app/app';

createRoot(document.getElementById('root')).render(<App />);
