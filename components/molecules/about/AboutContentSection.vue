<template>
  <section class="sm:p-6 lg:p-12">
    <h2 class="uppercase font-bold opacity-70 mb-2">
      <Markdown use="category" unwrap="p" />
    </h2>
    <h3 class="text-3xl font-bold mb-3">
      <Markdown use="title" unwrap="p" />
    </h3>
    <Markdown use="content" />
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
