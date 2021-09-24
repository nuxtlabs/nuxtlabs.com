<template>
  <svg
    ref="root"
    width="384"
    height="357"
    viewBox="0 0 384 357"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M213.428 343.911C203.805 360.577 179.749 360.577 170.127 343.911L3.53901 55.3724C-6.08349 38.7057 5.94461 17.8723 25.1896 17.8723H358.365C377.61 17.8723 389.638 38.7056 380.016 55.3723L213.428 343.911Z"
        fill="white"
      />
      <line
        ref="verticalLine"
        x1="0.152345"
        y1="76.783"
        x2="383.402"
        y2="76.783"
        stroke="black"
        stroke-width="30"
        stroke-dasharray="384"
      />
      <line
        ref="horizontalLine"
        x1="272.303"
        y1="7.76367"
        x2="113.056"
        y2="283.587"
        stroke="black"
        stroke-width="30"
        stroke-dasharray="305"
      />
    </g>
  </svg>
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
  },
  setup(props) {
    const root = ref(null)
    const verticalLine = ref(null)
    const horizontalLine = ref(null)

    const rootInstance = useMotion(root, {
      initial: {
        scale: 0.25,
        opacity: 0,
      },
      eenter: {
        scale: 1,
        opacity: 1,
        // transition: {
        //   duration: 500,
        // },
      },
      leave: {
        scale: 0,
        opacity: 0,
      },
    })

    const verticalLineInstance = useMotion(verticalLine, {
      initial: {
        strokeDashoffset: 384,
        strokeWidth: 5,
      },
      eenter: {
        strokeDashoffset: 0,
        strokeWidth: 30,
        transition: {
          strokeWidth: {
            delay: 200,
          },
        },
      },
    })

    const horizontalLineInstance = useMotion(horizontalLine, {
      initial: {
        strokeDashoffset: 305,
        strokeWidth: 5,
      },
      eenter: {
        strokeDashoffset: 0,
        strokeWidth: 30,
        transition: {
          strokeWidth: {
            delay: 200,
          },
        },
      },
    })

    rootInstance.apply('initial')
    verticalLineInstance.apply('initial')
    horizontalLineInstance.apply('initial')

    watch(
      () => props.showAnimation,
      (nVal) => {
        if (nVal) {
          rootInstance.set('initial')
          verticalLineInstance.set('initial')
          horizontalLineInstance.set('initial')
          rootInstance.apply('eenter')
          verticalLineInstance.apply('eenter')
          horizontalLineInstance.apply('eenter')
        } else {
          rootInstance.apply('leave')
        }
      },
      { immediate: true },
    )

    return {
      root,
      verticalLine,
      horizontalLine,
    }
  },
})
</script>

<style scoped>
svg * {
  transform-box: fill-box;
}
</style>
