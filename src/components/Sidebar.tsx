import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Sparkles, History, User, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: (collapsed: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
  const NavItem = ({ to, icon: Icon, children }: { to: string; icon: any; children: React.ReactNode }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center p-3 rounded-lg transition-all duration-300 group relative ${
          isActive 
            ? 'bg-primary/20 text-black hover:bg-primary/30' 
            : 'text-black hover:bg-gray-100'
        }`
      }
    >
      <Icon className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
        isCollapsed ? 'transform group-hover:scale-110' : ''
      }`} />
      <span className={`ml-3 transition-all duration-300 ${
        isCollapsed 
          ? 'w-0 opacity-0 absolute' 
          : 'w-auto opacity-100 relative'
      }`}>
        {children}
      </span>
      {isCollapsed && (
        <div className="absolute left-full ml-2 px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
          {children}
        </div>
      )}
    </NavLink>
  );

  return (
    <div 
      className={`h-screen bg-white border-r border-gray-200 fixed left-0 top-0 transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      } shadow-lg z-40`}
    >
      <button
        onClick={() => onToggle(!isCollapsed)}
        className="absolute -right-3 top-8 bg-white border border-gray-200 rounded-full p-1.5 shadow-md hover:bg-gray-50 transition-transform duration-300 hover:scale-110 z-50"
      >
        {isCollapsed ? 
          <ChevronRight className="h-4 w-4 text-gray-600" /> : 
          <ChevronLeft className="h-4 w-4 text-gray-600" />
        }
      </button>

      <div className="p-6">
        <div className={`transition-all duration-300 overflow-hidden ${
          isCollapsed ? 'h-12' : 'h-20'
        }`}>
          <h1 className={`font-heading text-2xl text-center mb-8 transition-all duration-300`}>
            {isCollapsed ? 'D' : 'Dishly'}
          </h1>
        </div>
        <nav className="space-y-2">
          <NavItem to="/" icon={Home}>Home</NavItem>
          <NavItem to="/generator" icon={Sparkles}>AI Recipe Generator</NavItem>
          <NavItem to="/history" icon={History}>History</NavItem>
        </nav>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
        <div className="flex flex-col space-y-2">
          <NavItem to="/profile" icon={User}>Profile</NavItem>
          <button
            onClick={() => signOut(auth)}
            className="flex items-center p-3 rounded-lg text-black hover:bg-gray-100 w-full transition-all duration-300 group relative"
          >
            <LogOut className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
              isCollapsed ? 'transform group-hover:scale-110' : ''
            }`} />
            <span className={`ml-3 transition-all duration-300 ${
              isCollapsed 
                ? 'w-0 opacity-0 absolute' 
                : 'w-auto opacity-100 relative'
            }`}>
              Sign Out
            </span>
            {isCollapsed && (
              <div className="absolute left-full ml-2 px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                Sign Out
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};