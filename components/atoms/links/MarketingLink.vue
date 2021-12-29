<template>
  <AppLink
    class="relative inline-flex items-center group flex-nowrap max-w-max"
    :to="to"
    :blank="blank"
  >
    <p class="font-bold">
      <Markdown use="text" unwrap="p" />
    </p>
    <span
      class="absolute hidden sm:block -bottom-2 h-0.5 w-4 group-hover:w-full transition-all"
      :class="underlineCustomClass"
    />
  </AppLink>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    to: {
      type: String,
      required: true,
    },
    blank: {
      type: Boolean,
      default: true,
    },
    underlineCustomClass: {
      type: String,
      default: 'left-0 bg-primary-900',
    },
  },
})
</script>
