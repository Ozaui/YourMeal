import { createSlice } from "@reduxjs/toolkit";
import { getMealByCategory, getMealById, getMeals } from "./meals/mealsThunks";

const initialState = {
  meals: [],
  mealDetail: null,
  filteredMeals: [],
  loading: false,
  error: null,
};

const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Tüm yemekleri çek
      .addCase(getMeals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMeals.fulfilled, (state, action) => {
        state.loading = false;
        state.meals = action.payload;
      })
      .addCase(getMeals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "unknown error";
      })

      // Tek yemek detayı
      .addCase(getMealById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMealById.fulfilled, (state, action) => {
        state.loading = false;
        state.mealDetail = action.payload;
      })
      .addCase(getMealById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "unknown error";
      })

      // Kategoriye göre yemekler
      .addCase(getMealByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMealByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.filteredMeals = action.payload;
      })
      .addCase(getMealByCategory.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.error = action.payload || "unknown error";
      });
  },
});

export default mealsSlice.reducer;
