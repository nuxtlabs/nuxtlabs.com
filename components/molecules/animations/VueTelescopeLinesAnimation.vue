<template>
  <div class="w-full h-full">
    <div
      v-for="(line, i) in lineItems"
      :key="i"
      ref="lines"
      class="absolute w-double-screen rounded-full bg-primary-900 z-10"
      :style="{
        opacity: `${line.opacity}%`,
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
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const lineItems = [
      {
        opacity: 5,
        top: 50,
        left: -7,
        deg: 10,
        height: 16,
        transformOrigin: 'left',
      },
      {
        opacity: 5,
        top: 4,
        left: -8,
        deg: -3,
        height: 16,
        transformOrigin: 'left',
      },
      {
        opacity: 5,
        top: 120,
        left: -70,
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
        instance.apply('eenter')
      })
    })

    return {
      lines,
      lineItems,
    }
  },
})
</script>
