<template>
  <div class="relative w-full">
    <AppHeader :projects="layout.projects" />
    <slot />
  </div>
</template>

<script>
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $docus } = useContext()

    const layout = computed(() => $docus.layout.value)

    return {
      layout,
    }
  },
})
</script>
