<template>
  <header class="d-header">
    <nav
      class="
        flex
        h-full
        flex-none
        justify-between
        mx-auto
        px-4
        xl:px-8
        2xl:px-16
        font-mono
      "
    >
      <Link class="flex flex-1 items-center w-1/6" :to="localePath('/')">
        <h1 class="h-0 w-0 overflow-hidden">NuxtLabs</h1>
        <nuxt-img src="/img/logo.svg" class="h-6 lg:h-8" alt="NuxtLabs" />
      </Link>

      <div v-if="!isHome" class="justify-center flex-1 hidden lg:flex">
        <Link
          v-for="{ title, href } in articleLinks"
          :key="title"
          :aria-label="title"
          class="
            relative
            flex
            items-center
            justify-center
            h-full
            px-4
            font-medium
            text-center
            lg:text-lg
            capitalize
            group
            hover:text-white
            text-gray-500
            whitespace-nowrap
          "
          :to="href"
        >
          {{ title }}
        </Link>
      </div>

      <div class="flex items-center justify-end flex-1">
        <Link
          v-for="{ title, href } in links"
          :key="title"
          :aria-label="title"
          class="
            relative
            flex
            items-center
            h-full
            font-medium
            text-center
            lg:text-lg
            capitalize
            group
            hover:text-white
            text-sm
            xs:text-base
          "
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
      default: false,
    },
    links: {
      type: Array,
      required: false,
      default: () => [
        {
          title: 'About us',
          href: '/about',
        },
      ],
    },
    articleLinks: {
      type: Array,
      required: false,
      default: () => [
        {
          title: 'NuxtJS',
          href: '/nuxtjs',
        },
        {
          title: 'Docus',
          href: '/docus',
        },
        {
          title: 'Vue telescope',
          href: '/vuetelescope',
        },
      ],
    },
  },
  setup() {
    const { route } = useContext()
    const isHome = computed(() => route.value.path === '/')

    return { isHome }
  },
})
</script>
<style lang="postcss" scoped>
.nuxt-link-active {
  color: white;
}
</style>
