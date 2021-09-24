<template>
  <div class="absolute top-0 left-0 w-full h-screen">
    <DocusContent
      :document="page"
      class="w-full h-full flex flex-col justify-end p-6 xl:p-8 2xl:p-16"
    />
    <!-- <OldHomeFooter /> -->
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
    fluid: true,
  },
})
</script>
