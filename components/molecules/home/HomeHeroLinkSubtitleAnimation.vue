<template>
  <!-- <span class="bg-red-500 w-24 block">suka</span> -->
  <span
    ref="subtitle"
    class="
      flex
      items-center
      pointer-events-none
      bg-black bg-opacity-50
      rounded-lg
      px-2
      py-2
      h-min
      blur-sm
      text-gray-200
    "
  >
    <span
      class="
        flex-1
        text-lg
        xl:text-xl
        2xl:text-2xl
        font-sans font-normal
        max-w-96
      "
      >{{ subTitle }}</span
    >
    <span ref="line" class="bg-gray-200 h-2px ml-8 mr-4 block"></span>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from '@nuxtjs/composition-api'
import { useMotion } from '@vueuse/motion'

export default defineComponent({
  props: {
    showAnimation: {
      type: Boolean,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const subtitle = ref(null)
    const line = ref(null)

    const subtitleInstance = useMotion(subtitle, {
      initial: {
        opacity: 0,
      },
      eenter: {
        opacity: 1,
      },
      leave: {
        opacity: 0,
      },
    })
    const lineInstance = useMotion(line, {
      initial: {
        width: 0,
      },
      eenter: {
        width: 50,
        transition: {
          // duration: 200,
          type: 'spring',
          damping: 25,
        },
      },
      leave: {
        width: 0,
        transition: {
          duration: 250,
          ease: 'easeOut',
        },
      },
    })
    subtitleInstance.apply('initial')

    watch(
      () => props.showAnimation,
      (nVal) => {
        if (nVal) {
          subtitleInstance.apply('eenter')
          lineInstance.set('initial')
          lineInstance.apply('eenter')
        } else {
          lineInstance.apply('leave')
          subtitleInstance.apply('leave')
        }
      },
      { immediate: true },
    )

    return {
      subtitle,
      line,
    }
  },
})
</script>
