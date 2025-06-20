import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchMealByCategory,
  fetchMealById,
  fetchMeals,
} from "../../api/mealsAPI";

export const getMeals = createAsyncThunk(
  "meals/getMeals",
  async (_, thunkAPI) => {
    try {
      const response = await fetchMeals();
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "unknown error");
    }
  }
);

export const getMealById = createAsyncThunk(
  "meals/getMealById",
  async (id, thunkAPI) => {
    try {
      const response = await fetchMealById(id);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response?.data || "unknown error");
    }
  }
);

export const getMealByCategory = createAsyncThunk(
  "meals/getMealsByCategory",
  async (category, thunkAPI) => {
    try {
      const response = await fetchMealByCategory(category);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "unknown error");
    }
  }
);
