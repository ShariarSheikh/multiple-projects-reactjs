import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const addToCart = createSlice({
  name: "add cart",
  initialState,

  reducers: {
    addToCart: (state, actions) => {
      const item = actions.payload;
      state.cart = item;
      // const existItems = state.cart.find((x) => x.product === item.product);
      // if (existItems) {
      //   state.cart = [
      //     ...state,
      //     state.cart.map((x) => (x.product === existItems.product ? item : x)),
      //   ];
      // } else {
      //   state.cart = [...state, ...state.cart, item];
      // }
    },
  },
});

export const { addProduct } = addToCart.actions;
export const selectCart = (state) => state.cart.cart;
export default addToCart.reducer;
