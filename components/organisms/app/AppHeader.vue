<template>
  <header class="absolute w-full top-0 z-50">
    <div class="d-header xl:p-4 2xl:p-8">
      <div class="flex h-full flex-none mx-auto px-1 sm:px-3 lg:px-6">
        <NavigationButton v-if="aside" class="px-2.5" />

        <Link
          :class="[aside ? 'justify-center lg:justify-start' : 'justify-start']"
          class="flex items-center flex-1 lg:flex-none lg:w-60"
          :to="localePath('/')"
        >
          <!-- "mr-4 lg:mr-0" to optically center logo text -->
          <Logo :settings="settings" class="h-5 w-4/5 sm:h-6 md:h-7 mr-4 lg:mr-0" />
        </Link>

        <div class="items-center hidden lg:flex lg:flex-1">
          <HeaderNavigation />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    aside: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const { $docus } = useContext()
    const settings = computed(() => $docus.settings.value)

    return { settings }
  }
})
</script>