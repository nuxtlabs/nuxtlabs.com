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
        :name="linkText"
        :to="link"
        blank
        underline-custom-class="hidden sm:block right-0"
        class="underline sm:no-underline self-center sm:self-end"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    linkText: {
      type: String,
      required: true,
    },
    link: {
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
