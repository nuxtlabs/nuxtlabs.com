<template>
  <div>
    <svg
      width="160"
      height="161"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- 1 --->
      <rect
        ref="shape1"
        width="12.327"
        height="42.171"
        rx="6.164"
        stroke="#BFBFC5"
        stroke-width="3"
        stroke-dasharray="200"
      />
      <!-- 2 --->
      <rect
        ref="shape2"
        width="16.221"
        height="78.608"
        rx="8.11"
        stroke="#BFBFC5"
        stroke-width="3"
        stroke-dasharray="200"
      />
      <!-- 3 --->
      <rect
        ref="shape3"
        width="19.139"
        height="121.021"
        rx="9.569"
        stroke="#BFBFC5"
        stroke-width="3"
        stroke-dasharray="400"
      />
      <!-- 4 --->
      <rect
        ref="shape4"
        width="16.221"
        height="78.608"
        rx="8.11"
        stroke="#BFBFC5"
        stroke-width="3"
        stroke-dasharray="200"
      />
      <!-- 5 --->
      <rect
        ref="shape5"
        width="12.327"
        height="42.171"
        rx="6.164"
        stroke="#BFBFC5"
        stroke-width="3"
        stroke-dasharray="200"
      />
      <circle ref="circle" cx="80" cy="80.999" r="34" fill="#EDEDEE" />
      <path
        ref="icon"
        d="M72.367 86.9a1.667 1.667 0 1 0 2.364 2.35 1.667 1.667 0 0 0-2.364-2.35Zm0-14.15a1.667 1.667 0 1 0 2.364 2.35 1.667 1.667 0 0 0-2.364-2.35Zm8.25 16.666a1.667 1.667 0 1 0 1.666 1.666 1.666 1.666 0 0 0-1.666-1.75v.084Zm-10-10a1.667 1.667 0 1 0 1.666 1.666 1.666 1.666 0 0 0-1.666-1.75v.084Zm10-10a1.667 1.667 0 1 0 1.666 1.666 1.666 1.666 0 0 0-1.666-1.75v.084Zm5.9 3.416a1.667 1.667 0 1 0 2.35 0 1.667 1.667 0 0 0-2.35-.083v.083Zm10.5 0a18.334 18.334 0 1 0-13.084 26.234 6.452 6.452 0 0 0 4.167-2.75 7 7 0 0 0 1.017-5.317 9.428 9.428 0 0 1-.167-1.667 8.333 8.333 0 0 1 5-7.6 6.398 6.398 0 0 0 3.433-3.75 6.666 6.666 0 0 0-.366-5.183v.033ZM94.183 76.9a3.168 3.168 0 0 1-1.666 1.817 11.666 11.666 0 0 0-6.9 10.616c.002.784.08 1.565.233 2.334a3.598 3.598 0 0 1-.517 2.75 2.985 2.985 0 0 1-2.016 1.333c-.89.167-1.794.251-2.7.25a14.998 14.998 0 0 1-15-15.467A15.083 15.083 0 0 1 79.75 66h.85a15 15 0 0 1 13.433 8.333c.382.792.436 1.703.15 2.534v.033Zm-13.566 2.433a1.667 1.667 0 1 0 0 3.334 1.667 1.667 0 0 0 0-3.334Z"
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
        strokeDashoffset: 200,
        component: shape1,
        rotate: 45,
        x: 51.82,
        y: 21,
      },
      {
        strokeDashoffset: 200,
        component: shape2,
        rotate: 45,
        x: 80.584,
        y: 25,
      },
      {
        strokeDashoffset: 400,
        component: shape3,
        rotate: 45,
        x: 116.802,
        y: 29.437,
      },
      {
        strokeDashoffset: 200,
        component: shape4,
        rotate: -135,
        x: 83.47,
        y: 136.054,
      },
      {
        strokeDashoffset: 200,
        component: shape5,
        rotate: -135,
        x: 112.235,
        y: 140.054,
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
                  rotate: shape.rotate,
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
