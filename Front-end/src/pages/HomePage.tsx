import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeals } from "../features/meals/mealsSlice";
import { AppDispatch, RootState } from "../app/store";
import MealCard from "../components/Meal/MealCard";

function HomePage() {
  const dispatch = useDispatch();
  const appDispacth = useDispatch<AppDispatch>();
  const { meals, status, error } = useSelector(
    (state: RootState) => state.meals
  );

  useEffect(() => {
    if (status === "idle") {
      appDispacth(fetchMeals());
    }
  }, [status, dispatch]);
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Yemekler</h1>
      <div className="cards-container">
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
