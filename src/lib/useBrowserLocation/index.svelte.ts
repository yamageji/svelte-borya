import type { ConfigurableWindow } from '../_configurable';
import { defaultWindow } from '../_configurable';
import { useEventListener } from '../useEventListener/index.svelte';

export interface BrowserLocationState {
  readonly trigger: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly state?: any;
  readonly length?: number;
  readonly origin?: string;
  hash?: string;
  host?: string;
  hostname?: string;
  href?: string;
  pathname?: string;
  port?: string;
  protocol?: string;
  search?: string;
}

export function useBrowserLocation(options: ConfigurableWindow = {}) {
  const { window = defaultWindow } = options;

  let hash = $state<string | undefined>('');
  let host = $state<string | undefined>('');
  let hostname = $state<string | undefined>('');
  let href = $state<string | undefined>('');
  let pathname = $state<string | undefined>('');
  let port = $state<string | undefined>('');
  let protocol = $state<string | undefined>('');
  let search = $state<string | undefined>('');

  $effect(() => {
    if (!hash || !window || window.location['hash'] === hash) return;
    window.location['hash'] = hash;
  });
  $effect(() => {
    if (!host || !window || window.location['host'] === host) return;
    window.location['host'] = host;
  });
  $effect(() => {
    if (!hostname || !window || window.location['hostname'] === hostname) return;
    window.location['hostname'] = hostname;
  });
  $effect(() => {
    if (!href || !window || window.location['href'] === href) return;
    window.location['href'] = href;
  });
  $effect(() => {
    if (!pathname || !window || window.location['pathname'] === pathname) return;
    window.location['pathname'] = pathname;
  });
  $effect(() => {
    if (!port || !window || window.location['port'] === port) return;
    window.location['port'] = port;
  });
  $effect(() => {
    if (!protocol || !window || window.location['protocol'] === protocol) return;
    window.location['protocol'] = protocol;
  });
  $effect(() => {
    if (!search || !window || window.location['search'] === search) return;
    window.location['search'] = search;
  });

  const buildState = (trigger: string): BrowserLocationState => {
    const { state, length } = window?.history || {};
    const { origin } = window?.location || {};

    hash = window?.location?.hash;
    host = window?.location?.host;
    hostname = window?.location?.hostname;
    href = window?.location?.href;
    pathname = window?.location?.pathname;
    port = window?.location?.port;
    protocol = window?.location?.protocol;
    search = window?.location?.search;

    return {
      get trigger() {
        return trigger;
      },
      get state() {
        return state;
      },
      get length() {
        return length;
      },
      get origin() {
        if (!origin) return '';
        return origin;
      },
      get hash() {
        if (!hash) return '';
        return hash;
      },
      set hash(value: string) {
        hash = value;
      },
      get host() {
        if (!host) return '';
        return host;
      },
      set host(value: string) {
        host = value;
      },
      get hostname() {
        if (!hostname) return '';
        return hostname;
      },
      set hostname(value: string) {
        hostname = value;
      },
      get href() {
        if (!href) return '';
        return href;
      },
      set href(value: string) {
        href = value;
      },
      get pathname() {
        if (!pathname) return '';
        return pathname;
      },
      set pathname(value: string) {
        pathname = value;
      },
      get port() {
        if (!port) return '';
        return port;
      },
      set port(value: string) {
        port = value;
      },
      get protocol() {
        if (!protocol) return '';
        return protocol;
      },
      set protocol(value: string) {
        protocol = value;
      },
      get search() {
        if (!search) return '';
        return search;
      },
      set search(value: string) {
        search = value;
      }
    };
  };

  let state = $state(buildState('load'));

  if (window) {
    useEventListener(window, 'popstate', () => (state = buildState('popstate')), {
      passive: true
    });
    useEventListener(window, 'hashchange', () => (state = buildState('hashchange')), {
      passive: true
    });
  }

  return state;
}

export type UseBrowserLocationReturn = ReturnType<typeof useBrowserLocation>;
