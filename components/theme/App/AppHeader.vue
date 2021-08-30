<script>
  import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'

  export default defineComponent({
    setup() {
      const { $docus } = useContext()
      const settings = computed(() => $docus.settings.value)

      return { settings }
    }
  })
</script>
<style scoped lang="postcss">
  .nuxt-link-active {
    //text-decoration: underline;
  }
  .menu li {
    display: block;
    position: relative;
  }
</style>
<template>
  <header class="d-header">
    <div class="flex flex-row-reverse lg:flex-row h-full flex-none mx-auto px-1 sm:px-3 lg:px-6">
      <Link
        class="flex items-center flex-1 lg:flex-none lg:w-60"
        :to="localePath('/')"
      >
        <Logo :setings="settings" logoPath="/img/Logo.png"
          class="hidden lg:block h-5 w-4/5 sm:h-6 md:h-7 mr-4 lg:mr-0" />
        <Logo :setings="settings" logoPath="icon.png"
          class="lg:hidden h-10 w-14 sm:h-14 sm:w-18 md:h-20 md:w-24 lg:w-4/5 lg:h-8" />
      </Link>
      <div class="items-center hidden lg:flex lg:flex-1">
        <nav class="relative flex items-center justify-end w-full h-full">
          <Link
            aria-label="title"
            class="relative flex flex-col items-center justify-center h-full px-4 font-medium text-center capitalize group"
            to="/about"
          >
          About us
          </Link>
        </nav>
      </div>
    </div>
  </header>
</template>
