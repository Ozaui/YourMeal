import { Container, Grid, Button } from "@mui/material";
import DefaultFooter from "../components/Footer/DefaultFooter";
import PersinalInformation from "../components/Register/PersinalInformation";
import OptionalInformation from "../components/Register/OptionalInformation";
import { useFormik } from "formik";
import { UserType } from "../types/UserType";
import { RegisterPageSchema } from "../schemas/RegisterPageSchema";

function RegisterPage() {
  const formik = useFormik<UserType>({
    initialValues: {
      id: "",
      name: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      birthDate: "",
      password: "",
      confirmPassword: "",
      diet: "",
      allergens: [],
      dislike: [],
    },
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
    },
    validationSchema: RegisterPageSchema,
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          background: "linear-gradient(to bottom, #e0f8e9,#ffd7b1)",
          minHeight: "100vh",
        }}
      >
        <Container
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          <h1
            style={{
              color: "#2f4f2f",
              backgroundColor: "#c4ebcd",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            Welcome to Register Page
          </h1>

          <Grid
            container
            spacing={2}
            sx={{
              width: "100%",
              maxWidth: "800px",
              marginTop: "20px",
            }}
          >
            <Grid size={{ xs: 12 }}>
              <PersinalInformation formik={formik} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <OptionalInformation formik={formik} />
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

export default RegisterPage;
