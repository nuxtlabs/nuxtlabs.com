<template>
  <NuxtLink
    :to="project.to"
    class="group w-full relative flex items-center justify-center md:justify-end py-2"
    @pointerenter.native="mouseEnterHandler"
    @pointerleave.native="mouseLeaveHandler"
  >
    <span
      v-if="titleWidth"
      class="hidden lg:block absolute"
      :style="{ right: `${titleWidth}px` }"
    >
      <HomeHeroLinkSubtitleAnimation
        class="mx-4"
        :show-animation="showAnimation"
        :sub-title="project.subTitle"
      />
    </span>
    <span ref="title">
      <HomeHeroLinkTitle
        :title="project.title"
        :show-animation="showAnimation"
        :sub-title="project.subTitle"
      />
    </span>

    <component
      :is="project.componentAnim"
      v-show="showAnimation"
      :show-animation="showAnimation"
      class="-z-1"
    />
  </NuxtLink>
</template>

<script lang="ts">
import { useElementBounding } from '@vueuse/core'
import { defineComponent, ref } from '#app'

export default defineComponent({
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const title = ref(null)
    const showAnimation = ref(false)

    const { width: titleWidth } = useElementBounding(title)

    function mouseEnterHandler(e) {
      if (e.pointerType === 'touch') return

      showAnimation.value = true
      emit('active', props.project)
    }
    function mouseLeaveHandler(e) {
      if (e.pointerType === 'touch') return

      showAnimation.value = false
      emit('active', false)
    }

    return {
      mouseEnterHandler,
      mouseLeaveHandler,
      showAnimation,
      title,
      titleWidth,
    }
  },
})
</script>
