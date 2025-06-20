import React from "react";
import { useDispatch } from "react-redux";
import { getMealByCategory } from "../../features/meals/mealsThunks";

const categories = [
  "Vegetarian",
  "Vegan",
  "Pescatarian",
  "Gluten-Free",
  "High Protein",
  "Low Carb",
  "Mediterranean",
];

const FilterByCategory = () => {
  const dispatch = useDispatch();

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    dispatch(getMealByCategory(selectedCategory));
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <label htmlFor="categorySelect" style={{ marginRight: "10px" }}>
        Kategoriye göre filtrele:
      </label>
      <select id="categorySelect" onChange={handleCategoryChange}>
        <option value="">Tümünü Göster</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterByCategory;
