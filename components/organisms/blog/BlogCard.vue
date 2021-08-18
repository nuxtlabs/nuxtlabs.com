<template>
  <article
    @click="navigateToUrl(post.to)"
    class="flex space-x-8 items-center cursor-pointer hover:bg-gray-900 rounded-r-lg pr-2"
  >
    <NuxtImg :src="post.imgUrl" class="h-40 w-40 object-cover rounded-lg" :alt="title" />
    <div class="flex-col space-y-2 overflow-x-hidden">
      <BlogAuthor :authors="post.authors" size="sm" />

      <h1 class="font-bold text-lg mb-2">
        <Link :to="post.to">
          {{ post.title }}
        </Link>
      </h1>
      <p class="text-sm truncate">
        {{ post.description }}
      </p>

      <BlogFooter :tags="post.tags" :category="post.category" :date="post.date" />
    </div>
  </article>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup() {
    function navigateToUrl(href) {
      const isInternal = href.startsWith('/') && href.startsWith('//') === false
      if (isInternal) {
        this.$router.push(this.localePath(href))
      } else {
        window.open(href, '_blank')
      }
    }
    return { navigateToUrl }
  }
})
</script>
