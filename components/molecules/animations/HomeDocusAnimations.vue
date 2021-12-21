<template>
  <div ref="scrollTarget" class="pointer-events-none w-full h-full">
    <div class="h-full w-full flex justify-end">
      <svg
        width="454"
        height="228"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.5"
          y="226.5"
          width="225"
          height="451"
          rx="4.5"
          transform="rotate(-90 1.5 226.5)"
          stroke="#fff"
          stroke-width="3"
        />
        <path d="M181 1v227" stroke="#fff" stroke-width="3" />
        <path
          d="m25.553 39 .675-3.192h-2.626v-2.097h3.082l.565-2.662h-2.68V28.95h3.136l.675-3.136h2.188l-.674 3.136h3.465l.674-3.136h2.189l-.657 3.136h2.371v2.098H35.11l-.565 2.662h2.425v2.097h-2.88L33.412 39h-2.206l.693-3.192h-3.465L27.76 39h-2.207Zm3.32-5.289h3.464l.584-2.662h-3.465l-.584 2.662Z"
          fill="#fff"
        />
        <path
          ref="lines"
          stroke="#fff"
          stroke-width="5"
          stroke-linecap="round"
          d="M54.5 31.5h102M245.5 59.5h148M268.5 40.5h102M23.5 58.5h133"
          stroke-dasharray="200"
        />
        <rect
          ref="rectSmall"
          x="22"
          y="89"
          width="136"
          height="30"
          rx="5"
          stroke="#fff"
          stroke-width="2"
        />
        <rect
          ref="rect"
          x="215"
          y="89"
          width="210"
          height="99"
          rx="5"
          stroke="#fff"
          stroke-width="2"
        />
        <path
          ref="ghost"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M296 137.5c0-12.979 10.521-23.5 23.5-23.5s23.5 10.521 23.5 23.5-10.521 23.5-23.5 23.5H296v-23.5Zm20.959-5.081a5.081 5.081 0 1 1 .001 10.163 5.081 5.081 0 0 1-.001-10.163Zm20.325 5.081a5.081 5.081 0 1 0-10.162 0 5.081 5.081 0 0 0 10.162 0Z"
          fill="#fff"
        />
      </svg>
    </div>
  </div>
</template>
<script lang="ts">
import { useMotion } from '@vueuse/motion'
import { useIntersectionObserver } from '@vueuse/core'
import {
  defineComponent,
  ref,
  onBeforeUnmount,
  onMounted,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const lines = ref(null)
    const rectSmall = ref(null)
    const rect = ref(null)
    const scrollTarget = ref(null)
    const isVisible = ref(false)
    const instances = []
    const anims = [
      {
        strokeDashoffset: 200,
        component: lines,
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
      { threshold: 0.8 },
    )

    onMounted(() => {
      anims.forEach((anim) => {
        instances.push(
          useMotion(anim.component, {
            initial: {
              strokeDashoffset: anim.strokeDashoffset,
            },
            in: {
              strokeDashoffset: 0,
              transition: {
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
      lines,
      rect,
      rectSmall,
      scrollTarget,
    }
  },
})
</script>
