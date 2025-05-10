import React, { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Box,
} from "@mui/material";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import dislikedIngredients from "../../data/dislikedIngredients"; // Adjust the import path as necessary

function DislikedIngredients() {
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.name;
    setSelectedAllergens((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const [open, setOpen] = useState(false);
  const handleOpener = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      {open === false ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              cursor: "pointer",
              backgroundColor: "#c5ebcd",
              color: "black",
              textAlign: "center",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              borderRadius: "5px",
            }}
            onClick={handleOpener}
          >
            <FaArrowCircleDown /> &nbsp; Select the ingredients you don't like
            &nbsp;
            <FaArrowCircleDown />
          </h2>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              cursor: "pointer",
              backgroundColor: "#c5ebcd",
              color: "black",
              textAlign: "center",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              borderRadius: "5px",
            }}
            onClick={handleOpener}
          >
            <FaArrowCircleUp />
            &nbsp; Select the ingredients you don't like &nbsp;
            <FaArrowCircleUp />
          </h2>
        </div>
      )}

      {open === true && (
        <FormGroup>
          <Stack
            direction="row"
            flexWrap="wrap"
            spacing={1}
            sx={{ gap: "8px", justifyContent: "flex-start" }}
          >
            {dislikedIngredients.map((item) => (
              <Box key={item.name} sx={{ flex: "0 1 auto" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name={item.name}
                      onChange={handleCheckboxChange}
                      checked={selectedAllergens.includes(item.name)}
                    />
                  }
                  label={item.name}
                />
              </Box>
            ))}
          </Stack>
        </FormGroup>
      )}

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

export default DislikedIngredients;
