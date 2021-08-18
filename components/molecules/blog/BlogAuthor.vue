<template>
  <div class="flex items-center">
    <div class="flex" :class="size === 'sm' ? 'mr-2' : 'mr-4'">
      <Link
        v-for="(author, index) in authors"
        :key="index"
        :to="author.link"
        :class="{ '-ml-4': index !== 0 }"
        class="flex items-center justify-end rounded-full border-3 border-black"
        blank
      >
        <NuxtImg
          class="inline-block rounded-full"
          :class="size === 'sm' ? 'h-6 w-6' : 'h-10 w-10'"
          :src="author.avatarUrl"
          alt
        />
      </Link>
    </div>
    <div class="flex flex-col" :class="size === 'sm' ? 'text-xs' : 'text-sm'">
      <span class="font-bold">{{ authors.length > 1 ? 'Multiple Authors' : authors[0].name }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    authors: {
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: 'md'
    }
  }
})
</script>
