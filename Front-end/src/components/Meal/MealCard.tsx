import "../../css/card.css";
import { Meal } from "../../types/MealType";
function MealCard({ meal }: { meal: Meal }) {
  return (
    <div className="card">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="card-content">
        <h1>{meal.strMeal}</h1>
        <p>{meal.strInstructions}</p>
      </div>
    </div>
  );
}

export default MealCard;
