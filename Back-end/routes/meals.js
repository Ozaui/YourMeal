import express from "express";
import { getMeals } from "../controller/MealController.js";

const router = express.Router();

router.get("/meals", getMeals);
export default router;
