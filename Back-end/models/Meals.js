import mongoose from "mongoose";

const mealSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
  },
  ingredients: {
    type: [String],
    validate: [(arr) => arr.length > 0, "En az bir malzeme girilmelidir"],
  },
  instructions: {
    type: [String],
    validate: [(arr) => arr.length > 0, "Hazırlık adımı eksik"],
  },
  dietTypes: {
    type: [String],
    default: [],
  },
  allergens: {
    type: [String],
    default: [],
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(v);
      },
      message: (props) => `${props.value} geçerli bir resim URL'si değil!`,
    },
  },
});

const Meal = mongoose.model("Meal", mealSchema);
export default Meal;
