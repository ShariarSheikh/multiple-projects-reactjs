import { configureStore } from "@reduxjs/toolkit";
import loginOpen from "./loginOpen/loginOpen";
import cartReducer, { getTotals } from "./shoppingCart/cartSlice";


const store = configureStore({
  reducer: {
    //shopping cart state
    cart: cartReducer,
    //login box toggle
    loginBox: loginOpen,
  },
});

store.dispatch(getTotals());

export default store;
