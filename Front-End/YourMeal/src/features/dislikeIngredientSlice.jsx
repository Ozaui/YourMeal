import { createSlice } from "@reduxjs/toolkit";
import { getDislikeIngredients } from "./dislikeIngredientsThunks/dislikeIngredientsThunks";

const initialState = {
  dislikeIngredients: [],
  selectedDislikeIngredients: [],
  loading: false,
  error: null,
};

const dislikeIngredientsSlice = createSlice({
  name: "dislikeIngredient",
  initialState,
  reducers: {
    selectYourDislikeIngredients(state, action) {
      const item = action.payload;
      console.log("Reducer'a gelen:", item);
      if (state.selectedDislikeIngredients.includes(item)) {
        state.selectedDislikeIngredients =
          state.selectedDislikeIngredients.filter((i) => i !== item);
      } else {
        state.selectedDislikeIngredients.push(item);
      }
      console.log("Yeni state:", state.selectedDislikeIngredients);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDislikeIngredients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDislikeIngredients.fulfilled, (state, action) => {
        state.loading = false;
        state.dislikeIngredients = action.payload.dislikeIngredientNames;
      })
      .addCase(getDislikeIngredients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { selectYourDislikeIngredients } = dislikeIngredientsSlice.actions;
export default dislikeIngredientsSlice.reducer;
