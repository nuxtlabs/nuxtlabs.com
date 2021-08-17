<template>
  <ul class="flex-1 flex flex-col items-end justify-center space-y-4">
    <li v-for="(title, index) in titles" :key="index">
      <h1 class="text-display-1 font-inter italic title-style font-bold uppercase">{{ title }}</h1>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    titles: {
      type: Array,
      default: () => [
        'NuxtJS',
        'Docus',
        'Vue Telescope'
      ]
    }
  },
  setup() {

  },
})
</script>
<style lang="postcss">
.title-style {
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
  color: black;
}
</style>
