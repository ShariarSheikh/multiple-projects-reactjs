import { configureStore } from "@reduxjs/toolkit";
import addToCart from "./addToCart/addToCart";
import loginOpen from "./loginOpen/loginOpen";

export const store = configureStore({
  reducer: {
    cart: addToCart,
    loginBox: loginOpen,
  },
});
