import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInfo: {
    name: null,
    lastName: null,
    email: null,
    phone: null,
    birthDate: null,
    password: null,
  },
  dietInfo: {
    selectedDietType: "normal",
  },
  allergens: {
    selectedAllergens: [],
  },
  dislikeIngredient: {
    selectedDislikeIngredient: [],
  },
};

const registeration = createSlice({
  name: "registeration",
  initialState,
  reducers: {
    setPersonalInfoForRegisteration: (state, action) => {
      state.personalInfo = action.payload;
    },

    setDietTypeForRegisteration: (state, action) => {
      state.dietInfo = { ...state.dietInfo, ...action.payload };
    },
    setAllergensForRegisteration: (state, action) => {
      state.allergens = { ...state.allergens, ...action.payload };
    },
    setDislikeIngredientForRegisteration: (state, action) => {
      state.dislikeIngredient.selectedDislikeIngredient =
        action.payload.selectedDislikeIngredient;
    },
  },
});

export const {
  setPersonalInfoForRegisteration,
  setDietTypeForRegisteration,
  setAllergensForRegisteration,
  setDislikeIngredientForRegisteration,
} = registeration.actions;
export default registeration.reducer;
