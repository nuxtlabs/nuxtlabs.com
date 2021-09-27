<template>
  <div ref="root" class="pointer-events-none fixed top-0 left-0 w-full h-full">
    <div
      class="absolute bottom-24 sm:bottom-0 left-1/2 md:right-1/5 xl:right-1/3"
    >
      <DocusGhostAnimation
        :show-animation="showAnimation"
        class="h-54 md:h-72 inline-block"
      />
    </div>

    <div class="absolute top-4 right-10 h-48 transform rotate-90">
      <DocusFiguresAnimation
        :show-animation="showAnimation"
        class="h-full w-full"
      />
    </div>

    <div class="absolute top-1/2 md:top-1/4 left-0 h-48 md:h-96">
      <DocusFiguresAnimation
        :show-animation="showAnimation"
        class="h-full w-full"
        @on-complete="closeRoot"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from '@nuxtjs/composition-api'
import { useMotion } from '@vueuse/motion'

export default defineComponent({
  props: {
    showAnimation: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const root = ref(null)

    const rootInstance = useMotion(root)
    rootInstance.set({ opacity: 0 })

    onMounted(() => {
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
    })

    function closeRoot() {
      rootInstance.set({ opacity: 0 })
    }

    return {
      root,
      closeRoot,
    }
  },
})
</script>
