<template>
  <div>
    <img
      v-for="(star, index) in homeStars"
      ref="stars"
      :key="index"
      src="/img/home/hero-stars.svg"
      alt="star"
      class="absolute opacity-40 md:opacity-100"
      :style="{
        top: `${star.top}%`,
        left: `${star.left}%`,
        height: `${star.height}rem`,
        width: `${star.width}rem`,
      }"
    />
  </div>
</template>
<script lang="ts">
import { useMotion } from '@vueuse/motion'
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const homeStars = [
      {
        top: 0,
        left: 14,
        width: 2,
        height: 2,
      },
      {
        top: 60,
        left: 8,
        width: 3,
        height: 3,
      },
      {
        top: 24,
        left: 90,
        width: 2.5,
        height: 2.5,
      },
    ]

    const stars = ref(null)

    onMounted(() => {
      const instances = []
      stars.value.forEach((star, i: number) => {
        instances.push(
          useMotion(star, {
            initial: {
              opacity: 0,
              scale: 0,
              rotate: 25,
            },
            enter: {
              transition: {
                duration: 1000,
                delay: i * 200,
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
        instance.apply('enter')
      })
    })

    return {
      stars,
      homeStars,
    }
  },
})
</script>
