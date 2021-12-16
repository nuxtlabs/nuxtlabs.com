import { useRoute, computed } from '@nuxtjs/composition-api'

// TODO: do these checks on `$docus.currentPath` instead of `route.path` once `$docus.currentPath` ssr issue is fixed
export function useNav() {
  const route = useRoute()

  const currentSlug = computed(() => {
    return route.value.path !== '/' && route?.value?.params?.pathMatch
      ? route.value.params.pathMatch.split('/')[0]
      : null
  })

  return {
    currentSlug,
  }
}
