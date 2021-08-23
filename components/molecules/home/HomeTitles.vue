<template>
  <ul class="flex-1 flex flex-col items-end justify-center space-y-4">
    <li v-for="({ title, component }, index) in titles" :key="index">
      <div class="flex flex-row-reverse items-center">
        <Link :class="component" to="#" @mouseover.native="hover = true" @mouseleave.native="hover = !hover">
          <h1 class="lg:text-display-3 xl:text-display-2 2xl:text-display-1 title relative z-10 title-shadow text-right" :class="{ 'opacity-30': hover }" >{{ title }}</h1>
        </Link>
        <hr id="line" class="relative border-none h-0.5 rounded-lg bg-white text-white w-4 ml-2 2xl:ml-4 mr-6 xl:mr-8 2xl:mr-12 opacity-0" />
        <p class="text-lg xl:text-xl 2xl:text-2xl font-sans lg:max-w-96 xl:w-max-128 font-normal opacity-0">
          {{ subtitles[index] }}
        </p>
        <component :is="component" />
      </div>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    subtitles: {
      type: Array,
      default: [
        'Build your next Vue.js application with confidence using NuxtJS.',
        'Your website builder faster than light and made with Markdown.',
        'Vue plugins and technology stack powering any website revealed.'
      ]
    }
  },
  setup() {
    const hover = ref(false)
    const titles = ref([
      { title: 'NuxtJS', component: 'NuxtAnimations' },
      { title: 'Docus', component: 'DocusAnimations' },
      { title: 'Vue Telescope', component: 'VueTelescopeAnimations' }
    ])

    return {
      titles,
      hover
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
    animation: colorTextOut 1s forwards;
    opacity: 1;
  }
  ~ p {
    animation: subTitleOut 1s forwards
  }
  ~ hr {
    animation: lineOut 1s forwards
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
