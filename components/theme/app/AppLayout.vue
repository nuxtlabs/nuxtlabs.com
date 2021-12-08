<template>
  <div class="relative w-full">
    <AppHeader :projects="layout.projects" />
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '#app'
import { useDocusLayout } from '#docus'

export default defineComponent({
  setup() {
    return {
      layout: useDocusLayout(),
    }
  },
})
</script>
