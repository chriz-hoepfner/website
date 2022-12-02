const pluginSortImports = require('@trivago/prettier-plugin-sort-imports');
const pluginTailwindCss = require('prettier-plugin-tailwindcss');

module.exports = {
  plugins: [
    {
      parsers: {
        typescript: {
          ...pluginSortImports.parsers.typescript,
          parse: pluginTailwindCss.parsers.typescript.parse,
        },
      },
    },
  ],
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '^middleware/(.*)$',
    '^types/(.*)$',
    '^constants/(.*)$',
    '^api/(.*)$',
    '^lib/(.*)$',
    '^clients/(.*)$',
    '^helpers/(.*)$',
    '^hooks/(.*)$',
    '^state/(.*)$',
    '^components/(.*)$',
    '^(public/(.*)|[./](.*).(png|jpg))$',
    '^[./]',
  ],
};
