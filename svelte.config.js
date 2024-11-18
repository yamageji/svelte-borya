import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const theme = ['github-dark'];
const highlighter = await createHighlighter({
  themes: theme,
  langs: ['javascript', 'typescript', 'svelte']
});

const mdsvexOptions = {
  highlight: {
    highlighter: async (code, lang = 'text') => {
      const html = escapeSvelte(
        highlighter.codeToHtml(code, {
          lang,
          themes: {
            dark: 'github-dark',
            light: 'github-dark'
          }
        })
      );
      return `{@html \`${html}\` }`;
    }
  }
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess(), mdsvex({ ...mdsvexOptions })],

  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),
    alias: {
      $components: 'src/components',
      '$components/*': 'src/components/*'
    }
  },

  extensions: ['.svelte', '.svx']
};

export default config;
