<template>
  <div
    class="notification-container ring-gray-200 bg-gray-50"
    @mouseover="onMouseover"
    @mouseout="onMouseout"
  >
    <div class="p-4 flex">
      <Component :is="iconName" class="w-6 h-6" :class="iconColorClass" />
      <div class="ml-3 flex-1 pt-0.5">
        <p class="text-sm font-medium leading-5 text-gray-900">
          {{ title }}
        </p>
        <p v-if="description" class="mt-1 text-sm leading-5 text-gray-600">
          {{ description }}
        </p>
      </div>
      <AppButton
        button-class="ml-4 self-start focus:outline-none hover:text-gray-500 focus:text-gray-500 text-gray-900"
        icon-path="/img/navigation/close.svg"
        icon-class="w-5 h-5"
        @click.native.stop="close"
      >
      </AppButton>
    </div>
    <div v-if="timeout" class="absolute bottom-0 left-0 right-0">
      <div
        class="h-1"
        :class="progressBarColorClass"
        :style="progressBarStyle"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  onMounted,
  onBeforeUnmount,
  ref,
  useContext,
} from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      default: 'info',
      validator(value: any) {
        return ['info', 'success', 'error', 'warning'].includes(value)
      },
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    timeout: {
      type: Number,
      default: 5000,
    },
    callback: {
      type: Function,
      default: null,
    },
  },
  setup(props, { emit }) {
    const timer = ref(null)
    const ticker = ref(null)
    const remainingTime = ref(props.timeout)
    const { $timer, $ticker } = useContext()

    // computed
    const iconName = computed(() => {
      return (
        props.icon ||
        {
          warning: 'IconAlertWarning',
          info: 'IconAlertInfo',
          success: 'IconAlertSuccess',
          error: 'IconAlertDanger',
        }[props.type]
      )
    })

    const iconColorClass = computed(() => {
      return (
        {
          warning: 'text-yellow-700',
          info: 'text-blue-400',
          success: 'text-green-400',
          error: 'text-red-400',
        }[props.type] || 'text-primary-400'
      )
    })

    const progressBarColorClass = computed(() => {
      return (
        {
          warning: 'bg-yellow-700',
          info: 'bg-blue-400',
          success: 'bg-green-400',
          error: 'bg-red-400',
        }[props.type] || 'bg-primary-400'
      )
    })

    const progressBarStyle = computed(() => {
      const remainingPercent = (remainingTime.value / props.timeout) * 100
      return { width: `${remainingPercent}%` }
    })

    // mounted
    onMounted(() => {
      if (!$timer) {
        return
      }
      if (props.timeout) {
        timer.value = new $timer(() => {
          close()
          ticker?.value.stop()
        }, props.timeout)
        ticker.value = new $ticker(() => {
          remainingTime.value -= 10
        }, 10)
      }
    })
    // before unmount
    onBeforeUnmount(() => {
      if (timer.value) {
        timer.value.stop()
        ticker.value.stop()
      }
    })

    // methods
    function onMouseover() {
      if (timer.value) {
        timer.value.pause()
        ticker.value.stop()
      }
    }

    function onMouseout() {
      if (timer.value) {
        timer.value.resume()
        ticker.value.start()
      }
    }

    function close() {
      if (props.callback) {
        this.callback()
      }
      emit('close')
    }

    return {
      timer,
      ticker,
      iconName,
      iconColorClass,
      progressBarColorClass,
      progressBarStyle,
      onMouseover,
      onMouseout,
      close,
    }
  },
})
</script>
<style lang="postcss" scoped>
.notification-container {
  @apply z-50 w-full relative overflow-hidden pointer-events-auto shadow-lg rounded-lg ring-1;
  animation: transition-opacity 0.5s ease-in-out;
}

@keyframes transition-opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
