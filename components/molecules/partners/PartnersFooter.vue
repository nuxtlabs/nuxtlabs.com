<template>
  <div
    class="pt-20 px-4 pb-8 flex flex-col items-center justify-center space-y-4"
  >
    <h2 class="text-xl sm:text-2xl font-semibold">
      <Markdown use="title" unwrap="p" />
    </h2>

    <p class="text-md sm:text-lg lg:w-2/3 2xl:w-2/5 text-center">
      <Markdown use="description" unwrap="p" />
    </p>

    <AppButton to="#">
      <Markdown use="buttonText" unwrap="p" />
    </AppButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    to: {
      type: String,
      default: '',
    },
  },
})
</script>
