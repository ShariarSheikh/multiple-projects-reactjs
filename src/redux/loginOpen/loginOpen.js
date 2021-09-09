import { createSlice } from "@reduxjs/toolkit";

export const loginOpen = createSlice({
  name: "login box",
  initialState: {
    loginBox: false,
  },

  reducers: {
    loginHandler: (state, actions) => {
      state.loginBox = actions.payload;
    },
  },
});

export const { loginHandler } = loginOpen.actions;

export const loginSelector = (state) => state.loginBox.loginBox;

export default loginOpen.reducer;
