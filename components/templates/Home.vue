<template>
  <DocusContent :document="page" class="relative w-full flex flex-col h-full overflow-hidden p-6 xl:p-8 2xl:p-16" />
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  templateOptions: {
    aside: false,
    fluid: true
  }
})
</script>
