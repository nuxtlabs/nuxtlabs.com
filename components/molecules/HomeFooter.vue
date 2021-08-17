<template>
  <div class="w-full flex flex-col space-y-1">
    <div>{{ location }}</div>
    <div class="font-bold">{{ email }}</div>
    <ul class="flex space-x-2">
      <li v-for="link in links" :key="link.name">
        <Link :to="link.href" :alt="link.name" blank>{{ link.name }}</Link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

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
        href: 'https://www.linkedin.com/company/nuxtlabs/mycompany/'
      },
      {
        name: 'Github',
        href: 'https://github.com/nuxt'
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/nuxt_js'
      },
      {
        name: 'Discord',
        href: 'https://discord.com/invite/ps2h6QT'
      }
    ]

    return {
      links
    }
  }
})
</script>
