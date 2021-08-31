<template>
  <div class="py-8 sm:py-16 max-w-2xl mx-auto px-4">
    <NuxtImg :src="`img/${page.logo}`" :alt="page.title" class="h-20 mx-auto mb-2" />
    <h1 class="text-3xl sm:text-4xl text-center text-white font-semibold tracking-tight pb-8">
      {{ page.title }}
    </h1>
    <DocusContent :document="page" class="docus-content" />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  templateOptions: {
    aside: false,
    fluid: true
  }
})
</script>
