<template>
  <div class="w-full h-full">
    <div
      v-for="(line, i) in lineItems"
      :key="i"
      ref="lines"
      class="absolute w-double-screen rounded-full"
      :style="{
        background: '#0A0A0B',
        top: `${line.top}%`,
        left: `${line.left}%`,
        transform: `rotate(${line.deg}deg)`,
        transformOrigin: line.transformOrigin,
      }"
    ></div>
  </div>
</template>

<script lang="ts">
import { useMotion } from '@vueuse/motion'
import { defineComponent, ref, onMounted } from '#app'

export default defineComponent({
  setup() {
    const lineItems = [
      {
        top: 150,
        left: -5,
        deg: -50,
        height: 16,
        transformOrigin: 'left',
      },
      {
        top: 4,
        left: -3,
        deg: -3,
        height: 16,
        transformOrigin: 'left',
      },
      {
        top: 120,
        left: -80,
        deg: 40,
        height: 20,
        transformOrigin: 'right',
      },
    ]
    const lines = ref(null)

    onMounted(() => {
      const instances = []
      lines.value.forEach((line, i) => {
        instances.push(
          useMotion(line, {
            initial: {
              scaleX: 0,
              height: 0,
            },
            eenter: {
              scaleX: 1,
              height: lineItems[i].height,
              transition: {
                duration: 500,
              },
            },
          }),
        )
      })

      instances.forEach((instance) => {
        instance.set('initial')
        instance.apply('eenter')
      })

      /* watch(
        () => props.showAnimation,
        (nVal) => {
          if (nVal) {
            instances.forEach((instance) => {
              instance.set('initial')
              instance.apply('eenter')
            })
          } else {
            instances.forEach((instance) => {
              instance.apply('leave')
            })
          }
        },
        { immediate: true },
      ) */
    })

    return {
      lines,
      lineItems,
    }
  },
})
</script>
