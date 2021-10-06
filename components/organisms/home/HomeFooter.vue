<template>
  <div class="w-full flex flex-col space-y-1 font-mono text-sm xs:text-base">
    <div class="relative z-10 font-medium text-gray-400">{{ contact }}</div>
    <div class="relative z-10">
      <a
        :href="`mailto:${email}`"
        class="text-gray-300 font-medium hover:text-white"
        >{{ email }}</a
      >
    </div>
    <SocialLinks class="flex text-base space-x-4 text-gray-200 font-medium" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    contact: {
      type: String,
      default: 'Contact Us',
    },
    email: {
      type: String,
      default: 'hello@nuxtlabs.com',
    },
  },
})
</script>
