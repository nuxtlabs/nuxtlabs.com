<template>
  <div
    class="relative flex py-8 items-center max-w-42rem"
    :class="[align === 'left' && 'mr-auto', align === 'right' && 'ml-auto']"
  >
    <span
      class="
        hidden
        sm:block
        absolute
        top-0
        w-0.5
        bg-black
        h-full
        transform
        transition-transform
        origin-top
        duration-600
        delay-100
      "
      :class="[
        align === 'left' && 'left-0',
        align === 'right' && 'right-0',
        isVisible ? 'scale-y-100' : 'scale-y-0',
      ]"
    ></span>
    <div
      class="transition-all transform duration-400 delay-300"
      :class="[
        align === 'left' && 'sm:ml-10 md:ml-16 lg:ml-20 text-left',
        align === 'right' && 'sm:mr-10 md:mr-16 lg:mr-20 sm:text-right',

        isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 ' +
            ((align === 'left' && 'sm:-translate-x-2') ||
              (align === 'right' && 'sm:translate-x-2')),
      ]"
    >
      <span class="block uppercase font-bold opacity-70 mb-2">
        <Markdown use="category" unwrap="p" />
      </span>
      <h1 class="text-3xl font-bold mb-3">
        <Markdown use="title" unwrap="p" />
      </h1>
      <Markdown use="content" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    align: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right'].includes(value)
      },
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    //
  },
})
</script>

<style scoped>
.line {
  transform-origin: top;
  animation: line 500ms forwards;
}

@keyframes line {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}
</style>
