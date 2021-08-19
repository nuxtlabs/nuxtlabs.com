<template>
  <div v-if="prev || next" class="flex mb-8 flex-col justify-between font-medium leading-7 xs:space-x-2 xs:flex-row">
    <div class="flex justify-start items-center w-full xs:w-1/2">
      <NuxtLink
        v-if="prev"
        :to="$contentLocalePath(prev.to)"
        class="
          nav-button
          inline-flex
          items-center
          justify-start
          w-full
          px-4
          py-2.5
          truncate
          xs:w-auto
        "
      >
        <span class="relative flex flex-col items-start truncate">
          <span class="mb-1">
            Previous article
          </span>

          <span class="flex items-center w-full text-xl">
            <IconArrowLeft class="flex-shrink-0 w-4 h-4 mr-2" />
            <span class="truncate">{{ prev.title }}</span>
          </span>
        </span>
      </NuxtLink>
    </div>

    <div class="flex justify-end order-first w-full xs:order-last xs:w-1/2">
      <NuxtLink
        v-if="next"
        :to="$contentLocalePath(next.to)"
        class="
          nav-button
          inline-flex
          items-center
          justify-end
          w-full
          px-4
          py-2.5
          mb-2
          truncate
          xs:mb-0 xs:w-auto
        "
      >
        <span class="relative flex flex-col items-end truncate">
          <span class="mb-1"> Next article </span>

          <span class="flex items-center w-full text-xl">
            <span class="truncate">{{ next.title }}</span>
            <IconArrowRight class="flex-shrink-0 w-4 h-4 ml-2" />
          </span>
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { upperFirst } from 'scule'

export default defineComponent({
  props: {
    prev: {
      type: Object,
      default: null
    },
    next: {
      type: Object,
      default: null
    }
  },
  methods: {
    directory(link) {
      const dirs = link.split('/')
      const directory = dirs.length > 1 ? dirs[dirs.length - 2] : ''
      return directory.split('-').map(upperFirst).join(' ')
    }
  }
})
</script>
<style lang="postcss" scoped>
.nav-button {
    background:black;
    padding:10px 15px;
    display:inline-block;
    box-sizing:border-box;
    position:relative;
    overflow:hidden;
    color:white;
    transition:all 200ms ease-in;
    border-radius:5px;
    text-decoration:none;
}
.nav-button:before, a:after {
    display:block;
    width:100%;
    content:'';
    box-sizing:border-box;
    position:absolute;
    height:0px;
    border-radius:5px;
}
.nav-button:before {
    border-top:1px solid white;
    border-right:1px solid white;
    left:-100%;
    top:0;
    height:0px;
}
.nav-button:after {
    border-bottom:1px solid white;
    border-left:1px solid white;
    left:100%;
    bottom:0;
    height:0px;
}
@-webkit-keyframes left-up {
    0% {
        left:100%;
        height:0;
    }
    50% {
        left:0;
        height:0;
    }
    100% {
        height:100%;
        left:0;
    }
}
@-webkit-keyframes right-dn {
    0% {
        left:-100%;
        height:0;
    }
    50% {
        left:0;
        height:0;
    }
    100% {
        height:100%;
        left:0;
    }
}
.nav-button:hover:after, .nav-button:hover:before {
    -webkit-animation-duration:600ms;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-fill-mode: forwards
}
.nav-button:hover:after {
    -webkit-animation-name:left-up;
}
.nav-button:hover:before {
    -webkit-animation-name:right-dn;
}
</style>
