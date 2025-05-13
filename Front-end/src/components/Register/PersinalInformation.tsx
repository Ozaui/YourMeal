import { InputAdornment, TextField, Grid, Box } from "@mui/material";
import { FormikProps } from "formik";
import { UserType } from "../../types/UserType";
import {
  FaUserAlt,
  FaPhoneAlt,
  FaHouseUser,
  FaBirthdayCake,
  FaLock,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function PersonalInformation({ formik }: { formik: FormikProps<UserType> }) {
  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 5, px: 2 }}>
      <h1
        style={{ textAlign: "center", marginBottom: "5px", color: "#2F4F2F" }}
      >
        Personal Information
      </h1>
      <Grid container spacing={2} justifyContent="center">
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            id="name"
            name="name"
            label="Your Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            variant="outlined"
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
            name="lastName"
            label="Your Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            variant="outlined"
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
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
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
            name="phone"
            label="Phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
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
            name="address"
            label="Address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
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
            id="birthDate"
            name="birthDate"
            label="Birth Date"
            type="date"
            value={formik.values.birthDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
            helperText={formik.touched.birthDate && formik.errors.birthDate}
            variant="outlined"
            fullWidth
            sx={{ my: 1 }}
            InputLabelProps={{ shrink: true }}
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
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
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
            id="confirmPassword"
            name="confirmPassword"
            label="Password Confirmation"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
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
