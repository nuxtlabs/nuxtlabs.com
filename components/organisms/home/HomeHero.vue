<template>
  <section class="relative pb-8">
    <img
      v-for="(star, index) in stars"
      :key="index"
      src="/img/home/hero-stars.svg"
      alt="star"
      class="absolute"
      :style="{
        top: `${star.top}%`,
        left: `${star.left}%`,
        height: `${star.height}rem`,
        width: `${star.width}rem`,
      }"
    />
    <div
      class="max-w-7xl mx-auto py-20 mb-60 flex flex-col space-y-8 items-center justify-center text-center"
    >
      <h1 class="font-semibold text-6xl">
        <Markdown use="title" unwrap="p" />
      </h1>

      <p class="font-semibold text-2xl">
        <Markdown use="description" unwrap="p" />
      </p>
    </div>
    <img
      src="/img/home/hero-landscape.svg"
      alt="landscape"
      class="absolute landscape-bottom-desktop"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const stars = [
      {
        top: 0,
        left: 14,
        width: 2,
        height: 2,
      },
      {
        top: 48,
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

    return {
      stars,
    }
  },
})
</script>
