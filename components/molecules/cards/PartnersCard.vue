<template>
  <component :is="component">
    <img v-if="iconPath" :src="iconPath" :class="iconClass" />
    <h5 class="font-semibold text-xl">
      <Markdown use="title" unwrap="p" />
    </h5>
    <p class="block text-lg pb-2">
      <Markdown use="description" unwrap="p" />
    </p>
    <Markdown use="content" unwrap="p" />
  </component>
</template>
<script setup>
defineProps({
  iconPath: {
    type: String,
    required: true,
  },
  iconClass: {
    type: String,
    default: 'h-8 w-8',
  },
  component: {
    type: String,
    default: 'li',
  },
})
</script>
