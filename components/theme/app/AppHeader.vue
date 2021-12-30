<template>
  <!-- TODO: override d-header class when docus v3 -->
  <header
    class="sticky w-full bg-white top-0 z-50 filter blur-12 mix-blend-difference"
    :class="isPartner ? 'h-30' : 'h-20'"
  >
    <nav
      class="flex flex-col mx-auto d-container-content h-full justify-center"
    >
      <div
        class="flex items-center justify-center"
        :class="isPartner ? 'h-3/5' : 'h-full'"
      >
        <!-- mobile menu !-->
        <div class="lg:hidden flex sm:flex-1 justify-start mr-4">
          <img
            src="/img/navigation/menu-alt.svg"
            aria-label="mobileMenu"
            class="w-8 h-8 lg:hidden cursor-pointer"
            @click.stop="$menu.toggle"
          />
        </div>
        <!-- logo -->
        <Link
          class="flex flex-1 w-1/6 justify-center lg:justify-start"
          :to="localePath('/')"
        >
          <h1 class="h-0 w-0 overflow-hidden">NuxtLabs</h1>
          <nuxt-img src="/img/logo.svg" class="h-full w-auto" alt="NuxtLabs" />
        </Link>
        <!-- links -->
        <transition name="fade">
          <div
            class="font-medium justify-center items-center lg:space-x-8 xl:space-x-12 flex-1 hidden lg:flex"
          >
            <ul v-for="(link, index) in headerLinks" :key="index">
              <li>
                <Link
                  v-if="link.to"
                  :to="link.to"
                  :aria-label="link.title"
                  class="hover:text-gray-700"
                  :class="{ 'font-semibold': isPartner }"
                >
                  {{ link.title }}
                </Link>
                <div v-else>
                  <Dropdown
                    :key="index"
                    :items="[link.items]"
                    main-link-class="mx-2"
                    placement="bottom"
                    mode="hover"
                    :dropdown-menu-class="'h-full bg-white'"
                    dropdown-class="w-max"
                    :open-delay="0"
                    :items-class="`py-1 grid grid-cols-${Math.round(
                      link.items.length / 3,
                    )}`"
                  >
                    <template #trigger>
                      <HeaderNavigationLink class="px-1 py-2" :link="link">
                        {{ link.title }}
                      </HeaderNavigationLink>
                    </template>

                    <template #item="{ item }">
                      <HeaderNavigationLink
                        :link="item"
                        class="px-2 py-1"
                        inactive-class="text-primary-900"
                      >
                        <HeaderDropdownItem
                          :title="item.title"
                          :sub-title="item.description"
                          :icon="item.icon"
                        /> </HeaderNavigationLink
                    ></template>
                  </Dropdown>
                </div>
              </li>
            </ul>
          </div>
        </transition>
        <!-- social + button -->
        <div class="flex items-center justify-end space-x-8 sm:flex-1">
          <!-- social links -->
          <SocialLinkLogos
            :social-links="socialLinks"
            class="hidden lg:flex space-x-4"
          />
          <!-- button -->
          <AppButton to="/"> Login </AppButton>
        </div>
      </div>
      <HeaderSubMenu
        v-if="isPartner"
        :links="headerLinks[1].partnersItems"
        class="h-2/5"
      />
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useNav } from '~/plugins/nav'

export default defineComponent({
  props: {
    headerLinks: {
      type: Array,
      default: () => [],
    },
    socialLinks: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const { isPartner } = useNav()

    return {
      isPartner,
    }
  },
})
</script>
