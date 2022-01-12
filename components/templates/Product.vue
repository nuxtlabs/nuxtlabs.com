<template>
  <div class="py-8 sm:py-28 mx-auto overflow-hidden">
    <DocusContent :document="page" class="docus-content" />
  </div>
</template>

<script lang="ts">
import { useMotion } from '@vueuse/motion'
import { defineComponent, ref } from '@nuxtjs/composition-api'

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
