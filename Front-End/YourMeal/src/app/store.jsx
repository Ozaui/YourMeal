import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/registerSlice.jsx";

const store = configureStore({
  reducer: {
    diet: registerReducer,
  },
});
export default store;
