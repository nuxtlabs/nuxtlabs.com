<template>
  <section class="relative font-sans">
    <div
      v-if="darkMode"
      class="absolute w-full inset-x-0 bg-gray-900 z-0 h-full"
    />
    <Markdown use="image" />
    <div :class="sectionClass">
      <slot />
      <div :class="contentClass">
        <span class="font-semibold" :class="titleSizeClass">
          <Markdown use="title" />
        </span>
        <p
          :class="[
            { 'text-lg': !hero },
            descriptionSizeClass,
            descriptionWidth,
          ]"
          class="leading-relaxed"
        >
          <Markdown use="description" />
        </p>
        <div v-if="$slots.content">
          <Markdown use="content" />
        </div>
        <div
          v-if="$slots.grid"
          class="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-8 pt-12"
        >
          <Markdown use="grid" />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, computed } from '#app'

export default defineComponent({
  props: {
    contentPosition: {
      type: String,
      default: 'left',
      validator: (value) => ['left', 'center', 'right'].includes(value as any),
    },
    darkMode: {
      type: Boolean,
      default: false,
    },
    hero: {
      type: Boolean,
      default: false,
    },
    paddingClass: {
      type: String,
      default: 'py-20 lg:py-28 xl:py-40',
    },
    flexDirection: {
      type: String,
      default: 'column',
      validator: (value) => ['column', 'row'].includes(value as any),
    },
    flexResponsive: {
      type: Boolean,
      default: false,
    },
    descriptionWidth: {
      type: String,
      default: 'md:w-2/3',
    },
    textSize: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value as any),
    },
  },
  setup(props) {
    const titleSizeClass = computed(() => {
      return {
        sm: 'text-2xl',
        md: 'text-3xl',
        lg: 'text-5xl',
        xl: 'text-6xl',
      }[props.textSize]
    })

    const descriptionSizeClass = computed(() => {
      return [
        props.descriptionWidth,
        {
          sm: 'text-sm',
          md: 'text-md',
          lg: 'text-lg',
          xl: 'text-xl',
        }[props.textSize],
      ].join(' ')
    })

    const sectionClass = computed(() => {
      return [
        'flex h-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl',
        {
          column: 'flex-col justify-center',
          'column-reverse': 'flex-col-reverse justify-center',
          row: props.flexResponsive
            ? `flex-col justify-center md:flex-row md:items-center`
            : 'flex-row items-center',
          'row-reverse': props.flexResponsive
            ? `flex-col-reverse justify-center items-center md:flex-row-reverse `
            : 'flex-row-reverse items-center',
        }[props.flexDirection],
      ].join(' ')
    })

    const containerClass = computed(() => {
      return [
        'flex flex-col justify-center',
        props.hero ? 'space-y-6' : 'space-y-4',
        {
          left: 'text-left',
          center: 'items-center text-center',
          right: 'items-end text-right',
        }[props.contentPosition],
      ].join(' ')
    })

    const textClass = computed(() => {
      return {
        true: 'text-white z-20',
        false: 'text-gray-900',
      }[props.darkMode]
    })

    const contentClass = computed(() => {
      return [textClass.value, containerClass.value, props.paddingClass].join(
        ' ',
      )
    })

    return {
      titleSizeClass,
      descriptionSizeClass,
      sectionClass,
      contentClass,
    }
  },
})
</script>
