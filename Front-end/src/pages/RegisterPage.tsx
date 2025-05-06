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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <PersinalInformation />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <OptionalInformation />
          </Grid>
        </Grid>
        <Button>Save</Button>
      </Container>
      <DefaultFooter />
    </div>
  );
}

export default RegisterPage;
