<template>
  <span class="relative flex items-center">
    <span class="contents absolute left-0 -translate-x-full">
      <HomeHeroLinkSubtitleAnimation
        class="mx-4"
        :show-animation="showAnimation"
        :sub-title="subTitle"
      />
    </span>
    <span
      :style="{
        '-webkit-text-fill-color': showAnimation ? 'white' : 'black',
      }"
      class="
        title
        text-white text-display-5
        sm:text-display-3
        xl:text-display-2
        2xl:text-display-1
        whitespace-nowrap
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
</style>
