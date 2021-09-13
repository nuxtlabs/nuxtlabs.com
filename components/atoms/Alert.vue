<template>
  <div
    class="p-4 mt-4 mb-4 rounded-lg alert text-sm leading-loose"
    :class="[type]"
  >
    <div class="flex items-center space-x-4">
      <div>
        <Component :is="iconComponent" class="w-5 h-5" />
      </div>
      <div class="flex-grow alert-content">
        <Markdown unwrap="p" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    /**
     * @values info, success, warning, danger, next, star
     */
    type: {
      type: String,
      default: 'info',
      validator(value) {
        return [
          'info',
          'success',
          'warning',
          'danger',
          'next',
          'star',
        ].includes(value)
      },
    },
  },
  setup(props) {
    const iconComponent = computed(
      () =>
        `IconAlert${props.type.charAt(0).toUpperCase() + props.type.slice(1)}`,
    )

    return {
      iconComponent,
    }
  },
})
</script>

<style lang="postcss" scoped>
.alert {
  &.success {
    @apply bg-green-900 text-green-200;
    >>> {
      code {
        @apply bg-green-700 shadow-none text-current;
      }
      a:hover {
        code {
          @apply border-green-400 dark:border-green-700;
        }
      }
    }
  }
  &.info {
    @apply bg-blue-600 bg-opacity-60 text-blue-100;
    >>> {
      code {
        @apply bg-blue-700 shadow-none text-current;
      }
      a:hover {
        code {
          @apply border-blue-400 dark:border-blue-700;
        }
      }
    }
  }
  &.next {
    @apply bg-gray-900 text-white;
    >>> {
      code {
        @apply bg-gray-900 dark:bg-opacity-50 shadow-none text-current;
      }
      a:hover {
        code {
          @apply border-gray-600;
        }
      }
    }
  }
  &.warning {
    @apply bg-yellow-700 text-yellow-100 opacity-80;
    >>> {
      code {
        @apply bg-yellow-600 shadow-none text-current;
      }
      a:hover {
        code {
          @apply border-yellow-400 dark:border-yellow-700;
        }
      }
    }
  }
  &.danger {
    @apply bg-red-900 text-red-200;
    >>> {
      code {
        @apply bg-red-700 shadow-none text-current;
      }
      a:hover {
        code {
          @apply border-red-400 dark:border-red-700;
        }
      }
    }
  }
  >>> {
    strong {
      @apply font-semibold text-current;
    }
    a {
      @apply border-none font-semibold text-current;
      &:hover {
        @apply opacity-50;
      }
      code {
        @apply border border-transparent border-dashed;
      }
    }
  }
}
.alert >>> p {
  @apply m-0 !important;
}
.dark .alert {
  >>> {
    a {
      @apply text-current;
    }
  }
}
</style>
