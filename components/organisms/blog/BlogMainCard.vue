<template>
  <article
    @click="navigateToUrl(post.href)"
    class="flex flex-col space-y-4 mb-16 cursor-pointer"
  >
    <NuxtImg :src="post.imgUrl" :alt="post.title" class="h-60 object-cover rounded-lg" />

    <BlogAuthor v-if="post.authors" :authors="post.authors" />

    <h1 class="font-bold text-display-6 mb-2">
      <Link :to="post.to">
        {{ post.title }}
      </Link>
    </h1>

    <p>
      {{ post.description }}
    </p>

    <BlogFooter :date="post.date" :tags="post.tags" :category="post.category" />
  </article>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    function navigateToUrl(href: string) {
      const isInternal = props.post.to.startsWith('/') && props.post.to.startsWith('//') === false
      if (isInternal) {
        this.$router.push(this.localePath(props.post.to))
      } else {
        window.open(props.post.to, '_blank')
      }
    }

    return { navigateToUrl }
  },
})
</script>
