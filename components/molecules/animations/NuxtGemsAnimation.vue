<template>
  <div>
    <img
      v-for="(gem, i) in gemItems"
      ref="gems"
      :key="i"
      :src="`img/nuxt/gem${i + 1}.svg`"
      class="absolute -z-1"
      :style="{ top: `${gem.top}%`, left: `${gem.left}%` }"
    />
  </div>
</template>

<script lang="ts">
import { useMotion } from '@vueuse/motion'
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    showAnimation: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const gemItems = [
      {
        // 4
        top: 70,
        left: 40,
      },
      {
        // 2
        top: 50,
        left: 18,
      },
      {
        // 3
        top: 20,
        left: 30,
      },
      {
        // 6
        top: 60,
        left: 65,
      },
      {
        // 5
        top: 0,
        left: 60,
      },
      {
        // 1
        top: 0,
        left: 8,
      },
      {
        // 7
        top: 40,
        left: 85,
      },
    ]

    const root = ref(null)
    const gems = ref(null)

    const rootInstance = useMotion(root)
    rootInstance.set({ opacity: 0 })

    onMounted(() => {
      const instances = []
      gems.value.forEach((gem, i: number) => {
        instances.push(
          useMotion(gem, {
            initial: {
              opacity: 0,
              scale: 0,
              rotate: 25,
            },
            enter: {
              transition: {
                duration: 350,
                delay: i * 100,
                ease: 'easeOut',
              },
              opacity: 1,
              scale: 1,
              rotate: 0,
            },
          }),
        )
      })

      instances.forEach((instance) => {
        rootInstance.set({ opacity: 1 })
        instance.apply('enter')
      })
    })

    return {
      gemItems,
      root,
      gems,
    }
  },
})
</script>
