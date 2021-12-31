<template>
  <div
    class="text-left border-2 border-primary-700 rounded-md pt-16 pb-12 px-8 relative"
  >
    <img
      :src="`/img/partners/technology/${icon}`"
      class="absolute -top-12 left-4"
    />
    <h4 class="text-2xl font-semibold pb-6">
      <Markdown use="title" unwrap="p" />
    </h4>
    <ul class="flex flex-col space-y-8">
      <Markdown use="list-items" unwrap="p" />
    </ul>
    <p class="absolute left-0 top-full pt-4 text-primary-400">
      <Markdown use="bottom-text" unwrap="p" />
    </p>
  </div>
</template>
<script setup>
defineProps({
  icon: {
    type: String,
    default: '',
  },
})
</script>
