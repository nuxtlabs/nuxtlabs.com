<template>
  <div>
    <div
      v-if="firstArticle"
      class="flex flex-col space-y-4 space-x-0 lg:space-y-0 lg:space-x-8 lg:flex-row items-center"
    >
      <div class="aspect-h-9 lg:w-2/3 border border-primary-900">
        <NuxtImg
          :src="article.imgUrl"
          width="864"
          height="300"
          :alt="article.title"
          loading="lazy"
        />
      </div>
      <div class="flex flex-col space-y-4 lg:w-1/3">
        <h4 class="text-xl font-semibold">
          {{ article.title }}
        </h4>
        <p class="text-primary-400">
          {{ article.description }}
        </p>
        <AppLink
          :to="`/discover/case-studies/${article.slug}`"
          class="font-semibold"
        >
          Read more
        </AppLink>
      </div>
    </div>
    <div v-else class="flex flex-col space-y-4">
      <div class="aspect-h-9 border border-primary-900">
        <NuxtImg
          :src="article.imgUrl"
          width="864"
          height="300"
          :alt="article.title"
          loading="lazy"
        />
      </div>
      <div class="flex flex-col space-y-4">
        <h4 class="text-xl font-semibold">
          {{ article.title }}
        </h4>
        <p class="text-primary-400">
          {{ article.description }}
        </p>
        <AppLink
          :to="`/discover/case-studies/${article.slug}`"
          class="font-semibold"
        >
          Read more
        </AppLink>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    article: {
      type: Object,
      default: () => {},
    },
    firstArticle: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
