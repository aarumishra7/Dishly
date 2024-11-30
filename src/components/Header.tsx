import React from 'react';
import { LogOut } from 'lucide-react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';

export const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <h1 className="font-heading text-2xl">Dishly</h1>
          </div>
          {user && (
            <button
              onClick={() => signOut(auth)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};