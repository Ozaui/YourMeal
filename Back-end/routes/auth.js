import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Auth route is working");
});

router.post("/register", async (req, res) => {
  try {
    const {
      name,
      lastName,
      email,
      phone,
      birthDate,
      password,
      dietType,
      allergens,
      dislikeIngredients,
    } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      lastName,
      email,
      phone,
      birthDate,
      password: hashedPassword,
      dietType,
      allergens,
      dislikeIngredients,
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
