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
    selectedDietType: null,
  },
  allergens: {
    selectedAllergens: [],
  },
  dislikeIngredient: {
    selecteddislikeIngredient: null,
  },
};

const registeration = createSlice({
  name: "registeration",
  initialState,
  reducers: {
    setPersonalInfoForRegisteration: (state, action) => {
      console.log("reducera gelen payload:", action.payload);
      state.personalInfo = action.payload;
      console.log("state.personalInfo", state.personalInfo);
    },

    setDietTypeForRegisteration: (state, action) => {
      state.dietInfo = { ...state.dietInfo, ...action.payload };
    },
    setAllergensForRegisteration: (state, action) => {
      state.allergens = { ...state.allergens, ...action.payload };
    },
    setDislikeIngredientForRegisteration: (state, action) => {
      state.dislikeIngredient = {
        ...state.dislikeIngredient,
        ...action.payload,
      };
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
