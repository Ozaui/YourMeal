import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMealById } from "../../features/meals/mealsThunks";
import "../../css/mealDetails.css";

const MealDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { mealDetail, loading, error } = useSelector((state) => state.meals);

  useEffect(() => {
    dispatch(getMealById(id));
  }, [dispatch, id]);

  if (loading) return <div className="center-text">Loading...</div>;
  if (error) return <div className="center-text error-text">{error}</div>;
  if (!mealDetail) return <div className="center-text">Meal not found</div>;

  return (
    <div className="meal-details-container">
      <h2 className="meal-title">{mealDetail.name}</h2>

      <img
        src={mealDetail.image}
        alt={mealDetail.name}
        className="meal-image"
      />

      <p className="meal-description">{mealDetail.description}</p>

      <div className="meal-section">
        <h3>Allergens:</h3>
        <div className="badge-container">
          {mealDetail.allergens.map((item, index) => (
            <span key={index} className="badge">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="meal-section">
        <h3>Ingredients:</h3>
        <ul className="text-list">
          {mealDetail.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="meal-section">
        <h3>Instructions:</h3>
        <ol className="text-list">
          {mealDetail.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      <h2>Loading...</h2>
    </div>
  );
};

export default MealDetails;
