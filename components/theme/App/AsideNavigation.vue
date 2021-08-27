<template>
  <div
    class="
      fixed
      top-0
      left-0
      w-auto
      h-full
      overflow-auto
      pointer-events-auto
      min-h-fill-available
      lg:h-screen lg:sticky lg:top-header lg:w-60
    "
  >
    <div class="w-auto h-full overflow-auto d-bg-header dark:lg:bg-transparent lg:bg-transparent">
      <!-- Aside Header -->
      <div class="flex items-center w-full px-4 sm:px-6 lg:hidden h-header d-aside-header-bg">
        <button
          class="
            flex-1
            transition-colors
            duration-200
            focus:outline-none
            lg:hidden
            d-secondary-text
            hover:d-secondary-text-hover
          "
          @click.stop="$menu.toggle"
        >
          <IconX class="w-6 h-6" />
        </button>
      </div>

      <!-- Aside Navigation -->
      <nav
        class="
          flex flex-col
          lg:justify-start
          overflow-y-auto
          text-sm
          font-medium
          lg:h-[reset]
          h-(full-header)
          d-scrollbar
        "
      >
        <div class="flex flex-col items-center justify-evenly h-full w-screen">
          <ul>
            <template v-for="link in links">
              <AsideNavigationItem
                v-if="link.nested !== false && link.children.length"
                :key="link.to"
                :title="link.title"
                :docs="link.children"
                :collapse.sync="link.collapse"
              />
              <AsideNavigationItem v-else :key="link.to" :docs="[link]" />
            </template>
          </ul>
          <SocialLinks class="flex flex-col space-y-4 text-lg sm:text-xl md:text-2xl" />
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $docus } = useContext()

    // Replicate currentNav locally
    const links = ref($docus.currentNav.value.links)

    // Watch updates on currentNav
    watch(
      $docus.currentNav,
      newVal => {
        links.value = newVal.links
      },
      { deep: true }
    )

    // Uncollapse current category on first navigation
    watch(
      links,
      newVal => {
        newVal.forEach(link => {
          if (link.children && link.children.length > 0) {
            const isCategoryActive = link.children.some(document => $docus.isLinkActive(document.to))

            if (isCategoryActive) {
              link.collapse = false
            }
          }
        })
      },
      { immediate: true }
    )

    // Get parent
    const parent = computed(() => $docus.currentNav.value.parent)

    // Get last release value
    const lastRelease = computed(() => $docus.lastRelease?.value)

    return { links, parent, lastRelease }
  }
})
</script>
