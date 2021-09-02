<template>
  <ul>
    <li v-for="link in links" :key="link.name">
      <Link :to="link.href" :alt="link.name" blank class="relative z-50 gradient">{{ link.name }}</Link>
      <div class="hidden lg:block absolute opacity-70 w-full h-1/2 z-0 pointer-events-none -bottom-full -left-full">
        <img :src="`/img/socialGradients/${link.gradientImg}.svg`" :alt="link.alt" class="relative w-1/2 2xl:w-2/5" />
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
        name: 'GitHub',
        href: 'https://github.com/nuxtlabs',
        gradientImg: 'github',
        alt: 'GitHub gradient effect'
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/nuxtlabs',
        gradientImg: 'twitter',
        alt: 'Twitter gradient effect'
      },
      {
        name: 'YouTube',
        href: 'https://www.youtube.com/c/NuxtLabs',
        gradientImg: 'youtube',
        alt: 'YouTube gradient effect'
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/nuxtlabs/mycompany/',
        gradientImg: 'linkedin',
        alt: 'LinkedIn gradient effect'
      },
    ]

    return {
      links
    }
  },
})
</script>
<style lang="postcss">
.gradient {
  ~ div {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.35, 1);
  }
  &:hover {
    ~ div {
      @apply -bottom-65 2xl:-bottom-55 -left-75
    }
  }
}
</style>
