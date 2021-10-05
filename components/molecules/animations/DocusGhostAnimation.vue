<template>
  <div ref="ghostMascot">
    <Ghost v-if="showAnimation" class="h-full" />
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
      watch(
        () => props.showAnimation,
        (nVal) => {
          if (nVal) {
            ghostMascotInstance.set('initial')
            ghostMascotInstance.apply('enter')
          } else {
            ghostMascotInstance.apply('leave')
          }
        },
        { immediate: true },
      )
    })

    return {
      ghostMascot,
    }
  },
})
</script>
