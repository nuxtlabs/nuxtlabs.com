<template>
  <NuxtLink
    :to="project.to"
    class="
      group
      w-full
      relative
      flex
      items-center
      justify-center
      md:justify-end
      py-2
    "
    @mouseenter.native="mouseEnterHandler"
    @mouseleave.native="mouseLeaveHandler"
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
      :show-animation="showAnimation"
      class="-z-1"
    />
  </NuxtLink>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { useElementBounding } from '@vueuse/core'

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

    function mouseEnterHandler() {
      showAnimation.value = true
      emit('active', props.project)
    }
    function mouseLeaveHandler() {
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
