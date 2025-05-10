import React, { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Box,
} from "@mui/material";

function CheckboxSelectionDemo() {
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);

  const allergens = [
    { name: "Peanuts", description: "Peanuts, can cause allergic reactions." },
    {
      name: "Tree Nuts",
      description: "Tree nuts such as almonds, walnuts, and hazelnuts.",
    },
    { name: "Eggs", description: "Eggs, a common allergen." },
    {
      name: "Milk",
      description:
        "Milk, can cause reactions for those with lactose intolerance or milk allergy.",
    },
    {
      name: "Wheat",
      description:
        "Wheat, can trigger reactions in individuals with gluten sensitivity.",
    },
    {
      name: "Soy",
      description: "Soy, a common allergen, especially in processed foods.",
    },
    {
      name: "Fish",
      description: "Fish, can cause severe allergic reactions in some people.",
    },
    {
      name: "Shellfish",
      description: "Shellfish such as shrimp, crab, and lobster.",
    },
    { name: "Sesame", description: "Sesame seeds, a potential allergen." },
    {
      name: "Mustard",
      description: "Mustard, can cause allergic reactions in some individuals.",
    },
    {
      name: "Celery",
      description:
        "Celery, may cause allergic reactions in sensitive individuals.",
    },
    { name: "Lupin", description: "Lupin beans, found in some food products." },
    {
      name: "Sulphites",
      description: "Sulphites, commonly found in wines and dried fruits.",
    },
    { name: "Gluten", description: "Gluten, found in wheat, rye, and barley." },
    {
      name: "Corn",
      description: "Corn, can trigger allergic reactions in some individuals.",
    },
    {
      name: "Coconut",
      description: "Coconut, can be an allergen for some people.",
    },
    { name: "Rice", description: "Rice, may cause reactions in rare cases." },
    {
      name: "Beef",
      description:
        "Beef, can cause reactions in individuals with meat allergies.",
    },
    {
      name: "Pork",
      description: "Pork, may trigger allergic reactions in some individuals.",
    },
    {
      name: "Chicken",
      description: "Chicken, can be an allergen for some people.",
    },
    {
      name: "Barley",
      description:
        "Barley, can cause reactions in individuals with gluten sensitivity.",
    },
    { name: "Rye", description: "Rye, another grain that contains gluten." },
    {
      name: "Chia Seeds",
      description: "Chia seeds, a potential allergen for some individuals.",
    },
    {
      name: "Flax Seeds",
      description:
        "Flax seeds, can trigger reactions in sensitive individuals.",
    },
    {
      name: "Carrots",
      description:
        "Carrots, may cause allergic reactions in certain individuals.",
    },
    {
      name: "Tomatoes",
      description: "Tomatoes, can cause reactions in some individuals.",
    },
    { name: "Garlic", description: "Garlic, may trigger allergic reactions." },
    {
      name: "Onions",
      description: "Onions, can cause reactions in some people.",
    },
    { name: "Peas", description: "Peas, an allergen for some individuals." },
    {
      name: "Beans",
      description: "Beans, can cause allergic reactions in certain people.",
    },
    { name: "Ginger", description: "Ginger, may trigger allergic reactions." },
    {
      name: "Avocado",
      description: "Avocado, can be an allergen for some individuals.",
    },
    {
      name: "Paprika",
      description: "Paprika, may cause reactions in sensitive individuals.",
    },
    {
      name: "Mint",
      description: "Mint, can cause allergic reactions in some people.",
    },
    {
      name: "Cinnamon",
      description:
        "Cinnamon, can trigger allergic reactions in certain individuals.",
    },
    {
      name: "Vanilla",
      description: "Vanilla, may cause reactions in allergic individuals.",
    },
    { name: "Basil", description: "Basil, an allergen for some individuals." },
    {
      name: "Sage",
      description: "Sage, can cause allergic reactions in some people.",
    },
    { name: "Thyme", description: "Thyme, may trigger allergic reactions." },
  ];

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.name;
    setSelectedAllergens((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  return (
    <div>
      <h2>Select Allergens</h2>
      <FormGroup>
        <Stack
          direction="row"
          flexWrap="wrap"
          spacing={1}
          sx={{ gap: "8px", justifyContent: "flex-start" }}
        >
          {allergens.map((allergen) => (
            <Box key={allergen.name} sx={{ flex: "0 1 auto" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    name={allergen.name}
                    onChange={handleCheckboxChange}
                    checked={selectedAllergens.includes(allergen.name)}
                  />
                }
                label={allergen.name}
              />
            </Box>
          ))}
        </Stack>
      </FormGroup>

      {selectedAllergens.length > 0 && (
        <Stack
          direction="column"
          spacing={1}
          sx={{
            border: "1px solid #c5ebcd",
            borderRadius: "5px",
            backgroundColor: "#f0fff0",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <div>Selected Allergens:</div>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {selectedAllergens.map((allergen, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: "#e0f7fa",
                  padding: "5px 10px",
                  borderRadius: "15px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  maxWidth: "200px",
                  wordWrap: "break-word",
                  flexShrink: 0,
                }}
              >
                {allergen}
              </Box>
            ))}
          </Box>
        </Stack>
      )}
    </div>
  );
}

export default CheckboxSelectionDemo;
