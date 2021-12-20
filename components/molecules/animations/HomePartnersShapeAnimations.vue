<template>
  <div>
    <div
      v-for="(shape, index) in shapes"
      :key="index"
      class="absolute transform"
      :style="{
        top: `${shape.top}%`,
        left: `${shape.left}%`,
        height: `${shape.height}rem`,
        width: `${shape.width}rem`,
        transform: shape.rotate ? `rotate(${shape.rotate}deg)` : none,
      }"
    >
      <Component :is="shape.component" ref="partnersShape" />
    </div>
    <div ref="scrollTarget" class="absolute bottom-40" />
  </div>
</template>
<script lang="ts">
import { useMotion } from '@vueuse/motion'
import { useIntersectionObserver } from '@vueuse/core'
import {
  defineComponent,
  ref,
  onMounted,
  onBeforeUnmount,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const shapes = [
      {
        top: 45,
        left: 15,
        width: 4,
        height: 4,
        component: 'Round',
        strokeDashoffset: 200,
      },
      {
        top: 20,
        left: 75,
        width: 4,
        height: 4,
        component: 'RoundSmall',
        strokeDashoffset: 150,
      },
      {
        top: 20,
        left: 40,
        width: 4,
        height: 4,
        component: 'CurvedLine',
        strokeDashoffset: 50,
      },
      {
        top: 85,
        left: 24,
        width: 4,
        height: 4,
        component: 'CurvedLine',
        rotate: 120,
        strokeDashoffset: 50,
      },
      {
        top: 60,
        left: 75,
        width: 4,
        height: 4,
        component: 'CurvedLine',
        rotate: 40,
        strokeDashoffset: 50,
      },
      {
        top: 5,
        left: 30,
        width: 4,
        height: 4,
        component: 'SquareMedium',
        strokeDashoffset: 400,
        rotate: 45,
      },
      {
        top: 35,
        left: 80,
        width: 4,
        height: 4,
        component: 'Square',
        strokeDashoffset: 400,
        rotate: 45,
      },
      {
        top: 80,
        left: 60,
        width: 4,
        height: 4,
        component: 'SquareSmall',
        strokeDashoffset: 400,
        rotate: 45,
      },
      {
        top: 80,
        left: 40,
        width: 4,
        height: 4,
        component: 'StadiumSmall',
        strokeDashoffset: 400,
        rotate: 45,
      },
      {
        top: 10,
        left: 50,
        width: 4,
        height: 4,
        component: 'Stadium',
        strokeDashoffset: 400,
        rotate: 45,
      },
    ]

    const partners = ref(null)
    const partnersShape = ref(null)
    const scrollTarget = ref()
    const isVisible = ref(false)
    const instances = []
    const shape = ref()

    const { stop } = useIntersectionObserver(
      scrollTarget,
      ([{ isIntersecting }]) => {
        if (!isVisible.value && isIntersecting) {
          isVisible.value = true
          stop()

          instances.forEach((instance) => {
            instance.set('initial')
            instance.apply('in')
          })
        }
      },
      { threshold: 1 },
    )

    onMounted(() => {
      partnersShape.value = partnersShape.value.map(
        (shape) => shape.$refs.shape,
      )
      // shape.value = partnersShape.value[0].$refs.shape
      partnersShape.value.forEach((shape, i: number) => {
        instances.push(
          useMotion(shape, {
            initial: {
              strokeDashoffset: shapes[i].strokeDashoffset,
            },
            in: {
              strokeDashoffset: 0,
              transition: {
                delay: i * 100,
                duration: 2000,
                ease: 'circOut',
              },
            },
          }),
        )
      })
    })

    instances.forEach((instance) => {
      instance.apply('initial')
    })

    onBeforeUnmount(() => {
      stop()
    })

    return {
      partners,
      scrollTarget,
      shapes,
      partnersShape,
      shape,
    }
  },
})
</script>
