<template>
  <ul class="flex items-center justify-center">
    <li v-for="link in socialLinks" :key="link.alt">
      <Link :to="link.href" :aria-label="link.alt">
        <component :is="link.icon" :alt="link.alt" :class="iconClass" />
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
    iconClass: {
      type: String,
      default: 'w-6 h-6 hover:text-primary-700',
    },
  },
})
</script>
