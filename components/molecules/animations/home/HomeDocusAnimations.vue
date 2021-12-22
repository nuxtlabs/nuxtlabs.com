<template>
  <div
    class="pointer-events-none h-full w-full flex justify-center md:justify-start lg:pl-60"
  >
    <svg fill="none" viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg">
      <rect
        id="container"
        x="1.5"
        y="226.5"
        width="225"
        height="451"
        rx="4.5"
        transform="rotate(-90 1.5 226.5)"
        stroke="white"
        stroke-width="3"
      />
      <path
        id="separator"
        d="M181 0.999878V228"
        stroke="white"
        stroke-width="3"
      />
      <path
        id="dies"
        d="M25.5533 38.9999L26.228 35.8084H23.6019V33.7112H26.684L27.2493 31.0486H24.5685V28.9514H27.7052L28.38 25.8146H30.5684L29.8936 28.9514H33.3586L34.0334 25.8146H36.2218L35.5653 28.9514H37.9361V31.0486H35.1094L34.544 33.7112H36.9695V35.8084H34.0881L33.4134 38.9999H31.2067L31.8997 35.8084H28.4347L27.7599 38.9999H25.5533ZM28.8724 33.7112H32.3374L32.921 31.0486H29.456L28.8724 33.7112Z"
        fill="white"
      />
      <line
        ref="firstLineLeft"
        x1="54.5001"
        y1="31.4999"
        x2="156.5"
        y2="31.4999"
        stroke="white"
        stroke-width="5"
        stroke-linecap="round"
        stroke-dasharray="200"
      />
      <line
        ref="secondLineRight"
        x1="245.5"
        y1="59.4999"
        x2="393.5"
        y2="59.4999"
        stroke="white"
        stroke-width="5"
        stroke-linecap="round"
        stroke-dasharray="200"
      />
      <line
        ref="firstLineRight"
        x1="268.5"
        y1="40.4999"
        x2="370.5"
        y2="40.4999"
        stroke="white"
        stroke-width="5"
        stroke-linecap="round"
        stroke-dasharray="200"
      />
      <line
        ref="secondLineLeft"
        x1="23.5001"
        y1="58.4999"
        x2="156.5"
        y2="58.4999"
        stroke="white"
        stroke-width="5"
        stroke-linecap="round"
        stroke-dasharray="200"
      />
      <rect
        ref="rectSmall"
        x="22.0001"
        y="88.9999"
        width="136"
        height="30"
        rx="5"
        stroke="white"
        stroke-width="2"
        stroke-dasharray="400"
      />
      <rect
        ref="rect"
        x="215"
        y="88.9999"
        width="210"
        height="99"
        rx="5"
        stroke="white"
        stroke-width="2"
        stroke-dasharray="800"
      />
      <g ref="ghost">
        <path
          ref="ghost"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M296 137.5C296 124.521 306.521 114 319.5 114C332.479 114 343 124.521 343 137.5C343 150.479 332.479 161 319.5 161H296V137.5ZM316.96 132.419C319.766 132.419 322.041 134.694 322.041 137.5C322.041 140.306 319.766 142.581 316.96 142.581C314.153 142.581 311.879 140.306 311.879 137.5C311.879 134.694 314.153 132.419 316.96 132.419ZM337.284 137.5C337.284 134.694 335.009 132.419 332.203 132.419C329.396 132.419 327.122 134.694 327.122 137.5C327.122 140.306 329.396 142.581 332.203 142.581C335.009 142.581 337.284 140.306 337.284 137.5Z"
          fill="white"
        />
      </g>
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
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const firstLineRight = ref(null)
    const firstLineLeft = ref(null)
    const secondLineRight = ref(null)
    const secondLineLeft = ref(null)
    const rectSmall = ref(null)
    const rect = ref(null)
    const ghost = ref(null)
    const scrollTarget = ref(null)
    const isVisible = ref(false)
    const instances = []
    const anims = [
      {
        strokeDashoffset: 200,
        component: firstLineLeft,
      },
      {
        strokeDashoffset: 200,
        component: firstLineRight,
      },
      {
        strokeDashoffset: 200,
        component: secondLineLeft,
      },
      {
        strokeDashoffset: 200,
        component: secondLineRight,
      },
      {
        strokeDashoffset: 400,
        component: rectSmall,
      },
      {
        strokeDashoffset: 800,
        component: rect,
      },
      {
        component: ghost,
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

          ghostInstance.set('initial')
          ghostInstance.apply('in')
        }
      },
      { threshold: 0.8 },
    )

    onMounted(() => {
      anims.forEach((anim, i) => {
        instances.push(
          useMotion(anim.component, {
            initial: {
              strokeDashoffset: anim.strokeDashoffset,
            },
            in: {
              strokeDashoffset: 0,
              transition: {
                delay: i * 400,
                duration: 1000,
                ease: 'circOut',
              },
            },
          }),
        )
      })
    })

    const ghostInstance = useMotion(ghost, {
      initial: {
        opacity: 0,
      },
      in: {
        opacity: 1,
        transition: {
          delay: 2400,
          duration: 800,
        },
      },
    })

    instances.forEach((instance) => {
      instance.apply('initial')
    })

    onBeforeUnmount(() => {
      stop()
    })

    return {
      firstLineLeft,
      firstLineRight,
      secondLineLeft,
      secondLineRight,
      rect,
      rectSmall,
      scrollTarget,
      ghost,
    }
  },
})
</script>
