<template>
  <section
    ref="scrollTarget"
    class="flex flex-col mt-24 md:mt-36 lg:mt-48 mb-24 md:mb-36 lg:mb-48"
  >
    <div class="flex flex-col sm:flex-row items-center">
      <ul
        class="flex sm:flex-col md:flex-row md:mr-12 w-full mb-8 lg:mb-0 lg:w-1/3 items-center justify-center opacity-0 transition-opacity duration-600"
        :class="[isVisible && 'opacity-100']"
      >
        <li
          v-for="project in [
            `img/about/nuxtJSLogo.svg`,
            `img/about/docusLogo.svg`,
            `img/about/VTLogo.svg`,
          ]"
          :key="project"
        >
          <img :src="project" alt="Logo of NuxtJS" class="h-24 w-24" />
        </li>
      </ul>
      <AboutContentTemplate :is-visible="isVisible" />
    </div>
    <blockquote
      class="text-center font-bold text-2xl mt-24 md:mt-36 lg:mt-48 mx-auto max-w-50rem opacity-0 transition-opacity duration-1200"
      :class="[isVisible && 'opacity-100']"
    >
      <Markdown use="quote" unwrap="p" />
    </blockquote>
  </section>
</template>

<script>
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
