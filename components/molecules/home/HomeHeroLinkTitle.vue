<template>
  <span class="relative flex items-center">
    <span
      :style="{
        '-webkit-text-fill-color': showAnimation ? 'white' : 'black',
      }"
      class="
        title
        uppercase
        font-inter font-black
        text-center text-white text-display-4
        sm:text-display-3
        xl:text-display-2
        2xl:text-display-1
        group-hover:text-white
        transition-colors
        duration-500
        ease-in-out
      "
    >
      {{ title }}
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

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
})
</script>

<style scoped>
.title {
  -webkit-text-stroke: 1px white;
}

/* .title {
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
} */
</style>
