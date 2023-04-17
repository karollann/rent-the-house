import styles from "./map.module.scss";
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import { useTranslation } from "next-i18next";

export const Map = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.mapContainer} id="location">
      <h2 className={styles.mapContainer__title}>{t("map.youWillStayHere")}</h2>
      <h3 className={styles.mapContainer__location}>{t("map.location")}</h3>
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
          pathOptions={{ color: "black", weight: 2 }}
          radius={20}
        >
          <Popup>{t("youWillStayHere")}</Popup>
        </CircleMarker>
      </MapContainer>
    </div>
  );
};
