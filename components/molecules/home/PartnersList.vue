<template>
  <ul
    class="flex flex-col md:flex-row space-y-8 md:space-x-16 space-x-0 justify-center items-end"
  >
    <li
      v-for="partner in partners"
      :key="partner.title"
      class="flex flex-col items-center justify-center"
    >
      <Component
        :is="partner.animComponent"
        :alt="partner.title"
        class="h-40 w-40"
      />
      <h5 class="font-semibold text-primary-900 text-2xl">
        {{ partner.title }}
      </h5>
      <p class="text-md">
        {{ partner.description }}
      </p>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    partners: {
      type: Array,
      default: () => [],
    },
  },
})
</script>
