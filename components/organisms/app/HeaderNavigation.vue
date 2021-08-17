<template>
  <nav class="relative flex items-center justify-end w-full h-full">
    <Link
      v-for="{ title, href } in links"
      :key="title"
      :aria-label="title"
      class="relative flex flex-col items-center justify-center h-full px-4 font-medium text-center capitalize group"
      :to="href"
    >
    {{ title }}
    </Link>
  </nav>
</template>
<script>
import { computed, defineComponent, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    links: {
      type: Array,
      required: false,
      default: () => [
        {
          title: 'Home',
          href: '/'
        },
        {
          title: 'Blog',
          href: '/blog'
        },
        {
          title: 'About us',
          href: '/about'
        }
      ]
    }
  }
})
</script>
<style scoped lang="postcss">
.nuxt-link-active {
  //text-decoration: underline;
}
.menu li {
  display: block;
  position: relative;
}
</style>
