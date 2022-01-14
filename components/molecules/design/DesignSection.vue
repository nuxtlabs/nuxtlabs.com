<template>
  <section class="mb-8">
    <h4 class="font-semibold pb-4 text-2xl">
      <Markdown use="title" unwrap="p" />
    </h4>
    <p v-if="descriptionSlot" class="text-primary-300 pb-8">
      <Markdown use="description" unwrap="p" />
    </p>
    <Markdown use="content" unwrap="p" />
  </section>
</template>
<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
  setup(_, context) {
    const descriptionSlot = computed(() => context.slots.description)

    return {
      descriptionSlot,
    }
  },
})
</script>
