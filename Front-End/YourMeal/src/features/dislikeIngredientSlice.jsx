import { createSlice } from "@reduxjs/toolkit";
import { getDislikeIngredients } from "./dislikeIngredientsThunks/dislikeIngredientsThunks";

const initialState = {
  dislikeIngredients: [],
  selectedDislikeIngredients: [],
  loading: false,
  error: null,
};

const dislikeIngredientsSlice = createSlice({
  name: "dislikeIngredients",
  initialState,
  reducers: {
    selectYourDislikeIngredients(state, action) {
      const dislikeIngredients = action.payload;
      if (state.selectedDislikeIngredients.includes(dislikeIngredients)) {
        state.selectedDislikeIngredients =
          state.selectedDislikeIngredients.filter(
            (item) => item !== dislikeIngredients
          );
      } else {
        state.selectedDislikeIngredients.push(dislikeIngredients);
      }
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
        console.log(
          "dislikeIngredient fetched from backend succesfully:",
          action.payload.dislikeIngredientNames
        );
      })
      .addCase(getDislikeIngredients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { selectYourDislikeIngredients } = dislikeIngredientsSlice.actions;
export default dislikeIngredientsSlice.reducer;
