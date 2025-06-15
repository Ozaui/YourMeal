import { useSelector } from "react-redux";

const home = () => {
  const selectedDislikeIngredient = useSelector(
    (state) => state.registeration.dislikeIngredient.selecteddislikeIngredient
  );
  const allergens = useSelector(
    (state) => state.registeration.allergens.selectedAllergens
  );

  console.log(allergens);

  return <div>home</div>;
};

export default home;
