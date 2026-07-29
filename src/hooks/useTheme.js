import { useState, useEffect } from 'react';

export default function useTheme() {
  const [theme] = useState('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    root.classList.remove('light');
    document.body.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  }, []);

  const toggleTheme = () => {
    // Locked to dark mode
  };

  return [theme, toggleTheme];
}
