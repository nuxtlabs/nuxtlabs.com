<template>
  <div
    class="h-full flex justify-center items-center py-12"
    :class="borderClass"
  >
    <div class="flex flex-col text-center sm:text-right">
      <p class="pb-2">
        <Markdown use="title" unwrap="p" />
      </p>
      <p class="text-5xl font-bold pb-2">
        <Markdown use="number" unwrap="p" />
      </p>
      <MarketingLink
        :to="to"
        blank
        underline-custom-class="hidden sm:block right-0 bg-white"
        class="underline sm:no-underline self-center sm:self-end"
      >
        <Markdown use="linkText" unwrap="p" />
      </MarketingLink>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    to: {
      type: String,
      required: true,
    },
    borderClass: {
      type: String,
      default: '',
    },
  },
})
</script>
