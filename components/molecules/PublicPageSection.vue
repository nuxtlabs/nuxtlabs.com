<template>
  <section class="relative font-sans px-4" :class="sectionClass">
    <!-- dark bg -->
    <div
      v-if="darkMode"
      class="absolute w-full inset-x-0 bg-primary-900 z-0 h-full -z-1"
    />
    <!-- container -->
    <div
      class="flex flex-col items-center w-full mx-auto max-w-7xl"
      :class="[
        containerClass,
        containerContentAlign
          ? `justify-center md:justify-between ${
              containerContentAlign === 'left'
                ? 'md:flex-row'
                : 'md:flex-row-reverse'
            }`
          : 'justify-center',
      ]"
    >
      <!-- container image -->
      <Markdown use="container" unwrap="p" />
      <!-- content -->
      <div
        class="flex flex-col justify-center space-y-4"
        :class="[
          contentClass,
          contentPositionClass,
          { 'w-4/5': containerContentAlign },
          { 'text-white z-10': darkMode },
        ]"
      >
        <!-- content Image -->
        <Markdown use="contentImage" unwrap="p" />
        <!-- content title -->
        <h2 class="text-xl sm:text-2xl font-semibold">
          <Markdown use="contentTitle" unwrap="p" />
        </h2>
        <!-- content description -->
        <p
          class="text-md sm:text-lg"
          :class="[
            containerContentAlign ? 'w-full' : 'md:w-2/3',
            darkMode ? 'text-white' : 'text-primary-500',
          ]"
        >
          <Markdown use="contentDescription" unwrap="p" />
        </p>
        <!-- content footer -->
        <Markdown use="contentFooter" unwrap="p" />
      </div>
    </div>
    <!-- image absolute -->
    <Markdown use="absoluteImage" unwrap="p" />
  </section>
</template>
<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'

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
    containerContentAlign: {
      type: String,
      default: null,
      validator: (value) => ['left', 'right'].includes(value as string),
    },
    containerClass: {
      type: String,
      default: '',
    },
    darkMode: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const contentPositionClass = computed(() => {
      return [
        'text-center items-center',
        {
          left: 'md:items-start md:text-left',
          right: 'md:items-end md:text-right',
        }[props.contentPosition],
      ].join(' ')
    })

    return {
      contentPositionClass,
    }
  },
})
</script>
