// eslint-disable-next-line @typescript-eslint/no-require-imports
const { addIconSelectors } = require('@iconify/tailwind');
import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import type { Config } from 'tailwindcss';

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',

  theme: {
    extend: {
      gridTemplateRows: {
        main: 'auto 1fr auto'
      },
      gridTemplateColumns: {
        functions: 'auto minmax(1px, 1fr)'
      }
    }
  },

  plugins: [containerQueries, aspectRatio, addIconSelectors(['mdi'])]
} as Config;
