import type { EntryGenerator } from './$types';

export function load({ params }) {
  return {
    slug: params.slug
  };
}

export const entries: EntryGenerator = () => {
  return [{ slug: 'useBreakpoints' }, { slug: 'useBrowserLocation' }, { slug: 'useClipboard' }];
};

export const prerender = true;
