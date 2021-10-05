<template>
  <div class="pointer-events-none fixed top-0 left-0 w-full h-full">
    <VueTelescopeLinesAnimation :show-animation="showAnimation" />
    <div
      class="
        absolute
        bottom-1/8
        xs:-bottom-6
        md:-bottom-24
        left-2/6
        lg:left-2/6
        2xl:left-2/6
      "
    >
      <VueTelescopeLogoAnimation
        :show-animation="showAnimation"
        class="h-48 xs:h-72 2xl:h-108 md:h-84 overflow-hidden"
      />
    </div>
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
