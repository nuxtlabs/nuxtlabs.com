<template>
  <component :is="component">
    <img v-if="icon" :src="`/img/marketing/home/${icon}`" :class="iconClass" />
    <h5 v-if="$slots.title" class="font-semibold text-xl">
      <Markdown use="title" unwrap="p" />
    </h5>
    <p v-if="$slots.description">
      <Markdown use="description" unwrap="p" />
    </p>
    <Markdown use="content" unwrap="p" />
  </component>
</template>
<script setup>
defineProps({
  icon: {
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
