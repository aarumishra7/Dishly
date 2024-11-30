const SPOONACULAR_API_KEY = 'your-api-key-here';
const BASE_URL = 'https://api.spoonacular.com/recipes';

export interface RecipeSearchParams {
  ingredients?: string[];
  cuisine?: string;
  diet?: string;
  intolerances?: string[];
  type?: string;
  maxReadyTime?: number;
}

export const searchRecipes = async (params: RecipeSearchParams) => {
  const queryParams = new URLSearchParams({
    apiKey: SPOONACULAR_API_KEY,
    ...params,
    ingredients: params.ingredients?.join(','),
    intolerances: params.intolerances?.join(','),
  });

  const response = await fetch(`${BASE_URL}/complexSearch?${queryParams}`);
  return response.json();
};

export const getRecipeById = async (id: string) => {
  const response = await fetch(
    `${BASE_URL}/${id}/information?apiKey=${SPOONACULAR_API_KEY}`
  );
  return response.json();
};

export const getRecipeNutrition = async (id: string) => {
  const response = await fetch(
    `${BASE_URL}/${id}/nutritionWidget.json?apiKey=${SPOONACULAR_API_KEY}`
  );
  return response.json();
};