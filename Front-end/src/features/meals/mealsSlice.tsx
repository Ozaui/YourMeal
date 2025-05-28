import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MealsState } from "../../types/MealType";

export const fetchMeals = createAsyncThunk("meals/fetchMeals", async () => {
  const response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  return response.data.meals;
});

const initialState: MealsState = {
  meals: [],
  status: "idle",
  error: null,
};

const mealSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.meals = action.payload || [];
      })
      .addCase(fetchMeals.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error?.message || "Failed to fetch meals";
      });
  },
});

export default mealSlice.reducer;
