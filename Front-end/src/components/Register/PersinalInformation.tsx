import { InputAdornment, TextField, Grid, Box } from "@mui/material";
import {
  FaUserAlt,
  FaPhoneAlt,
  FaHouseUser,
  FaBirthdayCake,
  FaLock,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function PersonalInformation() {
  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 5, px: 2 }}>
      <h1 style={{ textAlign: "center" }}>Personal Information</h1>
      <Grid container spacing={2} justifyContent="center">
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            id="name"
            variant="outlined"
            label="Your Name"
            fullWidth
            sx={{ my: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaUserAlt />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            id="lastName"
            variant="outlined"
            label="Your Last Name"
            fullWidth
            sx={{ my: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaUserAlt />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ my: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MdEmail />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            id="phone"
            label="Phone"
            variant="outlined"
            fullWidth
            sx={{ my: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaPhoneAlt />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            fullWidth
            sx={{ my: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaHouseUser />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            id="birthdate"
            label="Birth Date"
            variant="outlined"
            fullWidth
            sx={{ my: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaBirthdayCake />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ my: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaLock />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            id="passwordConfirm"
            label="Password Confirmation"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ my: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaLock />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default PersonalInformation;
