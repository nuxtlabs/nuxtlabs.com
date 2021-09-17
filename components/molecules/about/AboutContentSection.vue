<template>
  <section class="p-12">
    <h2 class="uppercase font-bold opacity-70 mb-2">
      {{ category }}
    </h2>
    <h3 class="text-3xl font-bold mb-3">
      {{ title }}
    </h3>
    <Markdown />
  </section>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: '',
    },
  },
})
</script>
