<template>
  <div class="relative">
    <div
      class="flex flex-col space-y-8 max-w-7xl mx-auto pt-12 pb-92 sm:pb-80 md:pb-60 lg:pb-76 2xl:pb-92 px-4 sm:px-8"
    >
      <h1 class="font-bold text-display-4">
        <Markdown use="title" unwrap="p" />
      </h1>
      <p class="w-full lg:w-2/3 text-lg">
        <Markdown use="description" unwrap="p" />
      </p>
      <div>
        <Markdown use="button" unwrap="p" />
      </div>
      <div
        class="flex space-x-2 items-center"
        :class="slots.button ? 'pt-16' : 'pt-4'"
      >
        <p class="font-semibold text-lg">
          Discover how we can make it work together
        </p>
        <img :src="`/img/arrow-down.svg`" alt="bottom arrow" class="h-8 w-8" />
      </div>
    </div>
    <Markdown use="image" unwrap="p" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup(_, context) {
    return {
      slots: context.slots,
    }
  },
})
</script>
