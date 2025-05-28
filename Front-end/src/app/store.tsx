// store.ts (store dosyan)
// export edilen dispatch tipi
import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "../features/meals/mealsSlice";

export const store = configureStore({
  reducer: {
    meals: mealReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
