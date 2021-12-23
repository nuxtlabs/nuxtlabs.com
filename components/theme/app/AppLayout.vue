<template>
  <div class="overflow-hidden w-full">
    <AppHeader :header-links="headerLinks" :social-links="socialLinks" />
    <div class="lg:flex" :class="{ 'd-container': layout.aside }">
      <AppAside
        :header-links="headerLinks"
        :social-links="socialLinks"
        :class="layout.asideClass"
      />
      <div
        class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible"
      >
        <slot />
      </div>
    </div>
    <AppFooter />
    <Notifications />
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $docus } = useContext()

    const layout = computed(() => $docus.layout.value)

    const headerLinks = [
      {
        title: 'Solutions',
        subLinks: [
          {
            title: 'NuxtJS',
            description:
              'Build your next Vue.js application with confidence using Nuxt.',
            to: '/nuxtjs',
            slug: 'nuxtjs',
            icon: {
              path: '/img/products/nuxtJSLogo.svg',
              alt: 'NuxtJS logo',
            },
          },
          {
            title: 'Docus',
            description:
              'Use our Content Manager Studio to build modern websites.',
            to: '/docus',
            slug: 'docus',
            icon: {
              path: '/img/products/docusLogo.svg',
              alt: 'Docus logo',
            },
          },
          {
            title: 'Vue Telescope',
            description:
              'Reveal the Vue technology stack powering any website.',
            to: '/vuetelescope',
            slug: 'vuetelescope',
            icon: {
              path: '/img/products/VTLogo.svg',
              alt: 'Vue telescope logo',
            },
          },
        ],
      },
      {
        title: 'Partners',
        to: '/partners',
        slug: 'partners',
      },
      {
        title: 'Discover',
        subLinks: [
          {
            title: 'Company',
            description: 'Know more about Nuxt Labs story & team',
            to: '/discover/about',
            slug: 'about',
            icon: {
              path: '/img/navigation/building.svg',
              alt: 'company building image',
              class: 'h-8 w-8 mr-2',
            },
          },
          {
            title: 'Blog',
            description: 'Our latest updates, announcements & future events',
            to: '/discover/blog',
            slug: 'blog',
            icon: {
              path: 'img/navigation/book.svg',
              alt: 'Blog book image',
              class: 'h-8 w-8 mr-2',
            },
          },
          {
            title: 'Vue Telescope',
            description:
              'Discover how NuxtLabs products can change your day-to-day ',
            to: '/discover/case-studies',
            slug: 'case-studies',
            icon: {
              path: 'img/navigation/telescope.svg',
              alt: 'case studies telescope image',
              class: 'h-8 w-8 mr-2',
            },
          },
        ],
      },
    ]

    const socialLinks = [
      {
        icon: 'IconGitHub',
        href: 'https://github.com/nuxtlabs',
        alt: 'NuxtLabs Github',
      },
      {
        icon: 'IconTwitter',
        href: 'https://twitter.com/nuxtlabs',
        alt: 'NuxtLabs Twitter',
      },
      {
        icon: 'IconYoutube',
        href: 'https://www.youtube.com/c/NuxtLabs',
        alt: 'NuxtLabs Youtube',
      },
    ]

    return {
      socialLinks,
      headerLinks,
      layout,
    }
  },
})
</script>
