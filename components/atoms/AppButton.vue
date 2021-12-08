<template>
  <!-- eslint-disable-next-line vue/require-component-is -->
  <Component
    v-bind="buttonProps"
    :class="buttonClass ? buttonClass : ['app-button', size, variant]"
  >
    <Component :is="icon" v-if="icon" class="mr-2 icon" :class="size" />

    <Markdown unwrap="p" />

    <IconExternalLink v-if="externalIcon" class="ml-2 icon" :class="size" />
  </Component>
</template>

<script lang="ts">
import { defineComponent, computed } from '#app'

export default defineComponent({
  props: {
    to: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'medium',
    },
    baseClass: {
      type: String,
      default: '',
    },
    buttonClass: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    externalIcon: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: 'dark',
      validator(value) {
        return ['dark', 'white'].includes(value as any)
      },
    },
  },
  setup(props) {
    const buttonProps = computed(() => {
      const { to, href } = props
      if (to?.length) {
        return {
          is: 'Link',
          to,
        }
      } else if (href?.length) {
        return {
          is: 'Link',
          href,
        }
      } else {
        return {
          is: 'button',
        }
      }
    })

    return {
      buttonProps,
    }
  },
})
</script>

<style lang="postcss" scoped>
.app-button {
  @apply border-1 px-5 rounded-lg py-2 font-medium;
  &.small {
    @apply text-xs leading-2 py-2;
  }
  &.large {
    @apply text-base leading-6;
  }
  &.dark {
    @apply border-gray-700 bg-primary-900 text-white hover:bg-white hover:text-black;
  }
  &.white {
    @apply border-gray-400 hover:bg-primary-900 hover:text-white;
  }
}

.icon {
  @apply w-4 h-4;
  &.large {
    @apply w-5 h-5;
  }
}
</style>
