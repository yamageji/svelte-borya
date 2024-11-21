import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';

const theme = ['github-dark', 'github-light'];
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
            light: 'github-light'
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
    adapter: adapter(),
    alias: {
      $components: 'src/components',
      '$components/*': 'src/components/*'
    }
  },

  extensions: ['.svelte', '.svx']
};

export default config;
