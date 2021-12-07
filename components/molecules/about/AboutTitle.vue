<template>
  <h1
    class="
      text-4xl
      xs:text-5xl
      sm:text-6xl
      md:text-7xl
      lg:text-8xl
      uppercase
      font-extrabold
      flex flex-col
      title-stroke
    "
  >
    <span class="overflow-hidden">
      <span
        ref="lineOne"
        class="
          animate-one
          transform
          translate-y-full
          origin-left
          whitespace-nowrap
        "
      >
        From a <span class="title-stroke-filled">&nbsp;passion&nbsp;</span>
      </span>
    </span>
    <span ref="lineContainer" class="overflow-hidden line">
      <span ref="lineParent" class="relative">
        <span
          ref="lineTwo"
          class="
            animate-two
            transform
            translate-y-full
            whitespace-nowrap
            relative
            origin-left
          "
        >
          to a
          <span class="title-stroke-filled">&nbsp;company </span>
        </span>
        <span
          ref="line"
          class="
            opacity-0
            sm:opacity-100
            absolute
            bottom-2.5
            -right-12
            bg-black
            h-0.5
            w-0
            transform
            translate-x-full
            origin-left
            transition-width
            duration-600
            delay-150
          "
        ></span>
      </span>
    </span>
  </h1>
</template>

<script>
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api'
import { useMotion } from '@vueuse/motion'

export default defineComponent({
  setup() {
    const lineOne = ref()
    const lineTwo = ref()
    const lineContainer = ref()
    const lineParent = ref()
    const line = ref()

    const lineOneInstance = ref()
    const lineTwoInstance = ref()

    onMounted(() => {
      // animate line
      const lineWidth =
        lineContainer.value?.clientWidth - lineParent.value?.clientWidth
      line.value.style.width = lineWidth + 'px'

      // animate title
      setLineOneInstance()
      setLineTwoInstance()
    })

    function setLineOneInstance() {
      lineOneInstance.value = useMotion(lineOne, {
        initial: {
          y: lineOne.value?.clientHeight,
          opacity: 0,
          rotateX: 40,
          rotateY: 4,
          rotateZ: 4,
          scale: 0.9,
        },
        enter: {
          y: 0,
          opacity: 1,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          scale: 1,
          transition: {
            duration: 600,
            ease: 'circOut',
          },
        },
      })
    }

    function setLineTwoInstance() {
      lineTwoInstance.value = useMotion(lineTwo, {
        initial: {
          y: lineTwo.value?.clientHeight,
          opacity: 0,
          rotateX: 40,
          rotateY: 8,
          rotateZ: 4,
          scale: 0.9,
        },
        enter: {
          y: 0,
          opacity: 1,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          scale: 1,
          transition: {
            delay: 15,
            duration: 600,
            ease: 'circOut',
          },
        },
      })
    }

    return { lineOne, lineTwo, lineContainer, lineParent, line }
  },
})
</script>

<style scoped lang="postcss">
h1 >>> {
  span {
    display: flex;
  }
}
</style>
