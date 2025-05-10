import { Container, Grid, Button } from "@mui/material";
import DefaultFooter from "../components/Footer/DefaultFooter";
import PersinalInformation from "../components/Register/PersinalInformation";
import OptionalInformation from "../components/Register/OptionalInformation";

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
          minHeight: "100vh",
        }}
      >
        <h1>RegisterPage</h1>

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
            <PersinalInformation />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <OptionalInformation />
          </Grid>
        </Grid>
        <Button variant="contained" sx={{ mt: 4 }}>
          Save
        </Button>
      </Container>
      <DefaultFooter />
    </div>
  );
}

export default RegisterPage;
