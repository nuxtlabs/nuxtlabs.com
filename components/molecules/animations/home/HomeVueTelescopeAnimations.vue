<template>
  <div
    class="pointer-events-none h-full w-full flex justify-center md:justify-start pb-12 lg:pr-20"
  >
    <svg fill="none" viewBox="-20 0 500 300" xmlns="http://www.w3.org/2000/svg">
      <path
        ref="backShape"
        d="M159 9a6.457 6.457 0 0 1 6.977-6.436l225.086 18.19A6.457 6.457 0 0 1 397 27.19v162.688a6.457 6.457 0 0 1-7.088 6.426l-225.086-22.108A6.458 6.458 0 0 1 159 167.77V9Z"
        fill="#0A0A0B"
        stroke="#fff"
        stroke-width="3.229"
      />
      <path
        d="M80 40.003a6.457 6.457 0 0 1 6.98-6.436L312.066 51.85A6.457 6.457 0 0 1 318 58.286v163.588a6.457 6.457 0 0 1-7.092 6.426L85.823 206.079A6.458 6.458 0 0 1 80 199.653V40.003Z"
        fill="#0A0A0B"
        stroke="#fff"
        stroke-width="3.229"
      />
      <path
        ref="frontShape"
        d="M2 64a6.457 6.457 0 0 1 6.977-6.436l225.086 18.19A6.457 6.457 0 0 1 240 82.19v162.688a6.457 6.457 0 0 1-7.088 6.426L7.826 229.196A6.458 6.458 0 0 1 2 222.77V64Z"
        fill="#0A0A0B"
        stroke="#fff"
        stroke-width="3.229"
      />
      <g ref="zoom">
        <circle cx="223.97" cy="240.185" r="33.34" fill="#080808" />
        <path
          d="m271.722 282.328-16.87-16.746a40.983 40.983 0 0 0-4.613-56.126 40.91 40.91 0 0 0-28.433-10.441 40.91 40.91 0 0 0-27.819 11.981 40.977 40.977 0 0 0-1.539 56.294 40.905 40.905 0 0 0 56.083 4.617l16.734 16.747a4.56 4.56 0 0 0 3.229 1.346 4.542 4.542 0 0 0 3.228-1.346 4.553 4.553 0 0 0 0-6.326Zm-48.701-10.421a31.818 31.818 0 0 1-17.685-5.368 31.872 31.872 0 0 1-4.823-49.012 31.819 31.819 0 0 1 34.689-6.906 31.838 31.838 0 0 1 14.285 11.733 31.87 31.87 0 0 1-3.958 40.223 31.82 31.82 0 0 1-22.508 9.33Z"
          fill="#fff"
        />
      </g>
      <path
        ref="logo"
        d="m217.048 251.136 3.976 7a2.475 2.475 0 0 0 4.323 0l14.838-26.128h-12.274l-10.863 19.128ZM229.664 228.922h12.274l.129-.228c.961-1.691-.24-3.806-2.162-3.806h-7.95l-2.291 4.034ZM228.449 224.888l-2.291 4.034h-21.725l-.129-.228c-.961-1.691.24-3.806 2.161-3.806h21.984ZM224.406 232.008l-9.11 16.042-9.11-16.042h18.22Z"
        fill="#fff"
      />
    </svg>

    <div ref="scrollTarget" class="absolute bottom-40" />
  </div>
</template>
<script lang="ts">
import { useMotion } from '@vueuse/motion'
import {
  defineComponent,
  onMounted,
  ref,
  onBeforeUnmount,
} from '@nuxtjs/composition-api'
import { useIntersectionObserver } from '@vueuse/core'

export default defineComponent({
  setup() {
    const backShape = ref(null)
    const frontShape = ref(null)
    const logo = ref(null)
    const zoom = ref(null)
    const scrollTarget = ref(null)
    const isVisible = ref(false)
    const instances = []

    const anims = [
      {
        xInitial: -79,
        yInitial: 32,
        component: backShape,
      },
      {
        xInitial: 79,
        yInitial: -25,
        component: frontShape,
      },
      {
        component: zoom,
      },
      {
        component: logo,
      },
    ]

    anims.forEach((anim, i) => {
      instances.push(
        anim.xInitial
          ? useMotion(anim.component, {
              initial: {
                strokeWidth: 3,
                x: anim.xInitial,
                y: anim.yInitial,
              },
              in: {
                x: 0,
                y: 0,
                transition: {
                  duration: 1000,
                },
              },
            })
          : useMotion(anim.component, {
              initial: {
                opacity: 0,
              },
              in: {
                opacity: 1,
                transition: {
                  delay: i * 600,
                  duration: 400,
                },
              },
            }),
      )
    })

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
    )

    onMounted(() => {
      instances.forEach((instance) => {
        instance.apply('initial')
      })
    })

    onBeforeUnmount(() => {
      stop()
    })

    return {
      backShape,
      frontShape,
      scrollTarget,
      zoom,
      logo,
    }
  },
})
</script>
