<template>
  <div class="w-full h-full">
    <div
      v-for="(line, i) in lineItems"
      :key="i"
      ref="lines"
      class="absolute w-double-screen bg-red-500 rounded-full"
      :style="{
        background: '#4DDFB5',
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
import { defineComponent, ref, watch, onMounted } from '#app'

export default defineComponent({
  props: {
    showAnimation: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const lineItems = [
      {
        top: 24,
        left: -10,
        deg: 6,
        height: 10,
        transformOrigin: 'left',
      },
      {
        top: 77,
        left: -18,
        deg: -42,
        height: 16,
        transformOrigin: 'left',
      },
      {
        top: -15,
        left: -36,
        deg: -33,
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
            leave: {
              scaleX: 0,
              height: 0,
              // transition: {
              //   duration: 500,
              // },
            },
          }),
        )
      })

      watch(
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
      )
    })

    return {
      lines,
      lineItems,
    }
  },
})
</script>
