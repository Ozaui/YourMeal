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

export const getMealById = async (req, res) => {
  const { id } = req.params;

  try {
    const meal = await Meal.findOne({ id });

    if (!meal) {
      return res.status(404).json({ message: "Yemek bulunamadı" });
    }

    res.status(200).json(meal);
  } catch (error) {
    console.error("Yemek detayı alınırken hata:", error);
    res.status(500).json({ message: "Yemek bilgisi alınamadı" });
  }
};

export const getMealsByCategory = async (req, res) => {
  const { type } = req.query;

  try {
    const meals = await Meal.find({ dietTypes: type });
    res.status(200).json(meals);
  } catch (error) {
    console.error("Kategoriye göre arama hatası:", error);
    res.status(500).json({ message: "Kategoriye göre veriler alınamadı" });
  }
};
