<template>
  <div
    class="pointer-events-none h-full w-full flex justify-center md:justify-start lg:pr-20"
  >
    <svg fill="none" viewBox="0 0 454 250" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="44.5"
        y="1.5"
        width="348"
        height="196"
        rx="4.5"
        stroke="#fff"
        stroke-width="3"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M216.433 82.979c-1.065-1.832-3.728-1.832-4.794 0l-11.611 19.964c-1.065 1.832.267 4.122 2.397 4.122h9.064c-.91-.796-1.247-2.173-.558-3.354l8.793-15.073-3.291-5.66Z"
        fill="#fff"
      />
      <path
        d="M223.79 87.358c.882-1.499 3.086-1.499 3.968 0l9.609 16.334c.882 1.499-.22 3.373-1.984 3.373h-19.218c-1.763 0-2.865-1.874-1.984-3.373l9.609-16.334Z"
        fill="#fff"
      />
      <line
        ref="line"
        x1="167"
        x2="270"
        y1="120"
        y2="120"
        rx="1"
        fill="#fff"
        stroke="#fff"
        stroke-width="2"
        stroke-dasharray="110"
      />
      <circle ref="circle" cx="43.5" cy="194.5" r="36.474" fill="#0A0A0B" />
      <path
        ref="round"
        d="M82 194.5a38.502 38.502 0 0 0-58.128-33.121 38.5 38.5 0 1 0 49.857 56.964"
        stroke="#fff"
        stroke-width="9.118"
        stroke-linecap="round"
        stroke-dasharray="250"
      ></path>
      <text
        ref="counterNumber"
        y="200"
        x="42"
        text-anchor="middle"
        style="
          fill: white;
          font-weight: bold;
          text-align: center;
          font-size: large;
        "
      >
        {{ number.counter }}
      </text>
    </svg>
    <div ref="scrollTarget" class="absolute bottom-0" />
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
  reactive,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const line = ref(null)
    const round = ref(null)
    const circle = ref(null)
    const counterNumber = ref(null)
    const number = reactive({ counter: 0 })

    const anims = [
      {
        strokeDashoffset: 110,
        component: line,
      },
      {
        strokeDashoffset: 250,
        component: round,
      },
      {
        component: circle,
      },
      {
        component: counterNumber,
      },
    ]

    const scrollTarget = ref()
    const isVisible = ref(false)
    const instances = []

    const { stop } = useIntersectionObserver(
      scrollTarget,
      ([{ isIntersecting }]) => {
        if (!isVisible.value && isIntersecting) {
          isVisible.value = true
          stop()

          counter()
          instances.forEach((instance) => {
            instance.set('initial')
            instance.apply('in')
          })
        }
      },
      { threshold: 1 },
    )

    onMounted(() => {
      anims.forEach((anim) => {
        instances.push(
          anim.strokeDashoffset
            ? useMotion(anim.component, {
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
              })
            : useMotion(anim.component, {
                initial: {
                  opacity: 0,
                },
                in: {
                  delay: 0,
                  opacity: 1,
                },
              }),
        )
      })
    })

    function counter() {
      const counter = setInterval(function () {
        if (number.counter < 100) {
          number.counter++
        } else {
          clearInterval(counter)
        }
      }, 10)
    }

    instances.forEach((instance) => {
      instance.apply('initial')
    })

    onBeforeUnmount(() => {
      stop()
    })

    return {
      scrollTarget,
      line,
      round,
      number,
      counter,
      circle,
      counterNumber,
    }
  },
})
</script>
