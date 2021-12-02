<template>
  <div class="relative w-full">
    <AppHeader :projects="layout.projects" />
    <slot />
  </div>
</template>

<script>
import { computed, defineComponent } from '#app'
import { useDocusTheme } from '#docus'

export default defineComponent({
  setup() {
    const $theme = useDocusTheme()

    const layout = computed(() => $theme.value.layout)

    return {
      layout,
    }
  },
})
</script>
