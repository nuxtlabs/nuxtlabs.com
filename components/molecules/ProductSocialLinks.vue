<template>
  <ul class="flex space-x-4 items-center justify-center">
    <li v-for="link in socialLinks" :key="link.label">
      <AppLink :to="link.href" :aria-label="link.label">
        {{ link.label }}
      </AppLink>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    socialLinks: {
      type: Array,
      default: () => [],
    },
  },
})
</script>
