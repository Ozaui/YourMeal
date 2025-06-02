import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "../features/meals/mealsSlice";
import randomMealReducer from "../features/meals/randomMealSlice";

export const store = configureStore({
  reducer: {
    meals: mealReducer,
    randomMeal: randomMealReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
