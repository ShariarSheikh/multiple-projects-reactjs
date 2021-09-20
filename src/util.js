import React from "react";
import { Circle, Popup } from "react-leaflet";
import { useDispatch } from "react-redux";
import { addToCart, decreaseItem } from "./redux/shoppingCart/cartSlice";

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
export const circleOnMap = (data, casesType = "cases") => {
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
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
  ));
};

//shopping cart increment and decrement components
export const IncDec = ({ cartItems }) => {
  const dispatch = useDispatch();

  //increment quantity of items
  const increment = (cartItem) => {
    dispatch(addToCart(cartItem))
  };

  //decrement quantity of items
  const decrement = (cartItem) => {
    dispatch(decreaseItem(cartItem));
  };

  return (
    <div className="flex items-center border border-gray-300 h-10 justify-between mx-5">
      <div
        onClick={() => decrement(cartItems)}
        className="h-full w-7 bg-gray-100 flex items-center justify-center cursor-pointer text-2xl"
      >
        -
      </div>
      <div className="relative w-10 h-full flex justify-center items-center">
        <div className="absolute">{cartItems.cartQuantity}</div>
      </div>
      <div
        onClick={() => increment(cartItems)}
        className="h-full w-7 bg-gray-100 flex items-center justify-center cursor-pointer text-2xl"
      >
        +
      </div>
    </div>
  );
};
