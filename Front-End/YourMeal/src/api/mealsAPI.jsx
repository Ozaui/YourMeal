import axios from "axios";

const BASE_URL = "http://localhost:3000/api/meals";

export const fetchMeals = async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
};

export const fetchMealById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

export const fetchMealByCategory = async (category) => {
  const response = await axios.get(`${BASE_URL}/category?type=${category}`);
  return response.data;
};
