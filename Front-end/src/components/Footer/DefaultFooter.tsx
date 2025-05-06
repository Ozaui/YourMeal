import { Box, Grid } from "@mui/material";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function DefaultFooter() {
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          padding: 3,
          backgroundColor: "#FFD8B1",
          color: "#2F4F2F",
        }}
      >
        <Grid container spacing={2}>
          <Grid size={8}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img src={Logo} alt="YoutMealLogo" style={{ width: 75 }} />
              <p
                style={{
                  color: "#5D4037",
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                Malzemeler sizden, tarifler YourMeal’den!
              </p>
            </Box>
          </Grid>
          <Grid
            size={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>
              <Link to={""}>a</Link>
            </p>
            <p>
              <Link to={""}>b</Link>
            </p>
            <p>
              <Link to={""}>c</Link>
            </p>
            <p>
              <Link to={""}>d</Link>
            </p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default DefaultFooter;
