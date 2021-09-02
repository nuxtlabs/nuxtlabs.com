<template>
  <header class="d-header">
    <nav class="flex h-full flex-none text-gray-400 justify-between mx-auto px-4 sm:px-5 lg:px-16">
      <Link
        class="flex items-center"
        :to="localePath('/')"
      >
        <nuxt-img src="/img/logo.svg" class="h-6 lg:h-8 mb-2 lg:mb-0" alt="NuxtLabs" />
      </Link>

      <div v-if="!isHome" class="justify-center flex-1 hidden lg:flex">
        <Link
          v-for="{ title, href } in articleLinks"
          :key="title"
          :aria-label="title"
          class="relative flex items-center justify-center h-full px-4 font-medium text-center lg:text-lg capitalize group hover:text-white"
          :to="href"
        >
        {{ title }}
        </Link>
      </div>
      <div class="flex items-center">
        <Link
          v-for="{ title, href } in links"
          :key="title"
          :aria-label="title"
          class="relative flex items-center h-full font-medium text-center lg:text-lg capitalize group hover:text-white"
          :to="href"
        >
        {{ title }}
        </Link>
      </div>
    </nav>
  </header>
</template>

<script>
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    projects: {
      type: Boolean,
      default: false
    },
    links: {
      type: Array,
      required: false,
      default: () => [
        {
          title: 'About us',
          href: '/about',
        }
      ]
    },
    articleLinks: {
      type: Array,
      required: false,
      default: () => [
        {
          title: 'NuxtJS',
          href: '/nuxtjs'
        },
        {
          title: 'Docus',
          href: '/docus'
        },
        {
          title: 'Vue telescope',
          href: '/vuetelescope'
        }
      ]
    }
  },
  setup() {
    const { route } = useContext()
    const isHome = computed(() => route.value.path === '/')

    return { isHome }
  }
})
</script>
<style lang="postcss" scoped>
.nuxt-link-active {
  color: white
}
</style>
