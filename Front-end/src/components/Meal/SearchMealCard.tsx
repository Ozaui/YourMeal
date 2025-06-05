import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";

import { useEffect } from "react";
import {
  fetchSearchMeal,
  clearMeals,
} from "../../features/meals/searchMealSlice";

function SearchMealCard() {
  const dispatch = useDispatch<AppDispatch>();
  const selector = useSelector((state: RootState) => state.searchMeal);
  useEffect(() => {
    if (selector.searchString.trim() !== "") {
      dispatch(clearMeals()); // Önce temizle
      dispatch(fetchSearchMeal(selector.searchString)); // Sonra fetch et
    }
  }, [dispatch, selector.searchString]);

  useEffect(() => {
    dispatch(fetchSearchMeal(selector.searchString));
  }, [dispatch, selector.status, selector.searchString]);

  return (
    <div style={{ padding: "20px" }}>
      <h2
        style={{ textAlign: "center", marginBottom: "30px", color: "#2f4f2f" }}
      >
        Search Meal
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {selector.meals && selector.meals.length > 0 ? (
          selector.meals.slice(0, 10).map((meal: any) => (
            <div
              key={meal.idMeal}
              className="card"
              style={{
                background: "#e0f8e9",
                width: "300px",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <div
                className="card-content"
                style={{
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <h3 style={{ color: "#2f4f2f", fontSize: "18px", margin: 0 }}>
                  {meal.strMeal}
                </h3>
                <p style={{ color: "#555", fontSize: "14px", margin: 0 }}>
                  {meal.strInstructions
                    ? meal.strInstructions.length > 150
                      ? `${meal.strInstructions.slice(0, 150)}...`
                      : meal.strInstructions
                    : "No instructions available."}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No meal found</p>
        )}
      </div>
    </div>
  );
}

export default SearchMealCard;
