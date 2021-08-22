import { configureStore } from "@reduxjs/toolkit";
import openCode from "./openCode/openCode";

export const store = configureStore({
  reducer: {
    isOpenCode: openCode,
  },
});
