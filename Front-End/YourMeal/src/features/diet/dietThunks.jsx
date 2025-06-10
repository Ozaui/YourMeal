import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDietTypes } from "../../api/registerAPI";

export const getDietTypes = createAsyncThunk(
  "diet/getDietTypes",
  async (_, thunkAPI) => {
    try {
      const response = await fetchDietTypes();
      console.log("Diet types fetched successfully:", response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "unknown error");
    }
  }
);
