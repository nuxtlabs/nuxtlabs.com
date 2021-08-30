<template>
  <li>
    <div class="flex flex-col space-y-4 lg:space-y-0 lg:flex-row-reverse items-center h-full">
      <div :class="componentAnim">
        <Link to="#"
          @click.native="titleClicked(componentAnim)" @mouseleave.native="mouseLeave()" @mouseover.native="mouseHover()"
            class="text-white text-display-4 sm:text-display-3 xl:text-display-2 2xl:text-display-1 title relative z-10 title-shadow text-center lg:text-right">
          <span>{{ title }}</span>
        </Link>
      </div>
      <hr id="line" class="relative border-none h-0.5 rounded-lg bg-white text-white w-4 ml-2 2xl:ml-4 mr-6 xl:mr-8 2xl:mr-12 opacity-0" />
      <p class="text-center lg:text-left text-lg xl:text-xl 2xl:text-2xl font-sans lg:max-w-96 xl:w-max-128 font-normal opacity-0">
        {{ subTitle }}
      </p>
      <Link to="#" class="hidden">
        {{ buttonMobileText }}
      </Link>
      <component :is="componentAnim" :id="componentAnim" />
    </div>
  </li>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api'

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
    buttonMobileText: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const titles = ref(['NuxtAnimations', 'DocusAnimations', 'VueTelescopeAnimations'])

    //to avoid animation start on load
    onMounted(() => {
      titles.value.forEach(title => {
        if (document.getElementsByClassName(title)[0] && document.getElementsByClassName(title)[0].classList.contains(title)) {
          document.getElementById(title).classList.add('hidden')
        }
      })
    })

    function mouseHover() {
      if (window.innerWidth > 1024) {
        loadAnimations()
      }
    }

    function mouseLeave() {
      titles.value.forEach(title => {
          document.getElementById(title).classList.add('hidden')
          document.getElementById(title).parentElement.classList.remove('hidden')
          document.getElementById(title).parentElement.classList.remove('block')
        }
      )
    }

    function titleClicked(component: string) {

      if (window.innerWidth < 1024) {
        //hide other title on click
        titles.value.forEach(title => {
          if (title === component) {
            document.getElementById(title).parentElement.classList.add('block')
          } else {
            document.getElementById(title).parentElement.classList.add('hidden')
          }
        })
      }

      loadAnimations()
    }

    function loadAnimations() {
      document.getElementById(props.componentAnim).classList.remove('hidden')
      document.getElementById(props.componentAnim).classList.add('block')
    }

    return {
      titles,
      mouseHover,
      mouseLeave,
      titleClicked,
    }
  }
})
</script>
<style lang="postcss" scoped>
.NuxtAnimations,
.DocusAnimations,
.VueTelescopeAnimations {
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

.NuxtAnimations,
.DocusAnimations,
.VueTelescopeAnimations {
  > a {
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
