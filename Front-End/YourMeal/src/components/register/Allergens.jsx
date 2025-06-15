import "./../../css/registerPage.css";
import NextBackButtos from "../NextBackButtons";
import { getAllergens } from "../../features/allergens/allergensThunks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectYourAllergens } from "../../features/allergensSlice";
import { setAllergensForRegisteration } from "../../features/registrationSlice";

const Allergens = ({ onNext, onBack }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllergens());
  }, [dispatch]);

  const allergens = useSelector((state) => state.allergens.allergens);
  const selectedAllergens = useSelector(
    (state) => state.allergens.selectedAllergens
  );
  const handleCheckboxChange = (allergen) => {
    dispatch(selectYourAllergens(allergen));
  };

  const handleNextClick = () => {
    dispatch(
      setAllergensForRegisteration({ selectedAllergens: selectedAllergens })
    );
    if (onNext) onNext();
  };
  return (
    <div className="allergens-container">
      <div className="allergens">
        {allergens.map((allergensNames) => (
          <label className="allergen-label" key={allergensNames}>
            <input
              type="checkbox"
              checked={selectedAllergens.includes(allergensNames)}
              onChange={() => handleCheckboxChange(allergensNames)}
              className="allergen-input "
            />
            {allergensNames}
          </label>
        ))}
      </div>

      <div className="selected-allergens-container">
        <h4>Selected Allergens:</h4>
        {selectedAllergens.length > 0 ? (
          <ul className="selected-allergens-list">
            {selectedAllergens.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>No allergens selected</p>
        )}
      </div>
      <NextBackButtos onNext={handleNextClick} onBack={onBack} />
    </div>
  );
};

export default Allergens;
