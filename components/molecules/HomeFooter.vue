<template>
  <div class="w-full flex flex-col space-y-1">
    <div class="relative z-10">{{ location }}</div>
    <div class="font-bold relative z-10">{{ email }}</div>
    <ul class="flex space-x-2">
      <li v-for="link in links" :key="link.name">
        <Link :id="link.gradientName" :to="link.href" :alt="link.name" blank class="relative z-10 gradient">{{ link.name }}</Link>
        <div class="absolute opacity-60 w-128 h-128 z-0 pointer-events-none -bottom-full -left-full">
          <img :src="`/img/socialGradients/${link.gradientName}.svg`" class="relative" />
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    location: {
      type: String,
      default: 'Bordeaux, France'
    },
    email: {
      type: String,
      default: 'hello@nuxtlabs.com'
    }
  },
  setup() {
    const links = [
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/nuxtlabs/mycompany/',
        gradientName: 'linkedin'
      },
      {
        name: 'Github',
        href: 'https://github.com/nuxt',
        gradientName: 'github'
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/nuxt_js',
        gradientName: 'twitter'
      },
      {
        name: 'Discord',
        href: 'https://discord.com/invite/ps2h6QT',
        gradientName: 'discord'
      }
    ]

    return {
      links
    }
  }
})
</script>
<style lang="postcss">
.gradient {
  ~ div {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.35, 1);
  }
  &:hover {
    ~ div {
      @apply -bottom-60 -left-60
    }
  }
}
</style>
