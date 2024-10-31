import { useSupported } from '../useSupported/index.svelte';

export interface EyeDropperOpenOptions {
  signal?: AbortSignal;
}

export interface EyeDropper {
  // eslint-disable-next-line @typescript-eslint/no-misused-new
  new (): EyeDropper;
  open: (options?: EyeDropperOpenOptions) => Promise<{ sRGBHex: string }>;
  [Symbol.toStringTag]: 'EyeDropper';
}

export interface UseEyeDropperOptions {
  initialValue?: string;
}

export function useEyeDropper(options: UseEyeDropperOptions = {}) {
  const { initialValue = '' } = options;
  const isSupported = useSupported(() => typeof window !== 'undefined' && 'EyeDropper' in window);
  let sRGBHex = $state(initialValue);

  async function open(openOptions?: EyeDropperOpenOptions) {
    if (!isSupported.value) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const eyeDropper: EyeDropper = new (window as any).EyeDropper();
    const result = await eyeDropper.open(openOptions);
    sRGBHex = result.sRGBHex;
    return {
      get value() {
        return sRGBHex;
      }
    };
  }

  return {
    isSupported,
    sRGBHex: {
      get value() {
        return sRGBHex;
      }
    },
    open
  };
}

export type UseEyeDropperReturn = ReturnType<typeof useEyeDropper>;
