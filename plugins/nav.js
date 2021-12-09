import { useRoute, computed } from '#app'

// TODO: do these checks on `$docus.currentPath` instead of `route.path` once `$docus.currentPath` ssr issue is fixed
export function useNav() {
  const route = useRoute()

  const currentSlug = computed(() => {
    return route.path !== '/' && route?.params?.pathMatch
      ? route.params.pathMatch.split('/')[0]
      : null
  })

  return {
    currentSlug,
  }
}
