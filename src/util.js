import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, decreaseItem } from "./redux/shoppingCart/cartSlice";

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
