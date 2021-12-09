<template>
  <div class="relative w-full">
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from '#app'
import { useDocusLayout } from '#docus'

export default defineComponent({
  setup() {
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
              name: 'nuxtJSLogo.svg',
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
              name: 'docusLogo.svg',
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
              name: 'VTLogo.svg',
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
        title: 'About us',
        to: '/about',
        slug: 'about',
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
      layout: useDocusLayout(),
    }
  },
})
</script>
