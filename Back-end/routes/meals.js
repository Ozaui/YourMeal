import express from "express";
import {
  getMeals,
  getMealById,
  getMealsByCategory,
} from "../controller/MealController.js";

const router = express.Router();

router.get("/meals", getMeals);
router.get("/meals/:id", getMealById);
router.get("/meals/category", getMealsByCategory);
export default router;
