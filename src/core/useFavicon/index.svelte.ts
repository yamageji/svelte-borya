import type { ConfigurableDocument } from '../_configurable';
import { defaultDocument } from '../_configurable';

export interface UseFaviconOptions extends ConfigurableDocument {
  baseUrl?: string;
  rel?: string;
}

export function useFavicon(
  newIcon: string | null | undefined = null,
  options: UseFaviconOptions = {}
) {
  const { baseUrl = '', rel = 'icon', document = defaultDocument } = options;

  let favicon = $state(newIcon);

  const applyIcon = (icon: string) => {
    const elements = document?.head.querySelectorAll<HTMLLinkElement>(`link[rel*="${rel}"]`);
    if (!elements || elements.length === 0) {
      const link = document?.createElement('link');
      if (link) {
        link.rel = rel;
        link.href = `${baseUrl}${icon}`;
        link.type = `image/${icon.split('.').pop()}`;
        document?.head.append(link);
      }
      return;
    }
    elements?.forEach((el) => (el.href = `${baseUrl}${icon}`));
  };

  $effect(() => {
    if (typeof favicon === 'string') applyIcon(favicon);
  });

  return {
    get value() {
      return favicon;
    },
    set value(v: string | null) {
      favicon = v;
    }
  };
}

export type UseFaviconReturn = ReturnType<typeof useFavicon>;
