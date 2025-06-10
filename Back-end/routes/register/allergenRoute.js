import express from "express";
import { allergensNames } from "../../types/allergens.js";

const router = express.Router();

router.get("/register/allergens", (req, res) => {
  res.status(200).json({ allergensNames });
});

export default router;
