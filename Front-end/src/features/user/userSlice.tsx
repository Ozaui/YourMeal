import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { UserState, UserType } from "../../types/UserType";

const URL = "http://localhost:3000/api";

export const registerUser = createAsyncThunk(
  "user/register",
  async (userData: UserType) => {
    const response = await axios.post(`${URL}/auth/register`, userData);
    return response.data;
  }
);

const initialState: UserState = {
  user: null,
  status: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeded";
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "something went wrong";
      });
  },
});

export default userSlice.reducer;
