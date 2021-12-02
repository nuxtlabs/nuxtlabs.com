<template>
  <div ref="root" class="w-full h-full">
    <img
      v-for="(gem, i) in gemItems"
      ref="gems"
      :key="i"
      :src="`img/nuxt/gem${i + 1}.svg`"
      class="absolute"
      :style="{ top: `${gem.top}%`, left: `${gem.left}%` }"
    />
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
  setup(props, { emit }) {
    const gemItems = [
      {
        top: 40,
        left: 40,
      },
      {
        top: 80,
        left: 18,
      },
      {
        top: 30,
        left: 30,
      },
      {
        top: 30,
        left: 65,
      },
      {
        top: 70,
        left: 60,
      },
      {
        top: 15,
        left: 8,
      },
      {
        top: 85,
        left: 85,
      },
    ]

    const root = ref(null)
    const gems = ref(null)

    const rootInstance = useMotion(root)
    rootInstance.set({ opacity: 0 })

    onMounted(() => {
      const instances = []
      gems.value.forEach((gem, i) => {
        instances.push(
          useMotion(gem, {
            initial: {
              opacity: 0,
              scale: 0,
              rotate: 25,
            },
            enter: {
              transition: {
                duration: 250,
                delay: i * 50,
                ease: 'easeOut',
              },
              opacity: 1,
              scale: 1,
              rotate: 0,
            },
            leave: {
              opacity: 0,
              scale: 0,
              rotate: -25,
              transition: {
                duration: 250,
                ease: 'easeIn',
                onComplete: () => emit('on-complete'),
              },
            },
          }),
        )
      })

      watch(
        () => props.showAnimation,
        (nVal) => {
          if (nVal) {
            rootInstance.set({ opacity: 1 })
            instances.forEach((instance) => {
              instance.set('initial')
              instance.apply('enter')
            })
          } else {
            instances.forEach((instance) => {
              instance.apply('leave')
            })
          }
        },
      )
    })

    return {
      gemItems,
      root,
      gems,
    }
  },
})
</script>
