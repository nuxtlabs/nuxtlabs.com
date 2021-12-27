<template>
  <div class="d-container-content py-8 sm:py-16">
    <PageHero>
      <template #title>
        {{ page.title }}
      </template>
      <template v-if="page.heroDescription" #description>
        {{ page.description }}
      </template>
    </PageHero>
    <div>
      <CaseStudiesList v-if="!page.blog" />
      <BlogPostList v-else />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
})
</script>
