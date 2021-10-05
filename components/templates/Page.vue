<template>
  <div ref="root" class="py-8 sm:py-16 max-w-2xl mx-auto px-4">
    <DocusContent :document="page" />
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { useMotion } from '@vueuse/motion'

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
  setup() {
    const root = ref(null)
    useMotion(root, {
      initial: {
        opacity: 0,
      },
      enter: {
        opacity: 1,
      },
    })

    return { root }
  },
})
</script>
