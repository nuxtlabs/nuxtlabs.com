<template>
  <li>
    <div
      class="flex flex-col lg:flex-row-reverse items-center h-full text-center"
    >
      <div :id="`${componentAnim}Link`">
        <NuxtLink
          :to="to"
          class="
            text-white text-display-5
            sm:text-display-3
            xl:text-display-2
            2xl:text-display-1
            title
            relative
            z-10
            title-shadow
            text-center
            lg:text-right
          "
          @mouseenter.native="!isTouchDevice && mouseHover()"
          @mouseleave.native="!isTouchDevice && mouseLeave()"
        >
          <span>{{ title }}</span>
        </NuxtLink>
      </div>
      <hr
        class="
          relative
          border-none
          h-0.5
          rounded-lg
          bg-white
          text-white
          my-4
          lg:my-0
          w-4
          ml-2
          2xl:ml-4
          mr-6
          xl:mr-8
          2xl:mr-12
          opacity-0
        "
      />
      <p
        class="
          text-center
          lg:text-left
          text-lg
          xl:text-xl
          2xl:text-2xl
          font-sans
          lg:max-w-96
          xl:w-max-128
          font-normal
          opacity-0
        "
      >
        {{ subTitle }}
      </p>
      <component :is="componentAnim" />
    </div>
  </li>
</template>
<script lang="ts">
import { ref, defineComponent, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    componentAnim: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    let currentTitle = null
    const isTouchDevice = ref(false)
    const animsComponent = [
      'HomeNuxtAnimations',
      'HomeDocusAnimations',
      'HomeVueTelescopeAnimations',
    ]

    onMounted(() => {
      currentTitle = document.getElementById(`${props.componentAnim}Link`)
      // Detect if screen is a mobile: https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript/4819886#4819886
      isTouchDevice.value =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-ignore
        navigator.msMaxTouchPoints > 0
    })

    // add animations class (not before to avoid animations start on load)
    function mouseHover() {
      currentTitle.classList.add(props.componentAnim)

      // opacity
      animsComponent.forEach((component) => {
        if (component === props.componentAnim) {
          opacity(currentTitle)
        } else {
          opacity(component, true)
        }
      })
    }

    function mouseLeave() {
      animsComponent.forEach((component) => {
        opacity(component)
      })
    }

    function opacity(componentName: any, opacity: Boolean = false) {
      const title =
        typeof componentName === 'string'
          ? document.getElementById(`${componentName}Link`)
          : componentName
      title.classList.add(opacity ? 'opacity-30' : 'opacity-100')
      title.classList.remove(opacity ? 'opacity-100' : 'opacity-30')
    }

    return {
      isTouchDevice,
      mouseHover,
      mouseLeave,
    }
  },
})
</script>
<style lang="postcss" scoped>
.HomeNuxtAnimations,
.HomeDocusAnimations,
.HomeVueTelescopeAnimations {
  ~ p {
    animation: subTitleOut 0.5s forwards;
  }
  ~ hr {
    animation: lineOut 0.5s forwards;
  }
  &:hover {
    > a {
      animation: colorTextIn 1s forwards;
    }
    ~ p {
      animation: subTitleIn 1s forwards;
    }
    ~ hr {
      animation: lineIn 1s forwards;
    }
  }
}

@keyframes colorTextIn {
  from {
    color: black;
  }
  to {
    color: white;
  }
}

@keyframes colorTextOut {
  from {
    color: white;
  }
  to {
    color: black;
  }
}

@keyframes subTitleIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes subTitleOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes lineIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
  0% {
    @apply w-2 2xl:w-4;
  }
  100% {
    @apply w-12 2xl:w-16;
  }
}

@keyframes lineOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
  0% {
    @apply w-12 2xl:w-16;
  }
  100% {
    @apply w-2 2xl:w-4;
  }
}
</style>
