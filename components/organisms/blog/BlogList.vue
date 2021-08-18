<template>
  <div class="pb-12">
    <BlogMainCard v-if="firstPost" :post="firstPost" />
    <div class="flex flex-col space-y-8" v-if="posts">
      <BlogCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
      >
      </BlogCard>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, useContext, useFetch } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $docus, i18n } = useContext()
    const posts = ref()
    const firstPost = ref()

    useFetch(async () => {
      const documents = await $docus
        .search('/blog', { deep: true })
        .where({ slug: { $ne: '' }, language: i18n.locale })
        .sortBy('date', 'desc')
        .fetch()

      posts.value = documents.slice(1)
      firstPost.value = documents[0]
    })

    const formatDateByLocale = (locale, d) => {
      const currentLocale = locale || 'en'
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(d).toLocaleDateString(currentLocale, options)
    }

    return {
      firstPost,
      posts,
      formatDateByLocale
    }
  }
})
</script>
