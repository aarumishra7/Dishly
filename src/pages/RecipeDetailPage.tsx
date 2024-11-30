import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Minus, Plus } from 'lucide-react';

const MOCK_RECIPE = {
  id: '1',
  title: "Mediterranean Pasta",
  image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  time: "30 mins",
  defaultServings: 2,
  difficulty: "Easy",
  ingredients: [
    { name: "Pasta", amount: 200, unit: "g" },
    { name: "Cherry tomatoes", amount: 200, unit: "g" },
    { name: "Olive oil", amount: 2, unit: "tbsp" },
  ],
  instructions: [
    "Boil pasta according to package instructions",
    "Halve cherry tomatoes",
    "Heat olive oil in a pan",
  ],
  nutrition: {
    protein: "12g",
    carbs: "45g",
    fat: "8g",
    calories: 380
  }
};

export const RecipeDetailPage = () => {
  const { id } = useParams();
  const [servings, setServings] = useState(MOCK_RECIPE.defaultServings);

  const calculateAmount = (amount: number) => {
    const ratio = servings / MOCK_RECIPE.defaultServings;
    return (amount * ratio).toFixed(1);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img 
        src={MOCK_RECIPE.image} 
        alt={MOCK_RECIPE.title} 
        className="w-full h-96 object-cover rounded-lg mb-8"
      />
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-heading text-4xl">{MOCK_RECIPE.title}</h1>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setServings(Math.max(1, servings - 1))}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <Minus className="h-5 w-5" />
          </button>
          <span className="text-xl font-medium">{servings} servings</span>
          <button 
            onClick={() => setServings(servings + 1)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-heading text-2xl mb-4">Ingredients</h2>
          <ul className="space-y-2">
            {MOCK_RECIPE.ingredients.map((ingredient, index) => (
              <li key={index} className="flex justify-between">
                <span>{ingredient.name}</span>
                <span className="text-gray-600">
                  {calculateAmount(ingredient.amount)} {ingredient.unit}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl mb-4">Instructions</h2>
          <ol className="space-y-4">
            {MOCK_RECIPE.instructions.map((instruction, index) => (
              <li key={index} className="flex">
                <span className="font-medium mr-4">{index + 1}.</span>
                <span>{instruction}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-8 p-6 bg-white rounded-lg shadow">
        <h2 className="font-heading text-2xl mb-4">Nutrition per serving</h2>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <span className="block font-medium">Calories</span>
            <span className="text-2xl">{MOCK_RECIPE.nutrition.calories}</span>
          </div>
          <div>
            <span className="block font-medium">Protein</span>
            <span className="text-2xl">{MOCK_RECIPE.nutrition.protein}</span>
          </div>
          <div>
            <span className="block font-medium">Carbs</span>
            <span className="text-2xl">{MOCK_RECIPE.nutrition.carbs}</span>
          </div>
          <div>
            <span className="block font-medium">Fat</span>
            <span className="text-2xl">{MOCK_RECIPE.nutrition.fat}</span>
          </div>
        </div>
      </div>
    </div>
  );
};