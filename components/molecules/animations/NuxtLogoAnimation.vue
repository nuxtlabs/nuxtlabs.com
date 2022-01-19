<template>
  <svg
    width="333"
    height="324"
    viewBox="0 0 333 324"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M62.7895 17.8765C49.2773 -5.35659 15.4969 -5.35662 1.98477 17.8764L-145.277 271.081C-158.789 294.314 -141.899 323.355 -114.874 323.355H0.0864105C-11.4613 313.263 -15.7375 295.805 -6.99899 280.825L104.53 89.6461L62.7895 17.8765Z"
      fill="#0A0A0B"
    />
    <path
      ref="smallTriangle"
      d="M156.097 73.418C167.28 54.4091 195.236 54.4092 206.418 73.418L328.29 280.585C339.472 299.594 325.494 323.355 303.129 323.355H59.3863C37.0213 323.355 23.0433 299.594 34.2257 280.585L156.097 73.418Z"
      fill="#0A0A0B"
    />
  </svg>
</template>

<script lang="ts">
import { useMotion } from '@vueuse/motion'
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
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
            delay: 500,
          },
          y: {
            delay: 250,
          },
          duration: 500,
        },
      },
    })

    onMounted(() => {
      rootInstance.apply('eenter')
      smallTriangleInstance.apply('enter')
    })

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
