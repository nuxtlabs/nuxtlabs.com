<template>
  <span class="relative flex items-center overflow-hidden">
    <span
      ref="titleText"
      :style="{
        '-webkit-text-fill-color': showAnimation ? 'white' : '#080808',
      }"
      class="
        title
        uppercase
        font-black
        text-center text-white text-display-4
        xs:text-display-3
        sm:text-display-2
        xl:text-display-2
        2xl:text-display-1
        group-hover:text-white
        transition-colors
        duration-500
        ease-in-out
        origin-right
        opacity-0
      "
    >
      {{ title }}
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api'
import { useMotion } from '@vueuse/motion'

export default defineComponent({
  props: {
    showAnimation: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
  },
  setup() {
    const titleText = ref()

    onMounted(() => {
      useMotion(titleText, {
        initial: {
          y: titleText.value?.clientHeight,
          opacity: 0,
          rotateX: -40,
          rotateY: 4,
          rotateZ: -4,
          scale: 0.9,
        },
        enter: {
          y: 0,
          opacity: 1,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          scale: 1,
          transition: {
            duration: 600,
            ease: 'circOut',
          },
        },
      })
    })

    return { titleText }
  },
})
</script>

<style scoped>
.title {
  -webkit-text-stroke: 1px white;
}
</style>
