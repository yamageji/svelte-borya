<script lang="ts">
  import { onMount } from 'svelte';
  import { lockscroll } from '@svelte-put/lockscroll';
  import Navigation from './Navigation.svelte';
  import NavigationUtilItems from './NavigationUtilItems.svelte';

  let dialog = $state<HTMLDialogElement>();
  let closeButton = $state<HTMLButtonElement>();
  let locked = $state(false);

  let tabbableElements: NodeListOf<HTMLElement> | undefined;
  let firstTabbable: HTMLElement | undefined;
  let lastTabbable: HTMLElement | undefined;

  const openMenu = () => {
    if (!dialog) return;
    dialog.showModal();
    locked = true;
  };

  const closeMenu = () => {
    if (!dialog) return;
    dialog.close();
    locked = false;
  };

  const closeMenuOnBackdropClick = (event: MouseEvent) => {
    if (!dialog) return;
    const elRect = dialog.getBoundingClientRect();
    const isInDialog =
      elRect.top <= event.clientY &&
      event.clientY <= elRect.bottom &&
      elRect.left <= event.clientX &&
      event.clientX <= elRect.right;
    if (isInDialog) return;
    dialog.close();
    locked = false;
  };

  const onKeydownTabKeyFirstTabbable = (event: KeyboardEvent) => {
    if (!lastTabbable || event.key !== 'Tab' || !event.shiftKey) {
      return;
    }
    event.preventDefault();
    lastTabbable.focus();
  };

  const onKeydownTabKeyLastTabbable = (event: KeyboardEvent) => {
    if (!firstTabbable || event.key !== 'Tab' || event.shiftKey) {
      return;
    }
    event.preventDefault();
    firstTabbable.focus();
  };

  const handleMediaQueryChange = (event: MediaQueryListEvent) => {
    if (!dialog) return;
    if (event.matches) {
      dialog.close();
      locked = false;
    }
  };

  onMount(() => {
    // Focus control for the drawer
    tabbableElements = dialog?.querySelectorAll('a[href], button:not(:disabled)');
    if (!tabbableElements) return;
    firstTabbable = tabbableElements[0];
    lastTabbable = tabbableElements[tabbableElements.length - 1];
    firstTabbable.addEventListener('keydown', onKeydownTabKeyFirstTabbable, false);
    lastTabbable.addEventListener('keydown', onKeydownTabKeyLastTabbable, false);

    // Watch for media query changes to close the dialog
    const mediaQueryList = window.matchMedia('(min-width: 1024px)');
    mediaQueryList.addEventListener('change', handleMediaQueryChange);
  });
</script>

<header class="sticky top-0 flex items-center justify-between gap-6 px-2 py-2">
  <a
    href="/"
    class="flex items-center gap-1 rounded-r-full bg-white py-2 pl-1 pr-4 text-2xl font-bold dark:bg-neutral-900"
  >
    <img src="/logo_beta.svg" alt="" class="size-10" />
    SvelteBorya
  </a>

  <nav class="hidden items-center rounded-l-full bg-white px-4 lg:flex dark:bg-neutral-900">
    <div
      class="relative flex gap-2 pr-2 after:absolute after:right-0 after:top-2 after:h-6 after:w-px after:bg-neutral-400"
    >
      <a href="/" class="p-2">Guide</a>
      <a href="/functions" class="p-2">Functions</a>
    </div>
    <NavigationUtilItems />
  </nav>

  <div class="mr-4 lg:hidden">
    <button
      type="button"
      onclick={openMenu}
      class="-mr-2 grid place-content-center rounded-full bg-white p-2 duration-150 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800"
    >
      <span class="hidden">open menu</span>
      <span class="iconify size-7 text-neutral-950 mdi--menu dark:text-neutral-50"></span>
    </button>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <dialog
      bind:this={dialog}
      onclick={(event) => closeMenuOnBackdropClick(event)}
      class="absolute bottom-auto left-auto right-2 top-3 max-h-[calc(svh)] max-w-full rounded-md bg-neutral-50 p-6 backdrop:bg-neutral-500/20 backdrop:backdrop-blur-sm open:block dark:bg-neutral-900"
    >
      <div class="flex flex-row items-start justify-between gap-10">
        <Navigation {closeMenu} />
        <button
          type="button"
          bind:this={closeButton}
          onclick={closeMenu}
          class="sticky -top-2 -mr-2 -mt-2 grid place-content-center rounded-full p-2 duration-150 hover:bg-neutral-200 dark:hover:bg-neutral-800"
        >
          <span class="hidden">close menu</span>
          <span class="iconify size-7 text-neutral-950 mdi--close dark:text-neutral-50"></span>
        </button>
      </div>

      <div class="mt-5 w-full border-t border-t-neutral-400 pt-2">
        <NavigationUtilItems />
      </div>
    </dialog>
  </div>
</header>

<svelte:body use:lockscroll={locked} />
