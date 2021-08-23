<template>
  <div class="w-full h-screen">
    <slot v-if="layout.header" name="header">
      <AppHeader :aside="layout.aside" />
    </slot>

    <div class="flex h-full" :class="layout.fluid ? '' : 'd-container'">
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
</style>
