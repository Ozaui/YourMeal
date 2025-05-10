import { MenuItem, TextField } from "@mui/material";
import { useState } from "react";

function DietTypes() {
  const dietTypes = [
    {
      name: "Vegan",
      description:
        "Excludes all animal products, including meat, dairy, eggs, and honey.",
    },
    {
      name: "Vegetarian",
      description:
        "Excludes meat, poultry, and fish. May include dairy and eggs depending on the type.",
    },
    {
      name: "Lacto Vegetarian",
      description: "Includes dairy but excludes eggs, meat, and fish.",
    },
    {
      name: "Ovo Vegetarian",
      description: "Includes eggs but excludes dairy, meat, and fish.",
    },
    {
      name: "Lacto-Ovo Vegetarian",
      description: "Includes both dairy and eggs but excludes meat and fish.",
    },
    {
      name: "Pescatarian",
      description: "Excludes meat and poultry but includes fish and seafood.",
    },
    {
      name: "Flexitarian",
      description:
        "Primarily plant-based diet with occasional meat and animal products.",
    },
    {
      name: "Ketogenic (Keto)",
      description:
        "High-fat, very low-carb diet that aims to induce ketosis in the body.",
    },
    {
      name: "Paleo",
      description:
        "Focuses on unprocessed foods like meat, fish, fruits, and vegetables; excludes grains and dairy.",
    },
    {
      name: "Gluten-Free",
      description:
        "Excludes all foods containing gluten, found in wheat, barley, and rye.",
    },
    {
      name: "Low Carb",
      description: "Limits carbohydrate intake to promote fat burning.",
    },
    {
      name: "High Protein",
      description:
        "Emphasizes foods high in protein to support muscle growth and maintenance.",
    },
    {
      name: "Low Fat",
      description: "Limits fat intake, especially saturated fats.",
    },
    {
      name: "DASH",
      description:
        "Designed to lower blood pressure; rich in fruits, vegetables, and low in sodium.",
    },
    {
      name: "Mediterranean",
      description:
        "Emphasizes olive oil, vegetables, fruits, fish, and whole grains.",
    },
    {
      name: "Whole30",
      description:
        "30-day plan that eliminates sugar, grains, dairy, legumes, and processed foods.",
    },
    {
      name: "Intermittent Fasting",
      description:
        "Cycles between periods of eating and fasting, e.g., 16 hours fasting, 8 hours eating window.",
    },
    {
      name: "Carnivore",
      description:
        "Excludes all plant-based foods; only animal products are consumed.",
    },
    {
      name: "Raw Food",
      description:
        "Focuses on uncooked and unprocessed foods, typically not heated above 45°C (113°F).",
    },
    {
      name: "Zone Diet",
      description:
        "Balances macronutrients in a 40% carbs, 30% protein, 30% fat ratio.",
    },
    {
      name: "Alkaline Diet",
      description:
        "Promotes foods that affect the body’s pH toward alkalinity, like fruits and vegetables.",
    },
    {
      name: "Low FODMAP",
      description:
        "Reduces fermentable carbs that cause digestive discomfort, especially in IBS patients.",
    },
    {
      name: "Detox",
      description:
        "Short-term diet focused on eliminating toxins, often includes juices and raw foods.",
    },
  ];

  const [selectedDiet, setSelectedDiet] = useState("");

  return (
    <div>
      <TextField
        fullWidth
        id="outlined-select-currency"
        select
        label="Select your diet type"
        helperText="Please select your diet type"
      >
        {dietTypes.map((option) => (
          <MenuItem
            key={option.name}
            value={option.name}
            onClick={() => setSelectedDiet(option.name)}
          >
            {option.name}
          </MenuItem>
        ))}
      </TextField>
      {selectedDiet && (
        <div
          style={{
            border: "1px solid #c5ebcd",
            borderRadius: "5px",
            backgroundColor: "#f0fff0",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",

            padding: "10px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <h3 style={{ color: "#2F4F2F" }}>{selectedDiet}</h3>
          <p style={{ color: "#2F4F2F" }}>
            {dietTypes.find((diet) => diet.name === selectedDiet)?.description}
          </p>
        </div>
      )}
    </div>
  );
}

export default DietTypes;
