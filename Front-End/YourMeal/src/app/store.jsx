import { configureStore } from "@reduxjs/toolkit";
import firstRegisterPageReducer from "../features/firstRegisterPageSlice.jsx";
import dietTypeReducer from "../features/dietTypeSlice.jsx";
import allergensReducer from "../features/allergensSlice.jsx";
import getDislikeIngredientReducer from "../features/dislikeIngredientSlice.jsx";
import registerationReducer from "../features/registrationSlice.jsx";
import mealsReducer from "../features/mealsSlice.jsx";

const store = configureStore({
  reducer: {
    firstRegisterPage: firstRegisterPageReducer,
    diet: dietTypeReducer,
    allergens: allergensReducer,
    dislikeIngredient: getDislikeIngredientReducer,
    registeration: registerationReducer,
    meals: mealsReducer,
  },
});
export default store;
