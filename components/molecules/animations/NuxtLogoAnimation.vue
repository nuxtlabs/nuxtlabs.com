<template>
  <svg
    ref="root"
    viewBox="0 0 116 78"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M36.7378 4.15814C39.9976 -1.3823 48.1451 -1.3823 51.4048 4.15814L86.9233 64.5371C90.183 70.0776 86.1093 77.0028 79.591 77.0028H8.5504C2.03216 77.0028 -2.04159 70.0776 1.21692 64.5371L36.7378 4.15814Z"
        fill="white"
      />
      <path
        ref="smallTriangle"
        d="M69.1921 15.1219L69.1921 15.122L40.1301 64.522L40.1298 64.5225C35.6251 72.1818 41.3431 81.5028 50.0087 81.5028H108.132C116.797 81.5028 122.516 72.1815 118.009 64.5219L88.9493 15.1221L88.9492 15.1219C84.5421 7.63142 73.5992 7.63142 69.1921 15.1219Z"
        fill="white"
        stroke="black"
        stroke-width="9"
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
    const smallTriangle = ref(null)

    const rootInstance = useMotion(root, {
      initial: {
        scale: 0.5,
        opacity: 0,
      },
      eenter: {
        scale: 1,
        opacity: 1,
      },
      leave: {
        scale: 0.25,
        opacity: 0,
      },
    })

    const smallTriangleInstance = useMotion(smallTriangle, {
      initial: {
        strokeWidth: 0,
        x: -35,
        y: -4.5,
      },
      enter: {
        strokeWidth: 9,
        x: 0,
        y: 0,
        transition: {
          strokeWidth: {
            delay: 250,
          },
          y: {
            delay: 250,
          },
          duration: 250,
          // type: 'spring',
          // bounce: 0.4,
        },
      },
    })

    rootInstance.apply('initial')

    watch(
      () => props.showAnimation,
      (nVal) => {
        if (nVal) {
          rootInstance.apply('eenter')
          smallTriangleInstance.set('initial')
          smallTriangleInstance.apply('enter')
        } else {
          rootInstance.apply('leave')
        }
      },
      { immediate: true },
    )

    return {
      smallTriangle,
      root,
    }
  },
})
</script>

<style scoped>
svg * {
  transform-box: fill-box;
}
</style>
