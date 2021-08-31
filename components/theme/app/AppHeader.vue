<template>
  <header class="d-header">
    <nav class="flex h-full flex-none text-gray-400 mx-auto px-2 sm:px-3 lg:px-6">
      <Link
        class="flex items-center flex-1"
        :to="localePath('/')"
      >
        <!-- "mr-4 lg:mr-0" to optically center logo text -->
        <Logo :setings="settings" logoPath="/img/logo.svg"
          class="h-6 lg:h-8 mb-2 mr-4 lg:mr-0" />
        <!-- Mobile -->
        <!-- Logo :setings="settings" logoPath="icon.png"
          class="lg:hidden h-10 w-14 sm:h-14 sm:w-18 md:h-20 md:w-24 lg:w-4/5 lg:h-8" / -->
      </Link>

      <div v-if="!isHome" class="justify-center hidden lg:flex">
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
      <div class="flex items-center justify-end flex-1">
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
    const { $docus, route } = useContext()
    const settings = computed(() => $docus.settings.value)
    const isHome = computed(() => route.value.path === '/')

    return { settings, isHome }
  }
})
</script>
<style lang="postcss" scoped>
.nuxt-link-active {
  color: white
}
</style>
