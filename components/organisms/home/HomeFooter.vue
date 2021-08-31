<template>
  <div class="w-full flex flex-col space-y-1">
    <div class="relative z-10 font-bold">{{ contact }}</div>
    <div class="relative z-10">{{ email }}</div>
    <SocialLinks class="hidden lg:flex text-base space-x-4" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    contact: {
      type: String,
      default: 'Contact Us'
    },
    email: {
      type: String,
      default: 'hello@nuxtlabs.com'
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
