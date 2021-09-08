import { MapContainer, TileLayer } from "react-leaflet";

const CovidMap = ({ center, zoom }) => {
 console.log(center,zoom);
  return (
    <div className="w-full map-h relative overflow-hidden z-30">
      <MapContainer
        center={center}
        zoom={zoom}
        className="relative h-full"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default CovidMap;
