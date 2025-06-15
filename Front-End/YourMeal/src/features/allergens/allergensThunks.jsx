import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllergens } from "../../api/registerAPI";

export const getAllergens = createAsyncThunk(
  "allergens/getAllergens",
  async (_, thunkAPI) => {
    try {
      const response = await fetchAllergens();

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "unknown error");
    }
  }
);
