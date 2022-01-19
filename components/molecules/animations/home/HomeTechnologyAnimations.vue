<template>
  <div>
    <svg
      width="160"
      height="160"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        ref="shape1"
        width="15.6889"
        height="15.6889"
        rx="3"
        transform="rotate(45 97.0939 10)"
        stroke="#BFBFC5"
        stroke-width="3"
        stroke-dasharray="100"
      />
      <rect
        ref="shape2"
        width="24.2685"
        height="24.2685"
        rx="5"
        stroke="#BFBFC5"
        stroke-width="3"
        stroke-dasharray="200"
      />
      <rect
        ref="shape3"
        width="26.8316"
        height="26.8316"
        rx="3"
        stroke="#BFBFC5"
        stroke-width="3"
        stroke-dasharray="200"
      />
      <rect
        ref="shape4"
        width="34.432"
        height="34.432"
        rx="6"
        stroke="#BFBFC5"
        stroke-width="3"
        stroke-dasharray="200"
      />
      <rect
        ref="shape5"
        width="66.4698"
        height="47.2155"
        rx="6"
        stroke="#BFBFC5"
        stroke-width="3"
        stroke-dasharray="400"
      />
      <circle ref="circle" cx="80" cy="80" r="34" fill="#EDEDEE" />
      <path
        ref="icon"
        d="M91.6668 65H68.3335C67.0074 65 65.7356 65.5268 64.798 66.4645C63.8603 67.4021 63.3335 68.6739 63.3335 70V83.3333C63.3335 84.6594 63.8603 85.9312 64.798 86.8689C65.7356 87.8065 67.0074 88.3333 68.3335 88.3333H78.3335V91.6667H71.6668C71.2248 91.6667 70.8009 91.8423 70.4883 92.1548C70.1758 92.4674 70.0002 92.8913 70.0002 93.3333C70.0002 93.7754 70.1758 94.1993 70.4883 94.5118C70.8009 94.8244 71.2248 95 71.6668 95H88.3335C88.7755 95 89.1994 94.8244 89.512 94.5118C89.8246 94.1993 90.0002 93.7754 90.0002 93.3333C90.0002 92.8913 89.8246 92.4674 89.512 92.1548C89.1994 91.8423 88.7755 91.6667 88.3335 91.6667H81.6668V88.3333H91.6668C92.9929 88.3333 94.2647 87.8065 95.2024 86.8689C96.14 85.9312 96.6668 84.6594 96.6668 83.3333V70C96.6668 68.6739 96.14 67.4021 95.2024 66.4645C94.2647 65.5268 92.9929 65 91.6668 65ZM93.3335 83.3333C93.3335 83.7754 93.1579 84.1993 92.8453 84.5118C92.5328 84.8244 92.1089 85 91.6668 85H68.3335C67.8915 85 67.4675 84.8244 67.155 84.5118C66.8424 84.1993 66.6668 83.7754 66.6668 83.3333V70C66.6668 69.558 66.8424 69.134 67.155 68.8215C67.4675 68.5089 67.8915 68.3333 68.3335 68.3333H91.6668C92.1089 68.3333 92.5328 68.5089 92.8453 68.8215C93.1579 69.134 93.3335 69.558 93.3335 70V83.3333Z"
        fill="#0A0A0B"
      />
    </svg>
    <div ref="scrollTarget" class="absolute bottom-60"></div>
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
  props: {
    imgComponent: {
      type: String,
      default: '',
    },
  },
  setup() {
    const icon = ref(null)
    const shape1 = ref(null)
    const shape2 = ref(null)
    const shape3 = ref(null)
    const shape4 = ref(null)
    const shape5 = ref(null)
    const circle = ref(null)
    const isVisible = ref(false)
    const scrollTarget = ref(null)
    const instances = []
    const shapes = [
      {
        component: icon,
      },
      {
        component: circle,
      },
      {
        strokeDashoffset: 100,
        component: shape1,
        rotate: 45,
        x: 97,
        y: 10,
      },
      {
        strokeDashoffset: 200,
        component: shape2,
        x: 131.161,
        y: 43,
      },
      {
        strokeDashoffset: 200,
        component: shape3,
        rotate: 45,
        x: 120.973,
        y: 106,
      },
      {
        strokeDashoffset: 200,
        component: shape4,
        rotate: 45,
        x: 24.3472,
        y: 106,
      },
      {
        strokeDashoffset: 399,
        component: shape5,
        x: 39.1492,
        y: 7.7627,
      },
    ]

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
      shapes.forEach((shape, i) => {
        instances.push(
          shape.strokeDashoffset
            ? useMotion(shape.component, {
                initial: {
                  strokeDashoffset: shape.strokeDashoffset,
                  rotate: 45,
                  x: shape.x,
                  y: shape.y,
                },
                in: {
                  strokeDashoffset: 0,
                  transition: {
                    delay: i * 200,
                    duration: 1000,
                    ease: 'circOut',
                  },
                },
              })
            : useMotion(shape.component, {
                initial: {
                  opacity: 0,
                  scale: 0,
                  transformOrigin: 'center center',
                },
                in: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: i * 200,
                    duration: 1000,
                  },
                },
              }),
        )
      })
    })

    onBeforeUnmount(() => {
      stop()
    })

    instances.forEach((instance) => {
      instance.set('initial')
      instance.apply('in')
    })

    return {
      shape1,
      shape2,
      shape3,
      shape4,
      shape5,
      icon,
      circle,
      scrollTarget,
    }
  },
})
</script>
