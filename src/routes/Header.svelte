<script lang="ts">
  let isOpen = $state(false);
  let dialog = $state<HTMLDialogElement>();
  let closeButton = $state<HTMLButtonElement>();

  const openMenu = () => {
    if (!dialog) return;
    isOpen = true;
    dialog.showModal();
  };

  const closeMenu = () => {
    if (!dialog) return;
    isOpen = false;
    dialog.close();
  };

  const closeMenuByBackdrop = (event: MouseEvent) => {
    if (!dialog) return;
    const elRect = dialog.getBoundingClientRect();
    const isInDialog =
      elRect.top <= event.clientY &&
      event.clientY <= elRect.bottom &&
      elRect.left <= event.clientX &&
      event.clientX <= elRect.right;
    if (isInDialog) return;
    isOpen = false;
    dialog.close();
  };
</script>

<header
  class="supports-backdrop-blur:bg-neutral-50/95 sticky top-0 flex items-center justify-between gap-6 px-2 py-2"
>
  <a href="/" class="rounded-full bg-neutral-50 px-4 py-2 text-2xl font-bold dark:bg-neutral-900"
    >SvelteBorya</a
  >

  <nav
    class="hidden items-center gap-4 rounded-full bg-neutral-50 px-4 lg:flex dark:bg-neutral-900"
  >
    <a href="/" class="p-2">Guide</a>
    <a href="/functions" class="p-2">Functions</a>
    <a href="https://github.com/yamageji/svelte-borya" class="grid place-content-center">
      <span class="hidden">github</span>
      <span class="iconify size-6 mdi--github"></span>
    </a>
  </nav>

  <div class="mr-4 lg:hidden">
    <button type="button" onclick={openMenu} class="grid place-content-center">
      <span class="hidden">open menu</span>
      <span class="iconify size-7 text-neutral-950 mdi--menu"></span>
    </button>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <dialog
      bind:this={dialog}
      onclick={(event) => closeMenuByBackdrop(event)}
      class="absolute bottom-auto left-auto right-4 top-4 flex-col gap-4 rounded-md p-2 open:flex"
    >
      <button type="button" bind:this={closeButton} onclick={closeMenu} class="self-end">
        <span class="hidden">close menu</span>
        <span class="iconify size-7 text-neutral-950 mdi--close"></span>
      </button>
      <div class="px-4 pb-4">簡易モーダル</div>
    </dialog>
  </div>
</header>
