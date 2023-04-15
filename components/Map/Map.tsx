import styles from "./map.module.scss";
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";

export const Map = () => {
  const redOptions = { color: "red" };

  return (
    <div className={styles.mapContainer} id="location">
      <h2 className={styles.mapContainer__title}>You will stay here!</h2>
      <h3 className={styles.mapContainer__location}>Giby, Podlaskie, Poland</h3>
      <MapContainer
        center={[54.03692559547879, 23.32998828469203]}
        zoom={14}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CircleMarker
          center={[54.03692559547879, 23.32998828469203]}
          pathOptions={redOptions}
          radius={20}
        >
          <Popup>You'll stay here!</Popup>
        </CircleMarker>
      </MapContainer>
    </div>
  );
};
