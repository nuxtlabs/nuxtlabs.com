<template>
  <section
    class="
      relative
      sm:px-8
      lg:px-12
      w-full
      opacity-0
      transition-opacity
      duration-600
    "
    :class="[isVisible && 'opacity-100']"
  >
    <h2 ref="scrollTarget" class="text-3xl font-bold text-center mb-3">
      The Team
    </h2>
    <Markdown />
    <img
      :src="`img/about/teamWorld.svg`"
      alt="Position of every team member on a map"
      class="
        hidden
        md:block
        w-full
        absolute
        -z-1
        inset-x-0
        transform
        -translate-x-1/2
        top-3/5
      "
    />
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
