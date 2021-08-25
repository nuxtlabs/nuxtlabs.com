<template>
  <div class="w-full flex flex-col space-y-1">
    <div class="relative z-10">{{ location }}</div>
    <div class="font-bold relative z-10">hello@nuxtlabs.com</div>
    <SocialLinks class="hidden lg:flex text-base space-x-2" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    location: {
      type: String,
      default: 'Bordeaux, France'
    }
  }
})
</script>
<style lang="postcss">
.gradient {
  ~ div {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.35, 1);
  }
  &:hover {
    ~ div {
      @apply -bottom-60 -left-60
    }
  }
}
</style>
