<template>
  <nav ref="nav" class="flex flex-col gap-0 py-4 px-4 sm:px-6">
    <template v-for="(link, index) in headerLinks">
      <div
        v-if="link.items && link.items.length"
        :key="index"
        class="flex flex-col"
      >
        <div
          class="flex items-center justify-between cursor-pointer py-2"
          tabindex="0"
          @click="toggle(index)"
        >
          <HeaderNavigationLink :link="link">
            {{ link.title }}
          </HeaderNavigationLink>
          <img
            v-if="openedLink === index"
            src="/img/chevron-bottom.svg"
            class="flex-shrink-0 w-6 h-6"
          />
          <img
            v-else
            src="/img/chevron-right.svg"
            class="flex-shrink-0 w-6 h-6"
          />
        </div>
        <div v-show="openedLink === index" class="pl-2 pb-2 gap-2">
          <HeaderNavigationLink
            v-for="(subLink, subIndex) in link.items"
            :key="subIndex"
            :link="subLink"
            class="rounded-md px-2 py-1 text-sm"
            active-class="text-black"
            inactive-class="text-gray-600 hover:text-black"
          >
            {{ subLink.title }}
          </HeaderNavigationLink>
        </div>
      </div>
      <HeaderNavigationLink
        v-else
        :key="index"
        :link="link"
        class="py-2 hover:text-gray-700"
      >
        {{ link.title }}
      </HeaderNavigationLink>
    </template>
  </nav>
</template>

<script>
import {
  defineComponent,
  ref,
  watch,
  useContext,
} from '@nuxtjs/composition-api'
import { useNav } from '~/plugins/nav'

export default defineComponent({
  props: {
    headerLinks: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const { $menu } = useContext()
    const { currentSlug } = useNav()
    const nav = ref(null)
    const openedLink = ref(null)

    function selectActiveLink() {
      if (currentSlug.value) {
        for (const [index, link] of props.headerLinks.entries()) {
          if (
            link.to === currentSlug.value ||
            link.items?.some((item) => item.to === currentSlug.value)
          ) {
            openedLink.value = index
            break
          }
        }
      } else {
        openedLink.value = null
      }
    }

    selectActiveLink()

    watch($menu.visible, (value) => {
      if (value) {
        selectActiveLink()
      }
    })

    function toggle(index) {
      if (openedLink.value === index) {
        openedLink.value = null
      } else {
        openedLink.value = index
      }
    }

    return {
      openedLink,
      toggle,
      nav,
    }
  },
})
</script>
