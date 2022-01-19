<template>
  <ul class="flex items-center justify-center space-x-12">
    <li v-for="stat in stats" :key="stat.title">
      <h4 class="text-5xl font-semibold md:text-right">
        {{ stat.title }}
      </h4>
      <p class="text-md">
        {{ stat.description }}
      </p>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    stats: {
      type: Array,
      default: () => [],
    },
  },
})
</script>
