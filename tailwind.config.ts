import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',

  theme: {
    extend: {
      gridTemplateRows: {
        main: 'auto 1fr auto'
      }
    }
  },

  plugins: [containerQueries, aspectRatio]
} as Config;
