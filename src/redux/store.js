import { configureStore } from "@reduxjs/toolkit";
import loginOpen from "./loginOpen/loginOpen";
import cartReducer, { getTotals } from "./shoppingCart/cartSlice";
import { productsApi } from "./shoppingCart/productsApi";
import productsReducer, { productsFetch } from "./shoppingCart/productSlice";

const store = configureStore({
  reducer: {
    //shopping cart state
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    //login box toggle
    loginBox: loginOpen,
  },
  //middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

export default store;
