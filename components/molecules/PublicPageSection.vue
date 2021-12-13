<template>
  <section class="relative font-sans" :class="sectionClass">
    <!-- container -->
    <div
      class="flex items-center justify-center w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
      :class="[
        containerClass,
        containerImgPosition
          ? `space-x-4 ${
              containerImgPosition === 'left' ? 'flex-row' : 'flex-row-reverse'
            }`
          : '',
      ]"
    >
      <Markdown use="containerImage" unwrap="p" />
      <!-- content with direction -->
      <div
        class="flex flex-col justify-center space-y-4"
        :class="[contentClass, contentPositionClass]"
      >
        <!-- Image -->
        <Markdown use="contentImage" unwrap="p" />
        <!-- title -->
        <h2 class="text-3xl font-semibold">
          <Markdown use="contentTitle" unwrap="p" />
        </h2>
        <!-- description -->
        <p class="text-lg md:w-2/3">
          <Markdown use="contentDescription" unwrap="p" />
        </p>
        <!-- content -->
        <Markdown use="contentFooter" unwrap="p" />
      </div>
    </div>
    <!-- image absolute -->
    <Markdown use="absoluteImage" unwrap="p" />
  </section>
</template>
<script lang="ts">
import { defineComponent, computed } from '#app'

export default defineComponent({
  props: {
    contentPosition: {
      type: String,
      default: 'center',
      validator: (value) =>
        ['left', 'center', 'right'].includes(value as string),
    },
    contentClass: {
      type: String,
      default: 'py-20',
    },
    sectionClass: {
      type: String,
      default: '',
    },
    containerImgPosition: {
      type: String,
      default: '',
      validator: (value) => ['', 'left', 'right'].includes(value as string),
    },
    containerClass: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const contentPositionClass = computed(() => {
      return [
        {
          left: 'text-left',
          center: 'items-center text-center',
          right: 'items-end text-right',
        }[props.contentPosition],
      ].join(' ')
    })

    return {
      contentPositionClass,
    }
  },
})
</script>
