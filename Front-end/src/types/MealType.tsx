export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
}

export interface MealsState {
  meals: Meal[];
  status: string;
  error: string | null;
}

export interface randomMealState {
  meal: Meal | null;
  status: string;
  error: string | null;
}
