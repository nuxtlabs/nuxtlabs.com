<template>
  <div>
    <svg
      width="160"
      height="160"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- 1 -->
      <path
        ref="shape1"
        d="M22 54.1049C27.3495 55.1362 38.8218 54.142 41.9146 41.9145C45.0074 29.687 53.9049 26.1181 57.9671 25.862"
        stroke="#BFBFC5"
        stroke-width="3"
        stroke-linecap="round"
        stroke-dasharray="100"
      />
      <!-- 2 -->
      <path
        ref="shape2"
        d="M135.489 89.4834C132.539 87.5302 127.67 81.8546 131.793 74.7776C135.916 67.7005 133.412 62.001 131.644 60.0359"
        stroke="#BFBFC5"
        stroke-width="3"
        stroke-linecap="round"
        stroke-dasharray="100"
      />
      <!-- 3 -->
      <path
        ref="shape3"
        d="M81.3515 131.498C81.3515 131.498 71.4883 140.697 63.1324 130.226C57.7635 123.498 52.0389 124.628 49 124.628"
        stroke="#BFBFC5"
        stroke-width="3"
        stroke-linecap="round"
        stroke-dasharray="100"
      />
      <!-- 4 -->
      <rect
        ref="shape4"
        width="17.5356"
        height="17.5356"
        rx="8.7678"
        stroke="#BFBFC5"
        stroke-width="3"
        stroke-dasharray="200"
      />
      <!-- 5 -->
      <rect
        ref="shape5"
        width="33.2687"
        height="33.2687"
        rx="16.6344"
        stroke="#BFBFC5"
        stroke-width="3"
        stroke-dasharray="200"
      />
      <!-- 6 -->
      <rect
        ref="shape6"
        width="37.9344"
        height="37.9344"
        rx="18.9672"
        stroke="#BFBFC5"
        stroke-width="3"
        stroke-dasharray="200"
      />
      <circle ref="circle" cx="80" cy="80" r="34" fill="#EDEDEE" />
      <path
        ref="icon"
        d="M95.8165 76.9831L94.1499 76.0664L79.1499 67.7331H78.9665C78.8644 67.6899 78.7583 67.6564 78.6499 67.6331H78.3332H78.0332C77.9193 67.6564 77.8078 67.6899 77.6999 67.7331H77.5165L62.5165 76.0664C62.26 76.2118 62.0467 76.4226 61.8983 76.6773C61.7498 76.932 61.6716 77.2216 61.6716 77.5164C61.6716 77.8112 61.7498 78.1008 61.8983 78.3555C62.0467 78.6102 62.26 78.821 62.5165 78.9664L66.6665 81.2664V89.1664C66.6665 90.4925 67.1933 91.7642 68.131 92.7019C69.0687 93.6396 70.3405 94.1664 71.6665 94.1664H84.9999C86.326 94.1664 87.5977 93.6396 88.5354 92.7019C89.4731 91.7642 89.9999 90.4925 89.9999 89.1664V81.2664L93.3332 79.3997V84.1664C93.3332 84.6084 93.5088 85.0323 93.8214 85.3449C94.1339 85.6575 94.5578 85.8331 94.9999 85.8331C95.4419 85.8331 95.8658 85.6575 96.1784 85.3449C96.4909 85.0323 96.6665 84.6084 96.6665 84.1664V78.4331C96.666 78.1377 96.5871 77.8478 96.4377 77.5931C96.2884 77.3383 96.074 77.1278 95.8165 76.9831V76.9831ZM86.6665 89.1664C86.6665 89.6084 86.4909 90.0323 86.1784 90.3449C85.8658 90.6575 85.4419 90.8331 84.9999 90.8331H71.6665C71.2245 90.8331 70.8006 90.6575 70.488 90.3449C70.1755 90.0323 69.9999 89.6084 69.9999 89.1664V83.1164L77.5165 87.2831L77.7665 87.3831H77.9165C78.0549 87.4005 78.1949 87.4005 78.3332 87.3831C78.4716 87.4005 78.6115 87.4005 78.7499 87.3831H78.8999C78.9884 87.3644 79.0729 87.3306 79.1499 87.2831L86.6665 83.1164V89.1664ZM78.3332 83.9331L66.7665 77.4997L78.3332 71.0664L89.8999 77.4997L78.3332 83.9331Z"
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
    const shape6 = ref(null)
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
        x: 10,
        y: 0,
        rotate: 5,
      },
      {
        strokeDashoffset: 100,
        component: shape2,
        x: 10,
        y: -10,
        rotate: 5,
      },
      {
        strokeDashoffset: 100,
        component: shape3,
        x: 10,
        y: 0,
        rotate: 5,
      },
      {
        strokeDashoffset: 200,
        component: shape4,
        x: 17.3995,
        y: 82,
      },
      {
        strokeDashoffset: 200,
        component: shape5,
        x: 120.525,
        y: 2,
      },
      {
        strokeDashoffset: 200,
        component: shape6,
        x: 124.824,
        y: 102,
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
                  rotate: shape.rotate ? shape.rotate : 45,
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
      shape6,
      icon,
      circle,
      scrollTarget,
    }
  },
})
</script>
