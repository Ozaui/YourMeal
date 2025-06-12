import { createSlice } from "@reduxjs/toolkit";
import { getDietTypes } from "./diet/dietThunks.jsx";

const initialState = {
  dietTypes: [],
  selectedDietType: null,
  loading: false,
  error: null,
};

const dietTypeSlice = createSlice({
  name: "dietType",
  initialState,
  reducers: {
    selectYourDietType(state, action) {
      state.selectedDietType = action.payload;
    },
  },
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

export const { selectYourDietType } = dietTypeSlice.actions;
export default dietTypeSlice.reducer;
