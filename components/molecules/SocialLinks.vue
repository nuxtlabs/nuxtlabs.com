<template>
  <ul>
    <li v-for="link in links" :key="link.name">
      <Link :to="link.href" :alt="link.name" blank class="relative z-10 gradient">{{ link.name }}</Link>
      <div class="hidden lg:block absolute opacity-60 w-128 h-128 z-0 pointer-events-none -bottom-full -left-full">
        <img :src="`/img/socialGradients/${link.gradientImg}.svg`" class="relative" />
      </div>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const links = [
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/nuxtlabs/mycompany/',
        gradientImg: 'linkedin'
      },
      {
        name: 'Github',
        href: 'https://github.com/nuxt',
        gradientImg: 'github'
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/nuxt_js',
        gradientImg: 'twitter'
      },
      {
        name: 'Discord',
        href: 'https://discord.com/invite/ps2h6QT',
        gradientImg: 'discord'
      }
    ]

    return {
      links
    }
  },
})
</script>
