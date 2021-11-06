<template>
  <div class="py-8 mt-24 sm:py-16 max-w-6xl mx-auto px-4 lg:px-20">
    <DocusContent :document="page" />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  templateOptions: {
    aside: false,
    fluid: false,
  },
})
</script>
