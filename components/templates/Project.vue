<template>
  <div ref="root" class="py-8 sm:py-16 max-w-2xl mx-auto px-4">
    <NuxtImg
      :src="`img/${page.logo}`"
      :alt="page.title"
      width="80"
      height="80"
      class="mx-auto mb-2"
    />
    <h1
      class="
        text-3xl
        sm:text-4xl
        text-center text-white
        font-semibold
        tracking-tight
        pb-8
      "
    >
      {{ page.title }}
    </h1>
    <div class="flex justify-center space-x-3">
      <a
        v-if="page.website"
        :href="page.website"
        rel="noopener"
        target="_blank"
        class="cta"
        >Website</a
      >
      <a
        v-if="page.github"
        :href="page.github"
        rel="noopener"
        target="_blank"
        class="cta"
        >GitHub</a
      >
      <a
        v-if="page.twitter"
        :href="page.twitter"
        rel="noopener"
        target="_blank"
        class="cta"
        >Twitter</a
      >
    </div>
    <DocusContent :document="page" class="docus-content" />
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { useMotion } from '@vueuse/motion'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  templateOptions: {
    aside: false,
    fluid: true,
  },
  setup() {
    const root = ref(null)
    useMotion(root, {
      initial: {
        opacity: 0,
      },
      enter: {
        opacity: 1,
      },
    })

    return { root }
  },
})
</script>

<style scoped>
.cta {
  @apply border-1 px-5 rounded py-2 font-medium border-gray-700 hover:bg-white hover:text-black;
}
</style>
