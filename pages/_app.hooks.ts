import { useEffect } from 'react';

import { useDarkModeQuery } from 'hooks/mediaQueries';

export const useDarkModeDetection = () => {
  const { isDarkMode } = useDarkModeQuery();

  const updateDarkMode = (prefersDarkMode: boolean) => {
    if (prefersDarkMode) {
      document.querySelector('html')?.classList.add('dark');
    } else {
      document.querySelector('html')?.classList.remove('dark');
    }
  };

  useEffect(() => {
    updateDarkMode(isDarkMode);
  }, [isDarkMode]);
};
