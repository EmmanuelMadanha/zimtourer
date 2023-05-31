import { useState, useEffect } from 'react';

const DARK_MODE_KEY = 'darkMode';

export const useDarkMode = (): [boolean, () => void] => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const preferredColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedDarkMode = localStorage.getItem(DARK_MODE_KEY);
    setIsDarkMode(storedDarkMode !== null ? JSON.parse(storedDarkMode) : preferredColorScheme);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem(DARK_MODE_KEY, JSON.stringify(newDarkMode));
  };

  return [isDarkMode, toggleDarkMode];
};