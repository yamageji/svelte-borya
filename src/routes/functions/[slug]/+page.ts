import type { EntryGenerator } from './$types';

const slugList = ['useBreakpoints', 'useBrowserLocation', 'useClipboard'];

export function load({ params }) {
  return {
    slug: params.slug
  };
}

export const entries: EntryGenerator = () => {
  return slugList.map((slug) => ({ slug }));
};

export const prerender = true;
