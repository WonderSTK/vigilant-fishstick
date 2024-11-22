import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../slices/themeSlice';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <button onClick={handleToggle} className="p-2">
      {darkMode ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggle;

