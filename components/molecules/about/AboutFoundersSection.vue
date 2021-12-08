<template>
  <section
    ref="scrollTarget"
    class="flex mt-8 sm:mt-12 md:mt-14 lg:mt-16 mb-24 md:mb-48"
  >
    <AboutContentTemplate :is-visible="isVisible" />
  </section>
</template>

<script lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
import { defineComponent, ref, onBeforeUnmount } from '#app'

export default defineComponent({
  setup() {
    const scrollTarget = ref()
    const isVisible = ref(false)

    const { stop } = useIntersectionObserver(
      scrollTarget,
      ([{ isIntersecting }]) => {
        if (!isVisible.value && isIntersecting) {
          isVisible.value = true
          stop()
        }
      },
    )

    onBeforeUnmount(() => {
      stop()
    })

    return { scrollTarget, isVisible }
  },
})
</script>
