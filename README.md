# SveltBorya
SvelteBorya is an unofficial project aimed at reimplementing [VueUse](https://vueuse.org/) with [Svelte 5](https://svelte.dev/).
> [!NOTE]
> Please note that my primary purpose is for learning.

## Progress
### State
- [ ] createGlobalState
- [ ] createInjectionState
- [ ] createSharedComposable
- [ ] injectLocal
- [ ] provideLocal
- [ ] useAsyncState
- [ ] useDebouncedRefHistory
- [ ] useLastChanged
- [x] useLocalStorage
- [ ] useManualRefHistory
- [ ] useRefHistory
- [x] useSessionStorage
- [x] useStorage
- [ ] useStorageAsync
- [ ] useThrottledRefHistory

### Browser
- [ ] useBluetooth
- [x] useBreakpoints
- [ ] useBroadcastChannel
- [x] useBrowserLocation
- [x] useClipboard
- [x] useClipboardItems
- [x] useColorMode
- [ ] useCssVar
- [x] useDark
- [x] useEventListener
- [x] useEyeDropper
- [x] useFavicon
- [ ] useFileDialog
- [ ] useFileSystemAccess
- [ ] useFullscreen
- [ ] useGamepad
- [ ] useImage
- [ ] useMediaControls
- [x] useMediaQuery
- [ ] useMemory
- [ ] useObjectUrl
- [ ] usePerformanceObserver
- [x] usePermission
- [x] usePreferredColorScheme
- [x] usePreferredContrast
- [x] usePreferredDark
- [x] usePreferredLanguages
- [x] usePreferredReducedMotion
- [ ] useScreenOrientation
- [ ] useScreenSafeArea
- [ ] useScriptTag
- [ ] useShare
- [ ] useStyleTag
- [ ] useTextareaAutosize
- [ ] useTextDirection
- [ ] useTitle
- [ ] useUrlSearchParams
- [ ] useVibrate
- [ ] useWakeLock
- [ ] useWebNotification
- [ ] useWebWorker
- [ ] useWebWorkerFn

### Animation
- [ ] useAnimate
- [ ] useInterval
- [ ] useIntervalFn
- [ ] useNow
- [ ] useRafFn
- [ ] useTimeout
- [x] useTimeoutFn
- [ ] useTimestamp
- [ ] useTransition

### Component
- [ ] computedInject
- [ ] createReusableTemplate
- [ ] createTemplatePromise
- [ ] templateRef
- [ ] tryOnBeforeMount
- [ ] tryOnBeforeUnmount
- [ ] tryOnMounted
- [ ] tryOnScopeDispose
- [ ] tryOnUnmounted
- [ ] unrefElement
- [ ] useCurrentElement
- [x] useMounted
- [ ] useTemplateRefsList
- [ ] useVirtualList
- [ ] useVModel
- [ ] useVModels

### Utilities
- [ ] createEventHook
- [ ] createUnrefFn
- [ ] get
- [ ] isDefined
- [ ] makeDestructurable
- [ ] set
- [ ] useAsyncQueue
- [ ] useBase64
- [ ] useCached
- [ ] useCloned
- [ ] useConfirmDialog
- [ ] useCounter
- [ ] useCycleList
- [ ] useDebounceFn
- [ ] useEventBus
- [ ] useMemoize
- [ ] useOffsetPagination
- [ ] usePrevious
- [ ] useStepper
- [x] useSupported
- [ ] useThrottleFn
- [ ] useTimeoutPoll
- [ ] useToggle
- [ ] useToNumber
- [ ] useToString

## Developing
Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev
# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

To create a production version of your showcase app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
