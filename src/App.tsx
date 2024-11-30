import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './lib/firebase';
import { Sidebar } from './components/Sidebar';
import { Auth } from './components/Auth';
import { HomePage } from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';
import { RecipeDetailPage } from './pages/RecipeDetailPage';
import { RecipeForm } from './components/RecipeForm';

function App() {
  const [user] = useAuthState(auth);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  if (!user) {
    return <Auth />;
  }

  return (
    <Router>
      <div className="flex min-h-screen bg-background">
        <Sidebar isCollapsed={isSidebarCollapsed} onToggle={setIsSidebarCollapsed} />
        <main className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? 'ml-20' : 'ml-64'} p-8`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/generator" element={<RecipeForm />} />
            <Route path="/recipe/:id" element={<RecipeDetailPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;