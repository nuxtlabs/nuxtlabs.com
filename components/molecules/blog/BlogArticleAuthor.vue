<template>
  <div class="flex items-center">
    <AppLink
      v-for="(author, index) in authors"
      :key="index"
      :href="author.link"
      rel="noopener noindex nofollow"
      :class="{ '-ml-4': index !== 0 }"
      class="flex items-center justify-end border-white rounded-full border-3 dark:border-secondary-darker"
    >
      <NuxtImg
        class="inline-block w-8 h-8 rounded-full"
        height="32"
        width="32"
        loading="lazy"
        :src="author.avatarUrl"
        :alt="author.name"
      />
    </AppLink>
    <div class="flex flex-col text-md font-semibold text-primary-400 ml-2">
      <span class="font-bold">{{
        authors.length > 1 ? 'Multiple authors' : authors[0].name
      }}</span>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    authors: {
      type: Array,
      default: () => [],
    },
  },
})
</script>
