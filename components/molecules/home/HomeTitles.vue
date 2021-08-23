<template>
  <ul class="flex-1 flex flex-col items-end justify-center space-y-4" id="container">
    <li v-for="({ title, component }, index) in titles" :key="index">
      <div class="flex flex-row-reverse items-center">
        <Link :id="component" :class="component" to="#" @mouseover.native="mouseHover(component)" @mouseleave.native="hover = !hover">
          <h1 :id="`${component}Title`" class="lg:text-display-3 xl:text-display-2 2xl:text-display-1 title relative z-10 title-shadow text-right"
            :class="hover ? 'opacity-30' : 'opacity-100'" >{{ title }}</h1>
        </Link>
        <hr id="line" class="relative border-none h-0.5 rounded-lg bg-white text-white w-4 ml-2 2xl:ml-4 mr-6 xl:mr-8 2xl:mr-12 opacity-0" />
        <p class="text-lg xl:text-xl 2xl:text-2xl font-sans lg:max-w-96 xl:w-max-128 font-normal opacity-0">
          {{ subtitles[index] }}
        </p>
        <component :is="component" :id="component" />
      </div>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    subtitles: {
      type: Array,
      default: () => [
        'Build your next Vue.js application with confidence using NuxtJS.',
        'Your website builder faster than light and made with Markdown.',
        'Vue plugins and technology stack powering any website revealed.'
      ]
    }
  },
  setup() {
    const hover = ref(false)
    const componentHovered = ref(null)
    const titles = ref([
      { title: 'NuxtJS', component: 'NuxtAnimations' },
      { title: 'Docus', component: 'DocusAnimations' },
      { title: 'Vue Telescope', component: 'VueTelescopeAnimations' }
    ])

    //to avoid animation start on load
    onMounted(() => {
      titles.value.forEach(title => {
        document.getElementById(title.component).classList.remove(title.component)
      });
    })

    //add css classes first time on hover
    function mouseHover(componentName: string) {
      hover.value = true

      if (!document.getElementById(componentName).classList.contains(componentName)) {
        console.log('first time')
        document.getElementById(componentName).classList.add(componentName)
      }
    }

    return {
      titles,
      hover,
      mouseHover,
      componentHovered
    }
  }
})
</script>
<style lang="postcss" scoped>
.NuxtAnimations,
.DocusAnimations,
.VueTelescopeAnimations {
  &:hover {
    > h1 {
      animation: colorTextIn 1s forwards;
      opacity: 1;
    }
    ~ p {
      animation: subTitleIn 1s forwards
    }
    ~ hr {
      animation: lineIn 1s forwards
    }
  }
}

.NuxtAnimations,
.DocusAnimations,
.VueTelescopeAnimations {
  > h1 {
    animation: colorTextOut 0.5s forwards;
  }
  ~ p {
    animation: subTitleOut 0.5s forwards
  }
  ~ hr {
    animation: lineOut 0.5s forwards
  }
}

@keyframes colorTextIn {
  from { color: black; }
  to { color: white; }
}

@keyframes colorTextOut {
  from { color: white; }
  to { color: black; }
}

@-webkit-keyframes subTitleIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@-webkit-keyframes subTitleOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

@-webkit-keyframes lineIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
  0% {
    @apply w-2 2xl:w-4
  }
  100% {
    @apply w-12 2xl:w-16
  }
}

@-webkit-keyframes lineOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
  0% {
    @apply w-12 2xl:w-16
  }
  100% {
    @apply w-2 2xl:w-4
  }
}
</style>
