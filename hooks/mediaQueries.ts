import { useEffect, useState } from 'react';

export const useDarkModeQuery = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const updateDarkMode = (prefersDarkMode: boolean) => {
    setIsDarkMode(prefersDarkMode);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    updateDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener('change', () =>
      updateDarkMode(mediaQuery.matches),
    );
  }, []);

  return { isDarkMode };
};
