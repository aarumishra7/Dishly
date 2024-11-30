import React from 'react';
import { Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NutritionInfo {
  protein: string;
  carbs: string;
  fat: string;
  calories: number;
}

export interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  time: string;
  servings: number;
  difficulty: string;
  nutrition: NutritionInfo;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  id,
  title,
  image,
  time,
  servings,
  difficulty,
  nutrition,
}) => {
  return (
    <Link to={`/recipe/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-heading text-xl mb-2">{title}</h3>
          <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{time}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{servings} servings</span>
            </div>
            <span className="text-secondary font-medium">{difficulty}</span>
          </div>
          <div className="border-t pt-4">
            <h4 className="text-sm font-semibold mb-2">Nutrition per serving</h4>
            <div className="flex flex-wrap gap-2">
              <div className="bg-[#FDFCF9] rounded-lg px-3 py-2">
                <span className="text-xs text-gray-600">Calories</span>
                <span className="block font-medium">{nutrition.calories}</span>
              </div>
              <div className="bg-[#FDFCF9] rounded-lg px-3 py-2">
                <span className="text-xs text-gray-600">Protein</span>
                <span className="block font-medium">{nutrition.protein}</span>
              </div>
              <div className="bg-[#FDFCF9] rounded-lg px-3 py-2">
                <span className="text-xs text-gray-600">Carbs</span>
                <span className="block font-medium">{nutrition.carbs}</span>
              </div>
              <div className="bg-[#FDFCF9] rounded-lg px-3 py-2">
                <span className="text-xs text-gray-600">Fat</span>
                <span className="block font-medium">{nutrition.fat}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};