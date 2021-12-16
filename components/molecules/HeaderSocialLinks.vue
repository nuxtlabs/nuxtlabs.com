<template>
  <ul class="flex items-center justify-center space-x-4">
    <li v-for="link in socialLinks" :key="link.title">
      <Link :to="link.href" :aria-label="link.alt">
        <component
          :is="link.icon"
          :alt="link.icon.alt"
          class="w-6 h-6 hover:text-gray-700"
        />
      </Link>
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
