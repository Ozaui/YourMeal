import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDislikeIngredients } from "../../api/registerAPI";

export const getDislikeIngredients = createAsyncThunk(
  "dislikeIngredients/getDislikeIngredients",
  async (_, thunkAPI) => {
    try {
      const response = await fetchDislikeIngredients();

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "unknown error");
    }
  }
);
