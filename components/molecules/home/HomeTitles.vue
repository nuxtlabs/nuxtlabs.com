<template>
  <ul class="flex-1 flex flex-col items-end justify-center space-y-4">
    <li v-for="(title, index) in titles" :key="index">
      <h1 class="text-display-1 title title-shadow">{{ title }}</h1>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const titles = ref([
      'NuxtJS',
      'Docus',
      'Vue Telescope'
    ])

    return {
      titles
    }
  }
})
</script>
