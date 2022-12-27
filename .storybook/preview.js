import * as NextImage from 'next/image';

import '../styles/globals.css';

export const globalTypes = {
  darkMode: true,
};

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Pages',
        'Components',
        ['Layout', 'Shared', 'Profile', 'CV', 'Logos'],
      ],
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
};
