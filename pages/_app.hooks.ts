import { useEffect } from 'react';

export const useDarkModeDetection = () => {
  const updateDarkMode = (prefersDarkMode: boolean) => {
    if (prefersDarkMode) {
      document.querySelector('html')?.classList.add('dark');
    } else {
      document.querySelector('html')?.classList.remove('dark');
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    updateDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener('change', () =>
      updateDarkMode(mediaQuery.matches),
    );
  }, []);
};
