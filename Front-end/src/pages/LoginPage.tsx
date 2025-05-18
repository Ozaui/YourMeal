import { useFormik } from "formik";
import {
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import DefaultFooter from "../components/Footer/DefaultFooter";
import { FaLock, FaUserAlt } from "react-icons/fa";
import LoginPageSchema from "../schemas/LoginPageSchema";

function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
    },
    validationSchema: LoginPageSchema,
  });
  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          background: "linear-gradient(to bottom, #e0f8e9,#ffd7b1)",
          minHeight: "80vh",
        }}
      >
        <h1
          style={{
            color: "#2f4f2f",
            backgroundColor: "#c4ebcd",
            padding: "10px",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          Welcome to Login Page
        </h1>
        <Container
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "85vh",
          }}
        >
          <Grid
            spacing={2}
            justifyContent="center"
            sx={{ width: "40%", maxWidth: 400 }}
          >
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id="email"
                name="email"
                label="Your Email"
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
                      <FaUserAlt />
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
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
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
          </Grid>
          <Button
            sx={{ mt: 4, mb: 2, color: "black", backgroundColor: "#c4ebcd" }}
            type="submit"
          >
            Save
          </Button>
        </Container>
      </form>
      <DefaultFooter />
    </div>
  );
}

export default LoginPage;
