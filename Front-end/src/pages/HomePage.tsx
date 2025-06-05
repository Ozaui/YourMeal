import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeals } from "../features/meals/mealsSlice";
import { AppDispatch, RootState } from "../app/store";
import MealCard from "../components/Meal/MealCard";
import SearchMeal from "../components/Meal/SearchMeal";
import { fetchRandomMeal } from "../features/meals/randomMealSlice";
import DefaultFooter from "../components/Footer/DefaultFooter";

function HomePage() {
  const dispatch = useDispatch<AppDispatch>();

  // Fetch meals
  const meals = useSelector((state: RootState) => state.meals);

  useEffect(() => {
    if (meals.status === "idle") {
      dispatch(fetchMeals());
    }
  }, [meals.status, dispatch]);
  if (meals.status === "loading") {
    return <div>Loading...</div>;
  }
  if (meals.status === "failed") {
    return <div>Error: {meals.error}</div>;
  }

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #e0f8e9,#ffd7b1)",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Yemekler</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          textAlign: "center",
        }}
      >
        <SearchMeal />
      </div>

      <div className="cards-container">
        {meals.meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>

      <DefaultFooter />
    </div>
  );
}

export default HomePage;
