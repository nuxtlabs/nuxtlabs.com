<template>
  <div class="h-full w-full mx-auto max-w-7xl p-6 xl:p-8 2xl:p-16">
    <h1 class="font-semibold text-primary-900 pb-16 text-display-4">Blog</h1>
    <div class="flex">
      <div class="d-container w-3/4 pr-8">
        <AppLink
          v-for="article in articles"
          :key="article.id"
          :to="`/blog/${categories[selectedCategory.index]}/${article.slug}`"
        >
          <ArticlePreview :article="article" />
        </AppLink>
      </div>
      <aside class="w-1/4">
        <div class="font-semibold text-primary-900 text-xl pb-4">
          Categories
        </div>
        <div
          v-for="(categ, index) in categories"
          :key="index"
          class="cursor-pointer"
          :class="
            selectedCategory.index === index
              ? 'text-primary-900'
              : 'text-primary-200'
          "
          @click="selectCategory(index)"
        >
          {{ categ }}
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  useContext,
  ref,
  useFetch,
  reactive,
} from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { $docus } = useContext()
    const blog = ref()
    const categories = ref()
    const articles = ref()
    const selectedCategory = reactive({ index: 0 })

    useFetch(async () => {
      blog.value = await $docus
        .search('/discover/blog', { deep: false })
        .fetch()

      categories.value = blog.value.categories

      getArticles(0)
    })

    async function getArticles(index) {
      articles.value = await $docus
        .search(`/collections`, { deep: true })
        .where({ category: { $in: categories.value[index] } })
        .fetch()
    }

    function selectCategory(index) {
      selectedCategory.index = index

      getArticles(index)
    }

    return {
      categories,
      articles,
      selectedCategory,
      selectCategory,
    }
  },
})
</script>
