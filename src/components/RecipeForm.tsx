import React, { useState } from 'react';
import { Search, Plus, X } from 'lucide-react';

interface Ingredient {
  name: string;
  isOptional: boolean;
}

export const RecipeForm = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [newIngredient, setNewIngredient] = useState('');
  
  const cuisineTypes = ['Any', 'Indian', 'Italian', 'Chinese', 'Mexican', 'Mediterranean'];
  const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert', 'Beverage'];
  const dietaryPreferences = ['Vegan', 'Vegetarian', 'Gluten-Free', 'Keto', 'Paleo', 'Low-Carb'];
  const allergies = ['Nut-free', 'Dairy-free', 'Soy-free', 'Shellfish-free'];
  const cookingTimes = ['Quick (under 15 mins)', 'Moderate (15-30 mins)', 'Extended (30+ mins)'];
  const difficultyLevels = ['Easy', 'Intermediate', 'Advanced'];
  const nutritionalGoals = ['High protein', 'Low fat', 'Low calorie', 'Balanced diet'];
  const cookingMethods = ['Stovetop', 'Oven', 'Air fryer', 'Grill', 'Instant Pot', 'No-cook'];
  const courseTypes = ['Appetizer', 'Main course', 'Side dish', 'Salad', 'Soup', 'Dessert'];
  const budgetLevels = ['Low-cost', 'Moderate', 'Premium/Exotic'];

  const addIngredient = (isOptional: boolean = false) => {
    if (newIngredient.trim()) {
      setIngredients([...ingredients, { name: newIngredient.trim(), isOptional }]);
      setNewIngredient('');
    }
  };

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="font-heading text-3xl mb-6">Generate Recipe</h2>
      
      <div className="space-y-6">
        {/* Ingredients Section */}
        <div className="space-y-4">
          <label className="block text-gray-700 font-medium">Ingredients</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addIngredient()}
              placeholder="Add an ingredient"
              className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              onClick={() => addIngredient(false)}
              className="p-2 bg-primary text-white rounded-md hover:bg-opacity-90"
            >
              <Plus className="h-5 w-5" />
            </button>
            <button
              onClick={() => addIngredient(true)}
              className="p-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              Optional
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {ingredients.map((ingredient, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                  ingredient.isOptional ? 'bg-gray-100' : 'bg-primary bg-opacity-10'
                }`}
              >
                <span className="text-sm">{ingredient.name}</span>
                <button
                  onClick={() => removeIngredient(index)}
                  className="p-1 hover:bg-gray-200 rounded-full"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Preferences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Cuisine Type</label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              {cuisineTypes.map(cuisine => (
                <option key={cuisine} value={cuisine.toLowerCase()}>{cuisine}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Meal Type</label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              {mealTypes.map(meal => (
                <option key={meal} value={meal.toLowerCase()}>{meal}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Dietary Preferences</label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              {dietaryPreferences.map(diet => (
                <option key={diet} value={diet.toLowerCase()}>{diet}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Allergies</label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              {allergies.map(allergy => (
                <option key={allergy} value={allergy.toLowerCase()}>{allergy}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Cooking Time</label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              {cookingTimes.map(time => (
                <option key={time} value={time.toLowerCase()}>{time}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Difficulty Level</label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              {difficultyLevels.map(level => (
                <option key={level} value={level.toLowerCase()}>{level}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Nutritional Goal</label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              {nutritionalGoals.map(goal => (
                <option key={goal} value={goal.toLowerCase()}>{goal}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Cooking Method</label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              {cookingMethods.map(method => (
                <option key={method} value={method.toLowerCase()}>{method}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Course Type</label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              {courseTypes.map(course => (
                <option key={course} value={course.toLowerCase()}>{course}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Budget Level</label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              {budgetLevels.map(budget => (
                <option key={budget} value={budget.toLowerCase()}>{budget}</option>
              ))}
            </select>
          </div>
        </div>

        <button className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2">
          <Search className="h-5 w-5" />
          <span>Generate Recipe</span>
        </button>
      </div>
    </div>
  );
};