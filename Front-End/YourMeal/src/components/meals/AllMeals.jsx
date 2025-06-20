import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMeals } from "../../features/meals/mealsThunks";
import "./../../css/homePage.css";
import { useNavigate } from "react-router-dom";
import FilterByCategory from "./FiltredMealByCategory";

const AllMeals = () => {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.meals.meals);
  const loading = useSelector((state) => state.meals.loading);
  const error = useSelector((state) => state.meals.error);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;

  return (
    <div>
      <h2>Tüm Yemekler</h2>
      <FilterByCategory />
      <div className="meals-container">
        {meals.map((meal) => (
          <div
            key={meal.id}
            className="meal-card"
            onClick={() => navigate(`/meals/${meal.id}`)}
          >
            <img src={meal.image} alt={meal.name} />
            <strong>{meal.name}</strong>
            <p>{meal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMeals;
