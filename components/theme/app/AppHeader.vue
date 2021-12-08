<template>
  <header class="d-header">
    <nav
      class="flex h-full flex-none justify-between mx-auto d-container-content"
    >
      <!-- logo -->
      <Link class="flex flex-1 items-center w-1/6" :to="localePath('/')">
        <h1 class="h-0 w-0 overflow-hidden">NuxtLabs</h1>
        <nuxt-img src="/img/logo.svg" class="h-8 w-auto" alt="NuxtLabs" />
      </Link>
      <!-- links -->
      <transition name="fade">
        <div
          class="
            font-medium
            justify-center
            items-center
            lg:space-x-8
            xl:space-x-12
            flex-1
            hidden
            lg:flex
          "
        >
          <ul v-for="(link, index) in links" :key="index">
            <li>
              <Link v-if="link.to" :to="link.to" :aria-label="link.title">
                {{ link.title }}
              </Link>
              <div v-else>
                <Dropdown
                  :key="index"
                  :items="[link.subLinks]"
                  main-link-class="mx-2"
                  placement="bottom"
                  mode="hover"
                  :dropdown-menu-class="'h-full bg-white'"
                  dropdown-class="w-max"
                  :open-delay="0"
                  :items-class="`py-1 grid grid-cols-${Math.round(
                    link.subLinks.length / 3,
                  )}`"
                >
                  <template #trigger>
                    <HeaderNavigationLink
                      class="px-1 py-2"
                      :link="link"
                      :force-active="isActiveGroup(link)"
                      :inactive-class="'bg-white'"
                    >
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
      <div class="flex items-center justify-end space-x-8 flex-1">
        <!-- social links -->
        <ul class="flex items-center justify-center space-x-4">
          <li v-for="link in socialLinks" :key="link.title">
            <Link :to="link.href" :aria-label="link.alt">
              <nuxt-img :src="`/img/social/${link.icon}`" :alt="link.alt" />
            </Link>
          </li>
        </ul>
        <!-- button -->
        <AppButton to="/"> Login </AppButton>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, useRoute, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const route = useRoute()
    const links = [
      {
        title: 'Solutions',
        subLinks: [
          {
            title: 'NuxtJS',
            description:
              'Build your next Vue.js application with confidence using Nuxt.',
            to: '/nuxtjs',
            icon: {
              name: 'nuxtJSLogo.svg',
              alt: 'NuxtJS logo',
            },
          },
          {
            title: 'Docus',
            description:
              'Use our Content Manager Studio to build modern websites.',
            to: '/docus',
            icon: {
              name: 'docusLogo.svg',
              alt: 'Docus logo',
            },
          },
          {
            title: 'Vue Telescope',
            description:
              'Reveal the Vue technology stack powering any website.',
            to: '/vuetelescope',
            icon: {
              name: 'VTLogo.svg',
              alt: 'Vue telescope logo',
            },
          },
        ],
      },
      {
        title: 'Partners',
        to: '/partners',
      },
      {
        title: 'About us',
        to: '/about',
      },
    ]

    const socialLinks = [
      {
        icon: 'github.svg',
        href: 'https://github.com/nuxtlabs',
        alt: 'NuxtLabs Github',
      },
      {
        icon: 'twitter.svg',
        href: 'https://twitter.com/nuxtlabs',
        alt: 'NuxtLabs Twitter',
      },
      {
        icon: 'youtube.svg',
        href: 'https://www.youtube.com/c/NuxtLabs',
        alt: 'NuxtLabs Youtube',
      },
    ]

    const currentSlug = computed(() => {
      return route.value.path !== '/' && route?.value?.params?.pathMatch
        ? route.value.params.pathMatch.split('/')[0]
        : null
    })

    function isActiveGroup(link) {
      if (
        link.slug === route.value ||
        link.items?.some((item) => item.slug === currentSlug.value)
      ) {
        return true
      }
      return false
    }

    return {
      links,
      socialLinks,
      isActiveGroup,
    }
  },
})
</script>
