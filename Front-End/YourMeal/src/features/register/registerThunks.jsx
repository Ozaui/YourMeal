import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (state, { rejectWithValue }) => {
    try {
      const userData = {
        name: state.personalInfo.name,
        lastName: state.personalInfo.lastName,
        email: state.personalInfo.email,
        phone: state.personalInfo.phone,
        birthDate: state.personalInfo.birthDate,
        password: state.personalInfo.password,
        dietType: state.dietInfo.selectedDietType,
        allergens: state.allergens.selectedAllergens,
        dislikeIngredients: state.dislikeIngredient.selectedDislikeIngredient,
      };

      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        userData
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "error!!!");
    }
  }
);
