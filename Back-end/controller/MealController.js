import Meal from "../models/Meals.js";

export const getMeals = async (req, res) => {
  try {
    const meals = await Meal.find();
    res.status(200).json(meals);
  } catch (error) {
    console.error("Yemekleri çekerken hata:", error);
    res.status(500).json({ message: "Veriler alınamadı" });
  }
};
