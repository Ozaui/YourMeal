import { Box } from "@mui/material";

import DietTypes from "./DietTypes";
import Allergens from "./Allergens";
import DislikedIngredients from "./DislikedIngredients";
import { FormikProps } from "formik";
import { FormValues } from "../../types/FormValues";

function PersonalInformation({ formik }: { formik: FormikProps<FormValues> }) {
  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 5, px: 2 }}>
      <h1
        style={{ textAlign: "center", marginBottom: "5px", color: "#2f4f2f" }}
      >
        Your Preferences
      </h1>
      <DietTypes formik={formik} />
      <Allergens formik={formik} />
      <DislikedIngredients formik={formik} />
    </Box>
  );
}

export default PersonalInformation;
