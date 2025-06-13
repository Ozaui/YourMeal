import { createSlice } from "@reduxjs/toolkit";
import { getAllergens } from "./allergens/allergensThunks";

const initialState = {
  allergens: [],
  selectedAllergens: [],
  loading: false,
  error: null,
};

const allergensSlice = createSlice({
  name: "allergens",
  initialState,
  reducers: {
    selectYourAllergens(state, action) {
      const allergen = action.payload;
      if (state.selectedAllergens.includes(allergen)) {
        state.selectedAllergens = state.selectedAllergens.filter(
          (item) => item !== allergen
        );
      } else {
        state.selectedAllergens.push(allergen);
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllergens.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllergens.fulfilled, (state, action) => {
        state.loading = false;
        state.allergens = action.payload.allergensNames;
        console.log(
          "allergens fetched from backend: ",
          action.payload.allergensNames
        );
      })
      .addCase(getAllergens.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { selectYourAllergens } = allergensSlice.actions;
export default allergensSlice.reducer;
