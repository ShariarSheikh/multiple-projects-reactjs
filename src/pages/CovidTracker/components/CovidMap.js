import react, { useEffect, useState } from "react";
import ReactMapGL, { Layer, Source } from "react-map-gl";

const CovidMap = ({ zoom, lat, long }) => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 5,
  });

  useEffect(() => {
    if (lat && long) {
      setViewport({ latitude: lat, longitude: long, zoom: zoom });
    }
  }, [lat, long]);

  // const layerStyle = {
  //   id: "point",
  //   type: "circle",
  //   paint: {
  //     "circle-radius": 10,
  //     "circle-color": "#DC143C",
  //   },
  // };
  // const geojson = {
  //   type: "FeatureCollection",
  //   features: [
  //     {
  //       type: "Feature",
  //       geometry: { type: "Point", coordinates: [long, lat] },
  //     },
  //   ],
  // };

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/shariardev/ckse6urwi1dv617nuf7ttf10i"
      mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_API_KEY}
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {/* <Source id="my-data" type="geojson" data={geojson}>
        {covidCircle.map((country) => {
          <Layer {...layerStyle} />;
        })}
      </Source> */}
      ;
    </ReactMapGL>
  );
};

export default CovidMap;
