import axios from "axios";

const BASE_URL = "http://localhost:3000/api/register";

export const fetchDietTypes = async () => {
  const response = await axios.get(`${BASE_URL}/dietTypes`);
  return response.data;
};

export const fetchAllergens = async () => {
  const response = await axios.get(`${BASE_URL}/allergens`);
  return response.data;
};

export const fetchDislikeIngredients = async () => {
  const response = await axios.get(`${BASE_URL}` / dislikeIngredients);
};
