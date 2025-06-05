import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RandomMealState } from "../../types/MealType";

export const fetchRandomMeal = createAsyncThunk(
  "meal/fetchRandomMeal",
  async () => {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    return response.data.meals[0];
  }
);

const initialState: RandomMealState = {
  meal: null,
  status: "idle",
  error: null,
};

const randomMealSlice = createSlice({
  name: "randomMeal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomMeal.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRandomMeal.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.meal = action.payload || null;
      })
      .addCase(fetchRandomMeal.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error?.message || "Failed to fetch meals";
      });
  },
});

export default randomMealSlice.reducer;
