import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const openCode = createSlice({
  name: "open code component",
  initialState,
  reducers: {
    codeShow: (state) => {
      return !state;
    },
  },
});

export const { codeShow } = openCode.actions;

export const selectCodeShow = (state) => state.isOpenCode;

export default openCode.reducer;
