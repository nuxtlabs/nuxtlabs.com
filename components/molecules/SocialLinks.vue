<template>
  <ul>
    <li v-for="link in links" :key="link.name">
      <Link
        :to="link.href"
        :alt="link.name"
        blank
        class="relative group text-sm xs:text-base"
      >
        {{ link.name }}
        <img
          :src="`/img/socialGradients/${link.gradientImg}.svg`"
          :alt="link.alt"
          class="
            pointer-events-none
            opacity-0
            group-hover:opacity-40
            fixed
            -left-2/5
            -bottom-2/5
            md:-left-2/5 md:-bottom-1/2
            lg:-bottom-3/5 lg:-left-1/2
            xl:-bottom-4/5
            2xl:-bottom-4/6 2xl:-left-2/7
            w-full
            2xl:w-3/5
            transition-opacity
          "
        />
      </Link>
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
        alt: 'GitHub gradient effect',
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/nuxtlabs',
        gradientImg: 'twitter',
        alt: 'Twitter gradient effect',
      },
      {
        name: 'YouTube',
        href: 'https://www.youtube.com/c/NuxtLabs',
        gradientImg: 'youtube',
        alt: 'YouTube gradient effect',
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/nuxtlabs/mycompany/',
        gradientImg: 'linkedin',
        alt: 'LinkedIn gradient effect',
      },
    ]

    return {
      links,
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
      @apply -bottom-65 2xl:-bottom-55 -left-65;
    }
  }
}
</style>
