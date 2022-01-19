<template>
  <div class="w-full">
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
import {
  defineComponent,
  useContext,
  computed,
  useFetch,
  ref,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $docus } = useContext()
    const layout = computed(() => $docus.layout.value)
    const headerLinks = ref([])

    useFetch(async () => {
      const header = await $docus
        .search('/collections/navigation/', { deep: true })
        .where({ slug: { $in: 'header' } })
        .fetch()

      headerLinks.value = header[0].links
    })

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
        href: 'https://www.youtube.com/c/NuxtLabs?sub_confirmation=1',
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
