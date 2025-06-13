import { configureStore } from "@reduxjs/toolkit";
import dietTypeRegister from "../features/dietTypeSlice.jsx";
import allergensRegister from "../features/allergensSlice.jsx";

const store = configureStore({
  reducer: {
    diet: dietTypeRegister,
    allergens: allergensRegister,
  },
});
export default store;
