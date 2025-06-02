import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useEffect } from "react";
import { fetchRandomMeal } from "../../features/meals/randomMealSlice";
import "../../css/card.css";

function RandomMeal() {
  // Fetch random meal
  const dispatch = useDispatch<AppDispatch>();
  const randomMeal = useSelector((state: RootState) => state.randomMeal);
  useEffect(() => {
    if (randomMeal.status === "idle") {
      dispatch(fetchRandomMeal());
    }
  }, [randomMeal.status, dispatch]);
  if (randomMeal.status === "loading") {
    return <div>Loading...</div>;
  }
  if (randomMeal.status === "failed") {
    return <div>Error: {randomMeal.error}</div>;
  }
  return (
    <div>
      <h2>Random Meal</h2>
      {randomMeal.meal ? (
        <div className="card" style={{ background: "#e0f8e9" }}>
          <img
            src={randomMeal.meal.strMealThumb}
            alt={randomMeal.meal.strMeal}
          />
          <div className="card-content">
            <h1 style={{ color: "#2f4f2f" }}>{randomMeal.meal.strMeal}</h1>
            <p style={{ margin: "10px", color: "#555" }}>
              {randomMeal.meal.strInstructions}
            </p>
          </div>
        </div>
      ) : (
        <p>No meal found</p>
      )}
    </div>
  );
}

export default RandomMeal;
