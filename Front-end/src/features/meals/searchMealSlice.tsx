import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SeachMeal } from "../../types/MealType";

export const fetchSearchMeal = createAsyncThunk(
  "seachMeal/fetchMeals",
  async (searchString: string) => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchString}`
    );
    return response.data.meals;
  }
);

const initialState: SeachMeal = {
  meals: [],
  status: "idle",
  error: null,
  searchString: "",
};

const mealSlice = createSlice({
  name: "searchMeal",
  initialState,
  reducers: {
    setSearchString: (state, action) => {
      state.searchString = action.payload;
    },
    setMeals: (state, action) => {
      state.meals = action.payload;
      console.log("setMeals" + JSON.stringify(state.meals));
    },
    clearMeals: (state) => {
      state.meals = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchMeal.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearchMeal.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.meals = action.payload || [];
      })
      .addCase(fetchSearchMeal.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error?.message || "Failed to fetch meals";
      });
  },
});

export const { setSearchString, setMeals, clearMeals } = mealSlice.actions;

export default mealSlice.reducer;
