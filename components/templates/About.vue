<template>
  <div
    class="py-8 mt-12 xs:mt-14 sm:mt-16 md:mt-18 lg:mt-24 sm:py-16 max-w-6xl mx-auto px-4 sm:px-8 lg:px-20"
  >
    <DocusContent :document="page" />
  </div>
</template>

<script>
import { defineComponent } from '#app'

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
