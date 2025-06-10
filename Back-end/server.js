import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import allergenRoutes from "./routes/register/allergenRoute.js";
import dietTypeRoutes from "./routes/register/dietTypeRoute.js";
import dislikeIngredientRoutes from "./routes/register/dislikeIngredientRoute.js";

const PORT = process.env.PORT || 3000;

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.use("/api/auth", authRoutes);
app.use("/api", allergenRoutes);
app.use("/api", dietTypeRoutes);
app.use("/api", dislikeIngredientRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
