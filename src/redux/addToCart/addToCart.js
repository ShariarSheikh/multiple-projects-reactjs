import { createSlice } from "@reduxjs/toolkit";
import { cartData } from "../../pages/ShoppingCart/components/cartData";

//check the item id match any item on database then add this item to cart
const setNewItem = (id, quantity, state) => {
  const findItem = cartData.find((pd) => pd.id === parseInt(id));
  if (findItem) {
    const item = {
      id: findItem.id,
      img: findItem.img,
      price: findItem.price,
      title: findItem.title,
      quantity: parseInt(quantity),
    };
    state.cart.push(item);
  }
};

const initialState = {
  cart: [],
};

export const addToCart = createSlice({
  name: "add cart",
  initialState,

  reducers: {
    addProduct: (state, actions) => {
      const id = actions.payload.id;
      const quantity = actions.payload.quantity;
      //check if any item not exist on cart then run this condition
      if (state.cart.length <= 0) {
        setNewItem(id, quantity, state);
      }
      //check if any item exist on cart then run this condition
      else if (state.cart.length >= 1) {
        //if the same item already exists on cart then just update the quantity 
        const findItem = state.cart.find((pd) => pd.id === parseInt(id));
        //update the quantity 
        if (findItem) {
          findItem.quantity = findItem.quantity += parseInt(quantity);
        } else {
          setNewItem(id, quantity, state);
        }
      }
    },
    //increase quantity of item
    incrementQuantity: (state, actions) => {
      const findItem = state.cart.find(
        (item) => item.pdId === actions.payload.id
      );
      if (findItem) {
        findItem.quantity = +1;
      }
    },
  },
});

export const { addProduct, incrementQuantity } = addToCart.actions;
export const selectCart = (state) => state.cart.cart;
export default addToCart.reducer;
