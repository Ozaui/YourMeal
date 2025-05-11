import { MenuItem, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import dietTypes from "../../data/diets";
import { FormikProps } from "formik";
import { FormValues } from "../../types/FormValues";

function DietTypes({ formik }: { formik: FormikProps<FormValues> }) {
  const [selectedDiet, setSelectedDiet] = useState("");

  useEffect(() => {
    if (formik.values.diet) {
      setSelectedDiet(formik.values.diet);
    }
  }, [formik.values.diet]);

  const handleDietChange = (diet: string) => {
    setSelectedDiet(diet);
    formik.setFieldValue("diet", diet);
  };

  return (
    <div>
      <TextField
        fullWidth
        id="outlined-select-currency"
        select
        label="Select your diet type"
        helperText="Please select your diet type"
        value={selectedDiet}
        onChange={(e) => handleDietChange(e.target.value)}
      >
        {dietTypes.map((option) => (
          <MenuItem
            key={option.name}
            value={option.name}
            style={{
              backgroundColor:
                selectedDiet === option.name ? "#c4ebcd" : "#ECEAD3",
              color: "#2F4F2F",
            }}
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
          <h3 style={{ color: "#2F4F2F" }} id="diet">
            {selectedDiet}
          </h3>
          <p style={{ color: "#2F4F2F" }}>
            {dietTypes.find((diet) => diet.name === selectedDiet)?.description}
          </p>
        </div>
      )}
    </div>
  );
}

export default DietTypes;
