<template>
  <div class="flex flex-col space-y-4">
    <h1 class="font-semibold text-primary-900 pb-4 text-display-4">
      <Markdown use="title" unwrap="p" />
    </h1>
    <p class="text-primary-400 w-full lg:w-4/5" :class="to ? 'pb-8' : 'pb-16'">
      <Markdown use="description" unwrap="p" />
    </p>
    <div v-if="to" class="pb-20">
      <AppButton :to="to">
        <Markdown use="buttonText" unwrap="p" />
      </AppButton>
    </div>
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
