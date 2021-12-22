<template>
  <div>
    <div
      v-for="(logo, index) in partnersLogos"
      :key="index"
      class="relative h-40 w-40"
    >
      <Component
        :is="logo.component"
        ref="partners"
        class="absolute mx-auto"
        :class="`top-${logo.mobileTop} sm:top-${logo.top} left-1/2 sm:left-${logo.left}`"
      />

      <!-- img
      v-for="(logo, index) in partnersLogos"
      ref="partners"
      :key="index"
      :src="`/img/home/partners/${logo.name}`"
      alt="partners logo"
      class="block sm:absolute"
      :class="`sm:top-${logo.top} sm:left-${logo.left}`"
      :style="{
        //top: `${logo.top}%`,
        //left: `${logo.left}%`,
        height: `${logo.height}rem`,
        width: `${logo.width}rem`,
      }"
    /-->
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
    const partnersLogos = [
      {
        mobileTop: '1/2',
        mobileLeft: '1/2',
        top: '20',
        left: '1/2',
        component: 'Vercel',
      },
      {
        mobileTop: '1/3',
        mobileLeft: '1/2',
        top: '70',
        left: '20',
        component: 'Github',
      },
      /* {
        mobileTop: '20',
        mobileLeft: '2/5',
        top: '10',
        left: '60',
        component: 'netlify.svg',
      },
      {
        mobileTop: '0',
        mobileLeft: '0',
        top: '68',
        left: '70',
        component: 'google-chrome.svg',
      }, */
    ]

    const root = ref(null)
    const partners = ref(null)
    const scrollTarget = ref()
    const isVisible = ref(false)
    const instances = []

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
      partners.value.forEach((logo, i: number) => {
        instances.push(
          useMotion(logo, {
            initial: {
              scale: 0,
              opacity: 0,
            },
            in: {
              transition: {
                duration: 1000,
                delay: i * 200,
                ease: 'easeOut',
              },
              opacity: 1,
              scale: 1,
              delay: 500,
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
      partnersLogos,
      partners,
      root,
      scrollTarget,
    }
  },
})
</script>
