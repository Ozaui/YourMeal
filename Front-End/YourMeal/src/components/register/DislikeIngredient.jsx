import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDislikeIngredients } from "../../features/dislikeIngredientsThunks/dislikeIngredientsThunks";
import { selectYourDislikeIngredients } from "../../features/dislikeIngredientSlice";
import BackButton from "../../components/BackButton";

const DislikeIngredient = ({ onBack }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDislikeIngredients());
    console.log("useEffect Çalıştı");
  }, [dispatch]);

  const dislikeIngredient = useSelector(
    (state) => state.dislikeIngredient.dislikeIngredients
  );
  const selectedDislikeIngredient = useSelector(
    (state) => state.dislikeIngredient.selectedDislikeIngredients
  );
  const handleCheckboxChange = (dislikeIngredient) => {
    dispatch(selectYourDislikeIngredients(dislikeIngredient));
  };
  return (
    <div>
      <div className="dislikeIngredient-container">
        <div className="dislikeIngredient">
          {dislikeIngredient.map((dislikeIngredientName) => (
            <label
              className="dislikeIngredient-label"
              key={dislikeIngredientName}
            >
              <input
                type="checkbox"
                checked={selectedDislikeIngredient.includes(
                  dislikeIngredientName
                )}
                onChange={() => handleCheckboxChange(dislikeIngredientName)}
                className="dislikeIngredient-input"
              />
              {dislikeIngredientName}
            </label>
          ))}
        </div>

        <div className="selected-dislikeIngredient-container">
          <h4>Selected Dislike Ingredient:</h4>
          {selectedDislikeIngredient.length > 0 ? (
            <ul className="selected-dislikeIngredient-list">
              {selectedDislikeIngredient.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>No Dislike Ingredient selected</p>
          )}
        </div>
        <BackButton onBack={onBack} />
      </div>
      <button type="submit">Submit</button>
    </div>
  );
};

export default DislikeIngredient;
