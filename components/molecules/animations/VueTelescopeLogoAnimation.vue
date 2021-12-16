<template>
  <svg
    ref="root"
    width="384"
    height="358"
    viewBox="0 0 384 358"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0"
      style="mask-type: alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="18"
      width="384"
      height="339"
    >
      <path
        d="M213.428 344.175C203.805 360.841 179.749 360.841 170.127 344.175L3.53901 55.6358C-6.08349 38.9691 5.94461 18.1357 25.1896 18.1357H358.365C377.61 18.1357 389.638 38.969 380.016 55.6357L213.428 344.175Z"
        fill="#313136"
      />
    </mask>
    <g mask="url(#mask0)">
      <path
        d="M213.428 344.175C203.805 360.841 179.749 360.841 170.127 344.175L3.53901 55.6358C-6.08349 38.9691 5.94461 18.1357 25.1896 18.1357H358.365C377.61 18.1357 389.638 38.969 380.016 55.6357L213.428 344.175Z"
        fill="#313136"
      />
      <line
        ref="verticalLine"
        x1="0.152345"
        y1="76.783"
        x2="383.402"
        y2="76.783"
        stroke="white"
        stroke-width="30"
        stroke-dasharray="384"
      />
      <line
        ref="horizontalLine"
        x1="272.303"
        y1="7.76367"
        x2="113.056"
        y2="283.587"
        stroke="white"
        stroke-width="30"
        stroke-dasharray="305"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { useMotion } from '@vueuse/motion'
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
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
            delay: 300,
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
            delay: 300,
          },
        },
      },
    })

    onMounted(() => {
      rootInstance.apply('eenter')
      verticalLineInstance.apply('eenter')
      horizontalLineInstance.apply('eenter')
    })

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
