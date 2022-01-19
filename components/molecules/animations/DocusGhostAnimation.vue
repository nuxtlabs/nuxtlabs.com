<template>
  <div ref="ghostMascot">
    <Ghost class="h-full" />
  </div>
</template>

<script lang="ts">
import { useMotion } from '@vueuse/motion'
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const ghostMascot = ref(null)

    const ghostMascotInstance = useMotion(ghostMascot, {
      initial: {
        opacity: 0,
        scaleX: 0,
        scaleY: 0,
        transformOrigin: 'bottom left',
      },
      enter: {
        opacity: 1,
        scaleX: 1,
        scaleY: 1,
        transition: {
          type: 'spring',
          bounce: 0.4,
        },
      },
      leave: {
        opacity: 0,
        scaleX: 0,
        scaleY: 0,
        transformOrigin: 'top right',
        transition: {
          type: 'backOut',
          duration: 250,
        },
      },
    })

    onMounted(() => {
      ghostMascotInstance.apply('enter')
    })

    return {
      ghostMascot,
    }
  },
})
</script>
