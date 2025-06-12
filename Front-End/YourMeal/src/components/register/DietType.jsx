import React, { useEffect, useState } from "react";
import "./../../css/registerPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getDietTypes } from "../../features/diet/dietThunks";
import NextBackButtons from "../NextBackButtons";

const DietType = () => {
  const dispatch = useDispatch();

  const { dietTypes, selectedDietType } = useSelector((state) => state.diet);

  const handleDietTypeDescriptionTR = (selectedDietType) => {
    const found = dietTypes.dietTypes?.find(
      (dietType) => dietType.name === selectedDietType
    );
    return found ? found.descriptionTR : "Please select a diet type.";
  };

  useEffect(() => {
    dispatch(getDietTypes());
  }, [dispatch]);

  return (
    <div className="diet-type">
      <label htmlFor="dietType">Select Your Diet Type</label>
      <select
        id="dietType"
        name="dietType"
        className="diet"
        required
        onChange={(e) => setSelectedDietType(e.target.value)}
      >
        {dietTypes.dietTypes?.map(({ name }, index) => (
          <option key={index} value={name} className="diet-option">
            {name}
          </option>
        ))}
      </select>
      <p className="dietType-description">
        {handleDietTypeDescriptionTR(selectedDietType)}
      </p>
      <NextBackButtons />
    </div>
  );
};

export default DietType;
