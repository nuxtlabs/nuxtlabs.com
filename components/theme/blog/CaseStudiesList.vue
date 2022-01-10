<template>
  <div class="grid grid-cols-2 gap-x-8 gap-y-12">
    <div
      v-for="(article, index) in articles"
      :key="article.id"
      :class="index === 0 ? 'col-span-2' : 'col-span-2 md:col-span-1'"
    >
      <CaseStudiesPreview :article="article" :first-article="index === 0" />
    </div>
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
  setup() {
    const { $docus } = useContext()
    const articles = ref()

    useFetch(async () => {
      articles.value = await $docus
        .search('/case-studies/', { deep: true })
        .where({ template: { $ne: '' } })
        .fetch()
    })

    return {
      articles,
    }
  },
})
</script>
