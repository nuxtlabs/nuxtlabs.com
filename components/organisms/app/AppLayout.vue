<template>
  <div class="w-full h-screen">
    <div class="cursor cursor--small"></div>
    <canvas class="cursor cursor--canvas" resize></canvas>
    <slot v-if="layout.header" name="header">
      <AppHeader :aside="layout.aside" />
    </slot>

    <div class="lg:flex h-full" :class="layout.fluid ? '' : 'd-container'">
      <slot v-if="layout.aside" name="aside">
        <AppAside :class="layout.asideClass" />
      </slot>

      <!-- TODO: possibility to unwrap div ? -->
      <div class="flex-auto w-full min-w-0 lg:static lg:max-h-screen mt-8 fix-wrapper">
        <slot />
      </div>
    </div>

    <slot v-if="layout.footer" name="footer"><AppFooter /></slot>

    <PoweredByDocus v-if="$docus.settings.credits" />
  </div>
</template>

<script>
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $docus } = useContext()

    const layout = computed(() => $docus.layout.value)

    return {
      layout
    }
  }
})
</script>
<style lang="postcss">
.fix-wrapper > div {
  @apply h-full;
  padding-top: calc(var(--header-height));
}
body {
  cursor: none;
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
