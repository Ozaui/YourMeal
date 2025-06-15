import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDietTypes } from "../../api/registerAPI";

export const getDietTypes = createAsyncThunk(
  "diet/getDietTypes",
  async (_, thunkAPI) => {
    try {
      const response = await fetchDietTypes();

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "unknown error");
    }
  }
);
