import { createSlice } from "@reduxjs/toolkit";
import { getDietTypes } from "./diet/dietThunks.jsx";

const initialState = {
  dietTypes: [],
  loading: false,
  error: null,
};

const registerSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDietTypes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDietTypes.fulfilled, (state, action) => {
        state.loading = false;
        state.dietTypes = action.payload;
      })
      .addCase(getDietTypes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {} = registerSlice.actions;
export default registerSlice.reducer;
