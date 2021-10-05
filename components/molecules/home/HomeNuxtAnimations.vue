<template>
  <div class="pointer-events-none fixed top-0 left-0 w-full h-full">
    <div class="absolute top-1/2 md:top-1/3 left-1/2 md:-left-6">
      <NuxtLogoAnimation
        :show-animation="showAnimation"
        class="h-54 md:h-72 overflow-visible"
      />
    </div>
    <NuxtGemsAnimation :show-animation="showAnimation" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    showAnimation: {
      type: Boolean,
      required: true,
    },
  },
})
</script>
