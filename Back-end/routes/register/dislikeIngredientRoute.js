import express from "express";
const router = express.Router();
import { dislikeIngredientNames } from "../../types/dislikeIngrident.js";

router.get("/register/dislikeIngredients", (req, res) => {
  res.status(200).json({ dislikeIngredientNames });
});

export default router;
