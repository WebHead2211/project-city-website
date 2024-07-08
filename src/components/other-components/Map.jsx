import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

export default function Map({ loc, name, scroll = false }) {
  return (
    <MapContainer
      center={loc}
      zoom={17}
      scrollWheelZoom={scroll}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={loc}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
}
