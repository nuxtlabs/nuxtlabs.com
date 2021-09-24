<template>
  <NuxtLink
    :to="project.to"
    class="group w-full relative flex items-center justify-end py-2"
    @mouseenter.native="mouseEnterHandler"
    @mouseleave.native="mouseLeaveHandler"
  >
    <HomeHeroLinkTitle
      :title="project.title"
      :show-animation="showAnimation"
      :sub-title="project.subTitle"
    />

    <component
      :is="project.componentAnim"
      :show-animation="showAnimation"
      class="-z-1"
    />
  </NuxtLink>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const showAnimation = ref(false)
    function mouseEnterHandler() {
      showAnimation.value = true
      emit('active', props.project)
    }
    function mouseLeaveHandler() {
      showAnimation.value = false
      emit('active', false)
    }
    return { mouseEnterHandler, mouseLeaveHandler, showAnimation }
  },
})
</script>
