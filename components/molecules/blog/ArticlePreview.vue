<template>
  <div class="flex flex-col space-y-4 mb-12 border-b border-primary-100">
    <time class="text-primary-400">
      {{ `${article.category} - ${formatDateByLocale('en', article.date)}` }}
    </time>
    <h2 class="font-semibold text-primary-900 text-xl">{{ article.title }}</h2>
    <p class="text-primary-400">{{ article.description }}</p>
    <div class="flex items-center pb-4">
      <div v-if="article.authors" class="flex mr-4">
        <AppLink
          v-for="(author, index) in article.authors"
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
      </div>
      <div class="flex flex-col text-md font-semibold text-primary-400">
        <span v-if="article.authors" class="font-bold">{{
          article.authors.length > 1
            ? 'Multiple authors'
            : article.authors[0].name
        }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    article: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const formatDateByLocale = (locale, d) => {
      return new Date(d).toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    }

    return {
      formatDateByLocale,
    }
  },
})
</script>
