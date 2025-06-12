import { configureStore } from "@reduxjs/toolkit";
import dietTypeRegister from "../features/dietTypeSlice.jsx";

const store = configureStore({
  reducer: {
    diet: dietTypeRegister,
  },
});
export default store;
