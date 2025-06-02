import "../../css/card.css";
import { Meal } from "../../types/MealType";
function MealCard({ meal }: { meal: Meal }) {
  return (
    <div className="card" style={{ background: "#e0f8e9" }}>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="card-content">
        <h1 style={{ color: "#2f4f2f" }}>{meal.strMeal}</h1>
        <p style={{ margin: "10px", color: "#555" }}>{meal.strInstructions}</p>
      </div>
    </div>
  );
}

export default MealCard;
