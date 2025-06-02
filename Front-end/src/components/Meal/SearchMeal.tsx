import { Button, TextField, Box } from "@mui/material";
import RandomMeal from "./RandomMeal";
import { useState } from "react";

function SearchMeal() {
  const [randomMealVisible, setRandomMealVisible] = useState(false);
  const showRandomMeal = () => {
    setRandomMealVisible(true);
  };

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField
          label="What do you want to eat?"
          fullWidth
          variant="standard"
        />
        <div>
          <Button
            variant="contained"
            sx={{
              margin: "5px",
              color: "#555",
              backgroundColor: "#e0f8e9",
              fontWeight: "bold",
            }}
          >
            Search
          </Button>
          <Button
            variant="contained"
            sx={{
              margin: "5px",
              color: "#555",
              backgroundColor: "#e0f8e9",
              fontWeight: "bold",
            }}
            onClick={showRandomMeal}
          >
            Random Meal
          </Button>
          <Button
            variant="contained"
            sx={{
              margin: "5px",
              color: "#555",
              backgroundColor: "#e0f8e9",
              fontWeight: "bold",
            }}
          >
            View All Meals
          </Button>
        </div>
      </Box>

      {randomMealVisible && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}
        >
          <RandomMeal />
        </Box>
      )}
    </div>
  );
}

export default SearchMeal;
