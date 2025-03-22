
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Switch } from './ui/switch';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div className="flex items-center space-x-2">
      <Sun className={`h-4 w-4 ${isDark ? 'text-muted-foreground' : 'text-smartfit-orange'}`} />
      <Switch 
        checked={isDark}
        onCheckedChange={toggleTheme}
        aria-label="Toggle dark mode"
      />
      <Moon className={`h-4 w-4 ${isDark ? 'text-smartfit-orange' : 'text-muted-foreground'}`} />
    </div>
  );
};

export default ThemeToggle;
