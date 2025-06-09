import mongoose from "mongoose";
import { dietTypeNames } from "../types/dietType.js";
import { allergensNames } from "../types/allergens.js";
import { dislikeIngredientNames } from "../types/dislikeIngrident.js";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },

    birthDate: { type: Date, required: true },
    password: { type: String, required: true },
    dietType: { type: String, required: true, enum: dietTypeNames },
    allergens: { type: [String], required: true, enum: allergensNames },
    dislikeIngredients: {
      type: [String],
      required: true,
      enum: dislikeIngredientNames,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
