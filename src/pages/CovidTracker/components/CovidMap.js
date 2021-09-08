import { MapContainer, TileLayer } from "react-leaflet";

const CovidMap = ({ center, zoom }) => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default CovidMap;
