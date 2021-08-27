<template>
  <div class="w-full">
    <AppHeader/>
    <div class="relative flex w-full min-h-screen pt-20 z-0">
      <slot />
    </div>
<!--    <div class="cursor cursor--small"></div>
    <canvas class="cursor cursor--canvas" resize></canvas>

    <div class="flex h-full" :class="layout.fluid ? '' : 'd-container'">
      <slot v-if="layout.aside" name="aside">
        <AppAside :class="layout.asideClass" />
      </slot>
      <div class="flex-auto w-full min-w-0 lg:static lg:max-h-screen mt-8 fix-wrapper">
      </div>
    </div>

    <slot v-if="layout.footer" name="footer"><AppFooter /></slot>
  -->
  </div>
</template>

<style lang="postcss">
.fix-wrapper > div {
  @apply h-full;
  padding-top: calc(var(--header-height));
}

.cursor {
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
}
.cursor--small {
  width: 5px;
  height: 5px;
  left: -2.5px;
  top: -2.5px;
  border-radius: 50%;
  z-index: 11000;
  background: var(--color-text);
}
.cursor--canvas {
  width: 100vw;
  height: 100vh;
  z-index: 12000;
}
</style>
