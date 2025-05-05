import {
  Container,
  InputAdornment,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import DefaultFooter from "../components/Footer/DefaultFooter";
import {
  FaUserAlt,
  FaPhoneAlt,
  FaHouseUser,
  FaBirthdayCake,
  FaLock,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function RegisterPage() {
  return (
    <div>
      <Container
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>RegisterPage</h1>
        <Grid
          container
          spacing={2}
          size={6}
          sx={{
            width: "80%",
            marginTop: "20px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Grid
            container
            spacing={2}
            size={6}
            sx={{
              width: "70%",
              marginTop: "20px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id="name"
                variant="outlined"
                label="Your Name"
                fullWidth
                sx={{ marginBottom: "10px", marginTop: "10px", width: "80%" }}
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
                sx={{ marginBottom: "10px", marginTop: "10px", width: "80%" }}
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
                placeholder="Email"
                variant="outlined"
                sx={{ marginBottom: "10px", marginTop: "10px", width: "80%" }}
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
                placeholder="Phone"
                variant="outlined"
                sx={{ marginBottom: "10px", marginTop: "10px", width: "80%" }}
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
                placeholder="Address"
                variant="outlined"
                sx={{ marginBottom: "10px", marginTop: "10px", width: "80%" }}
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
                placeholder="Birth Date"
                variant="outlined"
                sx={{ marginBottom: "10px", marginTop: "10px", width: "80%" }}
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
                placeholder="Password"
                variant="outlined"
                type="password"
                sx={{ marginBottom: "10px", marginTop: "10px", width: "80%" }}
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
                placeholder="Password Confirmation"
                variant="outlined"
                type="password"
                sx={{ marginBottom: "10px", marginTop: "10px", width: "80%" }}
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
          <Grid
            container
            spacing={2}
            size={6}
            sx={{
              width: "70%",
              marginTop: "20px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id="name"
                variant="outlined"
                label="Your Name"
                fullWidth
                sx={{ marginBottom: "10px", marginTop: "10px", width: "80%" }}
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
                sx={{ marginBottom: "10px", marginTop: "10px", width: "80%" }}
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
                placeholder="Email"
                variant="outlined"
                sx={{ marginBottom: "10px", marginTop: "10px", width: "80%" }}
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
                placeholder="Phone"
                variant="outlined"
                sx={{ marginBottom: "10px", marginTop: "10px", width: "80%" }}
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
                placeholder="Address"
                variant="outlined"
                sx={{ marginBottom: "10px", marginTop: "10px", width: "80%" }}
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
                placeholder="Birth Date"
                variant="outlined"
                sx={{ marginBottom: "10px", marginTop: "10px", width: "80%" }}
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
                placeholder="Password"
                variant="outlined"
                type="password"
                sx={{ marginBottom: "10px", marginTop: "10px", width: "80%" }}
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
                placeholder="Password Confirmation"
                variant="outlined"
                type="password"
                sx={{ marginBottom: "10px", marginTop: "10px", width: "80%" }}
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
        </Grid>
        <Button>Save</Button>
      </Container>
      <DefaultFooter />
    </div>
  );
}

export default RegisterPage;
