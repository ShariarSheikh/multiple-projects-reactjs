import { useEffect, useState } from "react";
import ReactMapGL from "react-map-gl";

const CovidMap = ({ zoom, lat, long }) => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 6,
  });

  useEffect(() => {
    if (lat && long) {
      setViewport({ latitude: lat, longitude: long, zoom: zoom });
    }
  }, [lat, long]);

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/shariardev/cksog2j83cw4117pdf890gl2j"
      mapboxApiAccessToken={
        process.env.REACT_APP_VERCEL_MAP_API_KEY 
      }
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      ;
    </ReactMapGL>
  );
};

export default CovidMap;
