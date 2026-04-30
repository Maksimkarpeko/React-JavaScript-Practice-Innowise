import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import style from './LeafletMap.module.css';

export const LeafletMap = ({coords}) => {
  const position = coords || [52.4101, 30.9318];

  return (
    <div className={style.mapContainer}>
      <MapContainer 
        center={position} 
        zoom={13} 
        scrollWheelZoom={false}
        className={style.leafletMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            User Location
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}