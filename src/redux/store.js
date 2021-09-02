import { configureStore } from "@reduxjs/toolkit";
import addToCart from "./addToCart/addToCart";

export const store = configureStore({
  reducer: {
    cart: addToCart,
  },
});
