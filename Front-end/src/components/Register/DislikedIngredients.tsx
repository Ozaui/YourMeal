import React, { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Box,
} from "@mui/material";

import dislikedIngredients from "../../data/dislikedIngredients";
import { UserType } from "../../types/UserType";
import { FormikProps } from "formik";

function DislikedIngredients({ formik }: { formik: FormikProps<UserType> }) {
  const [selectedDislikeIngredients, setSelectedDislikeIngredient] = useState<
    string[]
  >([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.name;
    setSelectedDislikeIngredient((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            backgroundColor: "#c5ebcd",
            color: "black",
            textAlign: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          &nbsp; Choose the ingredients you don't like &nbsp;
        </h2>
      </div>

      <FormGroup sx={{ backgroundColor: "#f7dfbf", borderRadius: "5px" }}>
        <Stack
          direction="row"
          flexWrap="wrap"
          spacing={1}
          sx={{
            gap: "8px",
            justifyContent: "space-evenly",
            padding: "10px",
          }}
        >
          {dislikedIngredients.map((item) => (
            <Box
              key={item.name}
              sx={{
                flex: "0 1 auto",
                border: "1px solid #c5ebcd",
                backgroundColor: "#e0f7fa",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    name={item.name}
                    onChange={handleCheckboxChange}
                    checked={selectedDislikeIngredients.includes(item.name)}
                  />
                }
                label={item.name}
              />
            </Box>
          ))}
        </Stack>
      </FormGroup>

      {selectedDislikeIngredients.length > 0 && (
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
            {selectedDislikeIngredients.map((dislikedIngredients, index) => (
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
                {dislikedIngredients}
              </Box>
            ))}
          </Box>
        </Stack>
      )}
    </div>
  );
}

export default DislikedIngredients;
