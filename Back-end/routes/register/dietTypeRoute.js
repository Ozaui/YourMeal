import express from "express";
const router = express.Router();
import { dietTypes } from "../../types/dietType.js";

router.get("/register/dietTypes", (req, res) => {
  res.status(200).json({ dietTypes });
});

export default router;
