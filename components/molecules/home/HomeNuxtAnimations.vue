<template>
  <div class="absolute top-0 -left-8 mx-auto">
    <NuxtLogoAnimation
      :show-animation="showAnimation"
      class="h-54 md:h-92 overflow-visible"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '#app'

export default defineComponent({
  props: {
    showAnimation: {
      type: Boolean,
      required: true,
    },
  },
})
</script>
