<template>
  <section
    ref="scrollTarget"
    class="relative font-sans px-4 overflow-hidden"
    :class="[sectionClass, darkMode ? 'bg-primary-900' : 'bg-white']"
  >
    <!-- animations -->
    <Markdown use="animations" unwrap="p" />
    <!-- container -->
    <div
      class="flex flex-col items-center w-full mx-auto max-w-7xl"
      :class="[
        containerClass,
        { 'text-white': darkMode },
        containerContentAlign
          ? `justify-center md:justify-between ${
              containerContentAlign === 'left'
                ? 'md:flex-row'
                : 'md:flex-row-reverse'
            }`
          : 'justify-center',
      ]"
    >
      <!-- container -->
      <Markdown use="container" unwrap="p" />
      <!-- content -->
      <div
        class="flex flex-col justify-center space-y-4 px-4 w-full transition-all transform duration-400 delay-300"
        :class="[
          content.isVisible
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 ' +
              ((contentPositionClass === 'left' && 'sm:-translate-x-2') ||
                (contentPositionClass === 'right' && 'sm:translate-x-2')),
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
        <!-- grid -->
        <ul class="grid" :class="gridClass">
          <Markdown use="grid" />
        </ul>
      </div>
    </div>
    <!-- image absolute -->
    <Markdown use="absoluteImage" unwrap="p" />
  </section>
</template>
<script lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
import {
  defineComponent,
  computed,
  ref,
  onBeforeUnmount,
  reactive,
} from '@nuxtjs/composition-api'

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
    gridClass: {
      type: String,
      default: 'grid-cols-1 md:grid-cols-2 gap-16 lg:gap-8 pt-12',
    },
  },
  setup(props) {
    const scrollTarget = ref()
    const content = reactive({ isVisible: false })

    const contentPositionClass = computed(() => {
      return [
        'text-center items-center',
        {
          left: 'md:items-start md:text-left',
          right: 'md:items-end md:text-right',
        }[props.contentPosition],
      ].join(' ')
    })

    const { stop } = useIntersectionObserver(
      scrollTarget,
      ([{ isIntersecting }]) => {
        if (!content.isVisible && isIntersecting) {
          content.isVisible = true
          stop()
        }
      },
      { threshold: 0.2 },
    )

    onBeforeUnmount(() => {
      stop()
    })

    return {
      contentPositionClass,
      scrollTarget,
      content,
    }
  },
})
</script>
