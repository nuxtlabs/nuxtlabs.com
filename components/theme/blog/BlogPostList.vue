<template>
  <div class="flex">
    <div class="w-3/4 pr-8">
      <AppLink
        v-for="article in articles"
        :key="article.id"
        :to="`/blog/${categories[selectedCategory.index]}/${article.slug}`"
      >
        <BlogArticlePreview :article="article" />
      </AppLink>
    </div>
    <aside class="w-1/4">
      <div class="font-semibold text-primary-900 text-xl pb-4">Categories</div>
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
