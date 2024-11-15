import type { EntryGenerator } from './$types';

const slugList = [
  'useLocalStorage',
  'useSessionStorage',
  'useStorage',
  'useBreakpoints',
  'useBrowserLocation',
  'useClipboard',
  'useClipboardItems',
  'useColorMode',
  'useCssVar',
  'useDark',
  'useEventListener',
  'useEyeDropper',
  'useFavicon',
  'useMediaQuery',
  'usePermission',
  'usePreferredColorScheme',
  'usePreferredContrast',
  'usePreferredDark',
  'usePreferredLanguages',
  'usePreferredReducedMotion'
];

export function load({ params }) {
  return {
    slug: params.slug
  };
}

export const entries: EntryGenerator = () => {
  return slugList.map((slug) => ({ slug }));
};

export const prerender = true;
