import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Camera, Save } from 'lucide-react';
import { auth } from '../lib/firebase';
import { RecipeCard } from '../components/RecipeCard';

const MOCK_SAVED_RECIPES = [
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
  // Add more saved recipes as needed
];

export const ProfilePage = () => {
  const [user] = useAuthState(auth);
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [bio, setBio] = useState('Aspiring home chef');
  const [selectedDiets, setSelectedDiets] = useState<string[]>([]);

  const dietaryPreferences = ['Vegan', 'Vegetarian', 'Gluten-Free', 'Keto', 'Paleo', 'Low-Carb'];
  const stats = [
    { label: 'Recipes Tried', value: 24 },
    { label: 'Favorites', value: 12 },
    { label: 'Shared Recipes', value: 5 },
  ];

  const toggleDiet = (diet: string) => {
    setSelectedDiets(prev => 
      prev.includes(diet) 
        ? prev.filter(d => d !== diet)
        : [...prev, diet]
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-start gap-6">
          <div className="relative">
            <img
              src={user?.photoURL || `https://ui-avatars.com/api/?name=${displayName}&background=random`}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 p-2 bg-primary rounded-full shadow-lg hover:bg-primary/90 transition-colors">
              <Camera className="h-4 w-4 text-white" />
            </button>
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                {isEditing ? (
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="text-2xl font-heading mb-2 border-b border-gray-300 focus:border-primary outline-none"
                  />
                ) : (
                  <h1 className="text-2xl font-heading mb-2">{displayName || 'Add your name'}</h1>
                )}
                {isEditing ? (
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="text-gray-600 w-full border-b border-gray-300 focus:border-primary outline-none resize-none"
                  />
                ) : (
                  <p className="text-gray-600">{bio}</p>
                )}
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Save className="h-4 w-4" />
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
              <span className="block text-2xl font-bold text-primary">{stat.value}</span>
              <span className="text-gray-600">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dietary Preferences */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="font-heading text-xl mb-4">Dietary Preferences</h2>
        <div className="flex flex-wrap gap-2">
          {dietaryPreferences.map((diet) => (
            <button
              key={diet}
              onClick={() => toggleDiet(diet)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedDiets.includes(diet)
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {diet}
            </button>
          ))}
        </div>
      </div>

      {/* Saved Recipes */}
      <div>
        <h2 className="font-heading text-2xl mb-4">Saved Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_SAVED_RECIPES.map(recipe => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};