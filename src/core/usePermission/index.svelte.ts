import type { ConfigurableNavigator } from '../_configurable';
import { createSingletonPromise } from '../../shared';
import { defaultNavigator } from '../_configurable';
import { useEventListener } from '../useEventListener/index.svelte';

type DescriptorNamePolyfill =
  | 'accelerometer'
  | 'accessibility-events'
  | 'ambient-light-sensor'
  | 'background-sync'
  | 'camera'
  | 'clipboard-read'
  | 'clipboard-write'
  | 'gyroscope'
  | 'magnetometer'
  | 'microphone'
  | 'notifications'
  | 'payment-handler'
  | 'persistent-storage'
  | 'push'
  | 'speaker'
  | 'local-fonts';

export type GeneralPermissionDescriptor = PermissionDescriptor | { name: DescriptorNamePolyfill };

export interface UsePermissionOptions<Controls extends boolean> extends ConfigurableNavigator {
  controls?: Controls;
}

export type UsePermissionReturn = { readonly state: UsePermissionReturn };
export interface UsePermissionReturnWithControls {
  state: UsePermissionReturn;
  isSupported: boolean;
  query: () => Promise<PermissionStatus | undefined>;
}

export function usePermission(
  permissionDesc: GeneralPermissionDescriptor | GeneralPermissionDescriptor['name'],
  options?: UsePermissionOptions<false>
): UsePermissionReturn;
export function usePermission(
  permissionDesc: GeneralPermissionDescriptor | GeneralPermissionDescriptor['name'],
  options: UsePermissionOptions<true>
): UsePermissionReturnWithControls;
export function usePermission(
  permissionDesc: GeneralPermissionDescriptor | GeneralPermissionDescriptor['name'],
  options: UsePermissionOptions<boolean> = {}
): UsePermissionReturn | UsePermissionReturnWithControls {
  const { controls = false, navigator = defaultNavigator } = options;

  const isSupported = navigator && 'permissions' in navigator;

  let permissionStatus = $state.raw<PermissionStatus>();

  const desc =
    typeof permissionDesc === 'string'
      ? ({ name: permissionDesc } as PermissionDescriptor)
      : (permissionDesc as PermissionDescriptor);
  let state = $state.raw<PermissionState | undefined>();

  const update = () => {
    state = permissionStatus?.state ?? 'prompt';
  };

  useEventListener(permissionStatus, 'change', update);

  const query = createSingletonPromise(async () => {
    if (!isSupported) return;

    if (!permissionStatus) {
      try {
        permissionStatus = await navigator!.permissions.query(desc);
      } catch {
        permissionStatus = undefined;
      } finally {
        update();
      }
    }

    if (controls) return permissionStatus;
  });

  query();

  if (controls) {
    return {
      get state() {
        return state as unknown as UsePermissionReturn;
      },
      get isSupported() {
        if (!isSupported) return false;
        return isSupported;
      },
      query
    };
  } else {
    return {
      get state() {
        return state as unknown as UsePermissionReturn;
      }
    };
  }
}
