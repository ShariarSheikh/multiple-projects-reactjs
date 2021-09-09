import React from "react";
import numeral from "numeral";
import {Circle,Popup} from 'react-leaflet'

//map circle draw
const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    rgb: "rgb(204,16,52)",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    rgb: "rgb(125,215,29)",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    rgb: "rgb(251,58,67)",
    multiplier: 2000,
  },
};
 export const circleOnMap=(data,casesType = "cases")=>{
   data.map(country=> (
     <Circle center={[country.countryInfo.lat,country.countryInfo.long]}
     fillOpacity={0.4}
     color={casesTypeColors[casesType].hex}
     fillColor={casesTypeColors[casesType].hex}
     radius={
       Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
     }
     >
       <Popup>
         <h1>aksdfak pop up</h1>
       </Popup>
     </Circle>
   ))
 }

