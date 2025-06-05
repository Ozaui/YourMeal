import { Button, TextField, Box } from "@mui/material";
import RandomMeal from "./RandomMeal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import {
  fetchSearchMeal,
  setSearchString,
  setMeals,
} from "../../features/meals/searchMealSlice";
import SearchMealCard from "./SearchMealCard";

function SearchMeal() {
  const dispatch = useDispatch<AppDispatch>();

  const [randomMealVisible, setRandomMealVisible] = useState(false);
  const showRandomMeal = () => {
    setRandomMealVisible(true);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [seachMealVisible, setSearchMealVisible] = useState(false);
  const handleSearch = async () => {
    try {
      dispatch(setSearchString(searchQuery));
      const resultAction = await dispatch(
        fetchSearchMeal(searchQuery)
      ).unwrap();
      dispatch(setMeals(resultAction));
      setSearchMealVisible(true);
    } catch (err) {
      console.error("Arama başarısız:", err);
    }
  };

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          px: 2,
        }}
      >
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <TextField
            label="What do you want to eat?"
            fullWidth
            variant="standard"
            sx={{ flexGrow: 2, mx: 1 }}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{
              margin: "5px",
              color: "#555",
              backgroundColor: "#e0f8e9",
              fontWeight: "bold",
            }}
            onClick={() => handleSearch()}
          >
            Search
          </Button>
        </Box>
        <div>
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

      {seachMealVisible && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}
        >
          <SearchMealCard />
        </Box>
      )}

      {randomMealVisible && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RandomMeal />
        </div>
      )}
    </div>
  );
}

export default SearchMeal;
