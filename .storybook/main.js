const path = require('path');

module.exports = {
  staticDirs: ['../public'],
  stories: [
    '../components/**/*.stories.@(tsx)',
    '../pages/**/*.stories.@(tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-tailwind-dark-mode',
    'storybook-addon-turbo-build',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: config => {
    config.resolve.alias = {
      components: path.resolve(__dirname, '../components/'),
      types: path.resolve(__dirname, '../types/'),
      constants: path.resolve(__dirname, '../constants/'),
      hooks: path.resolve(__dirname, '../hooks/'),
      services: path.resolve(__dirname, '../services/'),
    };

    return config;
  },
};
