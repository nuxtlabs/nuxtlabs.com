<template>
  <div class="flex flex-col-reverse relative xl:pb-20">
    <div v-if="articles && articles.length">
      <AppLink
        v-for="article in articles"
        :key="article.id"
        :to="`/blog/${selectedCategory.category.toLowerCase()}/${article.slug}`"
      >
        <BlogArticlePreview :article="article" />
      </AppLink>
    </div>
    <div v-else class="text-display-6">Comming soon...</div>
    <div class="sticky top-20 bg-white">
      <div class="font-semibold text-primary-900 text-xl py-4">Categories</div>
      <div class="flex flex-wrap pb-12">
        <div
          v-for="(categ, index) in categories"
          :key="index"
          class="cursor-pointer px-2 border rounded rounded-xl mb-2 mr-2 self-start"
          :class="
            selectedCategory.category === categ.toLowerCase()
              ? 'text-primary-900 border-primary-900'
              : 'text-primary-200 border-primary-200'
          "
          @click="selectCategory(categ)"
        >
          {{ categ }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  useContext,
  ref,
  useFetch,
  watch,
  useRoute,
  reactive,
  computed,
  useRouter,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $docus } = useContext()
    const route = useRoute()
    const router = useRouter()
    const blog = ref()
    const categories = ref()
    const articles = ref()
    const selectedCategory = reactive({ category: '' })

    useFetch(async () => {
      blog.value = await $docus.search('/blog', { deep: false }).fetch()

      categories.value = blog.value.categories

      selectedCategory.category = (hash.value || '#Announcements').substr(1)

      getArticles()
    })

    async function getArticles() {
      articles.value = await $docus
        .search(`/blog`, { deep: true })
        .where({ category: { $in: selectedCategory.category } })
        .fetch()
    }

    function selectCategory(category) {
      selectedCategory.category = category

      getArticles()
    }

    const hash = computed(() => route.value.hash)

    watch(selectedCategory, (newVal) => {
      let hash = ''
      if (newVal) {
        hash = `#${newVal.category.toLowerCase()}`
      }

      router.push({
        hash,
      })
    })

    watch(hash, (newVal) => {
      selectedCategory.category = (newVal || '').substr(1)
    })

    return {
      categories,
      articles,
      selectedCategory,
      selectCategory,
    }
  },
})
</script>
