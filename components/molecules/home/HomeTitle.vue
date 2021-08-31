<template>
  <li>
    <div class="flex flex-col space-y-4 lg:space-y-0 lg:flex-row-reverse items-center h-full">
      <div :class="componentAnim">
        <Link :to="to"
          @mouseleave.native="mouseLeave(componentAnim)" @mouseover.native="mouseHover()"
            class="text-white text-display-4 sm:text-display-3 xl:text-display-2 2xl:text-display-1 title relative z-10 title-shadow text-center lg:text-right">
          <span>{{ title }}</span>
        </Link>
      </div>
      <hr :id="`${componentAnim}Line`" class="relative border-none h-0.5 rounded-lg bg-white text-white w-4 ml-2 2xl:ml-4 mr-6 xl:mr-8 2xl:mr-12 opacity-0" />
      <p :id="`${componentAnim}SubTitle`" class="text-center lg:text-left text-lg xl:text-xl 2xl:text-2xl font-sans lg:max-w-96 xl:w-max-128 font-normal opacity-0">
        {{ subTitle }}
      </p>
      <component :is="componentAnim" :id="componentAnim" />
    </div>
  </li>
</template>
<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    componentAnim: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    let line = null
    let subTitle = null
    let anim = null
    let titles = ['HomeNuxtAnimations', 'HomeDocusAnimations', 'HomeVueTelescopeAnimations']

    //to avoid animation start on load
    onMounted(() => {
      line = document.getElementById(`${props.componentAnim}Line`)
      subTitle = document.getElementById(`${props.componentAnim}SubTitle`)
      anim = document.getElementById(props.componentAnim)
      animationsVisibility('hidden')
    })

    function mouseHover() {
      if (window.innerWidth > 1024) {
        animationsVisibility('visible')
      }
    }

    function mouseLeave() {
      animationsVisibility('hidden')
      //display other title
      titles.forEach(element => {
        const title = document.getElementById(element).parentElement
        title.style.display = 'flex'
      })
    }

    /*function titleClicked(component: string) {
      if (window.innerWidth < 1024) {
        titles.forEach(element => {
          const title = document.getElementById(element).parentElement
          if (element === component) {
            title.style.display = 'flex'
          } else {
            title.style.display = 'none'
          }
        })
      }

      animationsVisibility('visible')
    }*/

    function animationsVisibility(visibility: string) {
      anim.style.visibility = visibility
      subTitle.style.visibility = visibility
      line.style.visibility = visibility
    }

    return {
      mouseHover,
      mouseLeave
      //titleClicked,
    }
  }
})
</script>
<style lang="postcss" scoped>
.HomeNuxtAnimations,
.HomeDocusAnimations,
.HomeVueTelescopeAnimations {
  > a {
    animation: colorTextOut 0.5s forwards;
  }
  ~ p {
    animation: subTitleOut 0.5s forwards
  }
  ~ hr {
    animation: lineOut 0.5s forwards
  }
  &:hover {
    > a {
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
