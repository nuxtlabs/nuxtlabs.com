<template>
  <section ref="scrollTarget" class="flex mt-48 mb-48">
    <AboutContentTemplate :is-visible="isVisible" />
  </section>
</template>

<script>
import { defineComponent, ref, onBeforeUnmount } from '@nuxtjs/composition-api'
import { useIntersectionObserver } from '@vueuse/core'

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
