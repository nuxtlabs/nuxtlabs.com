<template>
  <div class="py-1 px-2 rounded-md w-full hover:bg-gray-100">
    <div class="flex space-x-2 items-center w-full">
      <img
        :src="`/img/products/${icon.name}`"
        :alt="icon.alt"
        class="w-12 h-12"
      />
      <div>
        <h5 class="font-bold text-md">
          {{ title }}
        </h5>
        <p class="text-sm text-gray-500">
          {{ subTitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '#app'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    icon: {
      type: Object,
      default: () => {},
    },
  },
})
</script>
