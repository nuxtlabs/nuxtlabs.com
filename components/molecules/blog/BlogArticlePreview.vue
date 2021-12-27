<template>
  <div class="flex flex-col space-y-4 mb-12 border-b border-primary-100">
    <time class="text-primary-400">
      {{ `${article.category} - ${formatDateByLocale('en', article.date)}` }}
    </time>
    <h2 class="font-semibold text-primary-900 text-xl">{{ article.title }}</h2>
    <p class="text-primary-400">{{ article.description }}</p>
    <div class="flex items-center pb-4">
      <BlogArticleAuthor v-if="article.authors" :authors="article.authors" />
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
