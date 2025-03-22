
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dumbbell, Calendar, TimerOff } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="bg-background shadow-md py-4 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <Dumbbell className="h-8 w-8 text-smartfit-orange" />
              <span className="ml-2 text-2xl font-bold text-foreground">
                Esperto<span className="text-smartfit-orange">Fit</span>
              </span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" currentPath={location.pathname}>
              <Dumbbell className="h-5 w-5 mr-1" />
              Treinos
            </NavLink>
            <NavLink to="/timer" currentPath={location.pathname}>
              <TimerOff className="h-5 w-5 mr-1" />
              Timer
            </NavLink>
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </nav>
          
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, children, currentPath }: { to: string; children: React.ReactNode; currentPath: string }) => {
  const isActive = currentPath === to;
  
  return (
    <Link
      to={to}
      className={`flex items-center px-3 py-2 rounded-lg transition-all duration-300 ${
        isActive 
          ? "bg-smartfit-orange text-white font-medium" 
          : "text-foreground hover:bg-secondary"
      }`}
    >
      {children}
    </Link>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md text-foreground focus:outline-none"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-card rounded-lg shadow-lg py-2 z-50 animate-scale-in">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`flex items-center px-4 py-3 hover:bg-secondary ${
              location.pathname === "/" ? "text-smartfit-orange font-medium" : "text-foreground"
            }`}
          >
            <Dumbbell className="h-5 w-5 mr-2" />
            Treinos
          </Link>
          <Link
            to="/timer"
            onClick={() => setIsOpen(false)}
            className={`flex items-center px-4 py-3 hover:bg-secondary ${
              location.pathname === "/timer" ? "text-smartfit-orange font-medium" : "text-foreground"
            }`}
          >
            <TimerOff className="h-5 w-5 mr-2" />
            Timer
          </Link>
          <div className="px-4 py-3 flex justify-center">
            <ThemeToggle />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
