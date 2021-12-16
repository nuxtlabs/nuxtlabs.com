<template>
  <div class="py-8 sm:py-16 mx-auto overflow-hidden">
    <!-- component
      :is="page.logoAnimation"
      :show-animation="true"
      class="h-24 w-24 mx-auto mb-12"
    />
    <h1
      class="text-3xl sm:text-4xl text-center text-white font-semibold tracking-tight pb-8"
    >
      {{ page.title }}
    </h1 -->
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
