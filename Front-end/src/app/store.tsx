import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "../features/meals/mealsSlice";
import randomMealReducer from "../features/meals/randomMealSlice";
import searchMealReducer from "../features/meals/searchMealSlice";

export const store = configureStore({
  reducer: {
    meals: mealReducer,
    randomMeal: randomMealReducer,
    searchMeal: searchMealReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
