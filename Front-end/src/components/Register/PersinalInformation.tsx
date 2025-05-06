import { InputAdornment, TextField, Grid } from "@mui/material";
import {
  FaUserAlt,
  FaPhoneAlt,
  FaHouseUser,
  FaBirthdayCake,
  FaLock,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function PersinalInformation() {
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            id="name"
            variant="outlined"
            label="Your Name"
            fullWidth
            sx={{ marginBottom: "10px", marginTop: "10px" }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FaUserAlt />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            id="lastName"
            variant="outlined"
            label="Your Last Name"
            fullWidth
            sx={{ marginBottom: "10px", marginTop: "10px" }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FaUserAlt />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "10px", marginTop: "10px" }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <MdEmail />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            id="phone"
            label="Phone"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "10px", marginTop: "10px" }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FaPhoneAlt />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            id="adress"
            label="Address"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "10px", marginTop: "10px" }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FaHouseUser />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            id="birthdate"
            label="Birth Date"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "10px", marginTop: "10px" }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FaBirthdayCake />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            sx={{ marginBottom: "10px", marginTop: "10px" }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FaLock />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            id="passwordConfirm"
            label="Password Confirmation"
            variant="outlined"
            type="password"
            fullWidth
            sx={{ marginBottom: "10px", marginTop: "10px" }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FaLock />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default PersinalInformation;
