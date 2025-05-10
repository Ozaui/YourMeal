import { InputAdornment, TextField, Grid, Box } from "@mui/material";
import {
  FaUserAlt,
  FaPhoneAlt,
  FaHouseUser,
  FaBirthdayCake,
  FaLock,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import DietTypes from "./DietTypes";
import Allergens from "./Allergens";
import DislikedIngredients from "./DislikedIngredients";

function PersonalInformation() {
  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 5, px: 2 }}>
      <h1 style={{ textAlign: "center" }}>Your Preferences</h1>
      <DietTypes />
      <Allergens />
      <DislikedIngredients />
    </Box>
  );
}

export default PersonalInformation;
