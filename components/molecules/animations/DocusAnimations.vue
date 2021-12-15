<template>
  <div class="pointer-events-none w-full h-full">
    <div
      class="hidden lg:block absolute bottom-24 sm:bottom-0 -left-4 md:right-1/5 xl:right-1/3"
    >
      <DocusGhostAnimation class="h-54 md:h-72 inline-block" />
    </div>

    <div class="absolute -top-32 left-0 h-48 transform rotate-90">
      <DocusFiguresAnimation class="h-full w-full" />
    </div>

    <div
      class="absolute -bottom-12 md:bottom-0 -right-4 lg:top-4 lg:-right-10 xl:right-10 h-48 lg:h-96 transform rotate-90 lg:rotate-0"
    >
      <DocusFiguresAnimation class="h-full w-full" />
    </div>
  </div>
</template>

<script lang="ts">
import { useMotion } from '@vueuse/motion'
import { defineComponent, ref } from '#app'

export default defineComponent({
  setup() {
    const root = ref(null)

    const rootInstance = useMotion(root)
    rootInstance.set({ opacity: 1 })

    /* onMounted(() => {
      watch(
        () => props.showAnimation,
        (nVal) => {
          if (nVal) {
            rootInstance.set({ opacity: 1 })
          } else {
            //
          }
        },
        { immediate: true },
      )
    }) */

    return {
      root,
    }
  },
})
</script>
