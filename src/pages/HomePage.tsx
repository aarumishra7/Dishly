import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';
import { RecipeCard } from '../components/RecipeCard';

const TRENDING_RECIPES = [
  {
    id: '1',
    title: "Mediterranean Pasta",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    time: "30 mins",
    servings: 4,
    difficulty: "Easy",
    nutrition: {
      protein: "12g",
      carbs: "45g",
      fat: "8g",
      calories: 380
    }
  },
  // Add more trending recipes...
];

const HISTORY_RECIPES = [
  {
    id: '2',
    title: "Quinoa Buddha Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    time: "25 mins",
    servings: 2,
    difficulty: "Medium",
    nutrition: {
      protein: "15g",
      carbs: "35g",
      fat: "12g",
      calories: 420
    }
  },
  // Add more history recipes...
];

export const HomePage = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="p-6">
      <div className="mb-12">
        <h1 className="font-heading text-4xl mb-2">Welcome, {user?.displayName || 'Chef'}!</h1>
        <p className="text-2xl font-bold">Whip Up Magic in the Kitchen!</p>
      </div>

      <section className="mb-12">
        <h2 className="font-heading text-3xl mb-6">Trending Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRENDING_RECIPES.map(recipe => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-heading text-3xl mb-6">Previously Tried Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HISTORY_RECIPES.map(recipe => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </section>
    </div>
  );
};