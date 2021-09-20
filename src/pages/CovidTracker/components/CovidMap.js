import { MapContainer, TileLayer } from "react-leaflet";
import { circleOnMap } from "../../../util";

const CovidMap = ({ countries,casesType,center, zoom }) => {

  return (
    <div className="w-full map-h relative overflow-hidden z-30">
      <MapContainer center={center} zoom={3} className="relative h-full">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          {circleOnMap(countries,casesType)}
      </MapContainer>
    </div>
  );
};

export default CovidMap;