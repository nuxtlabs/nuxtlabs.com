<template>
  <div class="h-full w-full flex justify-between max-w-7xl p-6 xl:p-8 2xl:p-16">
    <div class="d-container w-3/4">
      <div v-for="article in articles" :key="article.id">
        {{ article }}
      </div>
    </div>
    <aside class="w-1/4 h-screen">
      <div v-for="(categ, index) in categories" :key="index">
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

    useFetch(async () => {
      blog.value = await $docus
        .search('/discover/blog', { deep: false })
        .fetch()

      categories.value = blog.value.categories

      articles.value = await $docus
        .search(`/collections/blog`, { deep: true })
        .where({ category: { $in: categories.value } })
        .fetch()
    })

    return {
      categories,
      articles,
    }
  },
})
</script>
