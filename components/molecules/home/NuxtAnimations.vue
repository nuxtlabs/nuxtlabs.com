<template>
  <div>
    <img id="nuxtLogo" :src="`img/nuxt/nuxt-logo.svg`" class="absolute top-0 lg:top-1/5 -left-28 opacity-0" />
    <img id="nuxtGradient" :src="`img/nuxt/gradient.svg`" class="absolute w-full left-0 right-0 -bottom-full" />
    <img id="gem1" :src="`img/nuxt/gem1.svg`" class="absolute -bottom-full left-1/12 lg:left-1/4" />
    <img id="gem2" :src="`img/nuxt/gem2.svg`" class="absolute -bottom-full left-5/12" />
    <img id="gem3" :src="`img/nuxt/gem4.svg`" class="absolute -bottom-full left-8/12" />
    <img id="gem4" :src="`img/nuxt/gem3.svg`" class="absolute -bottom-full right-1/4" />
    <img id="gem5" :src="`img/nuxt/gem5.svg`" class="absolute -bottom-full right-1/12" />
  </div>
</template>
<style lang="postcss" scoped>
.NuxtAnimations {
  ~ div {
    > #nuxtGradient, #gem1, #gem2, #gem3, #gem4, #gem5 {
      @apply transform;
      transition: all 1s cubic-bezier(0.65, 0, 0.35, 1);
      z-index: 1;
    }
  }
  &:hover {
    ~ div {
      > #nuxtLogo {
          animation: fadeInLogoMobileIn 1s forwards;
      }
      @screen lg {
        > #nuxtLogo {
          animation: fadeInLogoDesktopIn 1s forwards;
        }
      }
      > #nuxtGradient {
        @apply bottom-0
      }
      > #gem1 {
        animation: gem1AnimIn 1s forwards cubic-bezier(0.83, 0, 0.17, 1), gemFloatY 5s infinite alternate linear;
      }
      @screen sm {
        > #gem2 {
          animation: gem2AnimIn 1s forwards cubic-bezier(0.83, 0, 0.17, 1), gemFloatYX 6s infinite alternate linear;
        }
      }
      > #gem3 {
        animation: gem3AnimIn 1s forwards cubic-bezier(0.83, 0, 0.17, 1), gemFloatXY 5s infinite alternate linear;
      }
      > #gem4 {
        animation: gem4AnimIn 1s forwards cubic-bezier(0.83, 0, 0.17, 1), gemFloatY 4s infinite alternate linear;
      }
      @screen sm {
        > #gem5 {
          animation: gem5AnimIn 1s forwards cubic-bezier(0.83, 0, 0.17, 1), gemFloatX 5s infinite alternate linear;
        }
      }
    }
  }
  ~ div {
    > #nuxtLogo {
      animation: fadeInLogoMobileOut 0.5s forwards;
    }
    @screen lg {
      > #nuxtLogo {
        animation: fadeInLogoDesktopOut 0.5s forwards;
      }
    }
    > #gem1 {
      animation: gem1AnimOut 0.5s forwards cubic-bezier(0.83, 0, 0.17, 1);
    }
    > #gem2 {
      animation: gem2AnimOut 0.5s forwards cubic-bezier(0.83, 0, 0.17, 1);
    }
    > #gem3 {
      animation: gem3AnimOut 0.5s forwards cubic-bezier(0.83, 0, 0.17, 1);
    }
    > #gem4 {
      animation: gem4AnimOut 0.5s forwards cubic-bezier(0.83, 0, 0.17, 1);
    }
    > #gem5 {
      animation: gem5AnimOut 0.5s forwards cubic-bezier(0.83, 0, 0.17, 1);
    }
  }
}

@keyframes fadeInLogoDesktopIn {
  from { opacity: 0 }
  to { opacity: 1 }
}
@keyframes fadeInLogoMobileIn {
  from { opacity: 0 }
  to { opacity: 20% }
}

@keyframes fadeInLogoDesktopOut {
  from { opacity: 1; }
  to { opacity: 0; }
}
@keyframes fadeInLogoMobileOut {
  from { opacity: 20%; }
  to { opacity: 0; }
}

@-webkit-keyframes gem1AnimIn {
  0% { @apply -bottom-full; }
  100% { @apply bottom-1/4; }
}
@-webkit-keyframes gem1AnimOut {
  0% { @apply bottom-1/4; }
  100% { @apply -bottom-full; }
}

@-webkit-keyframes gem2AnimIn {
  0% { @apply -bottom-full; }
  100% { @apply bottom-1/3 z-20; }
}
@-webkit-keyframes gem2AnimOut {
  0% { @apply bottom-1/3 z-20; }
  100% { @apply -bottom-full; }
}

@-webkit-keyframes gem3AnimIn {
  0% { @apply -bottom-full; }
  100% { @apply bottom-1/12; }
}
@-webkit-keyframes gem3AnimOut {
  0% { @apply bottom-1/12; }
  100% { @apply -bottom-full; }
}

@-webkit-keyframes gem4AnimIn {
  0% { @apply -bottom-full; }
  100% { @apply bottom-1/3 z-20; }
}
@-webkit-keyframes gem4AnimOut {
  0% { @apply bottom-1/3 z-20; }
  100% { @apply -bottom-full; }
}

@-webkit-keyframes gem5AnimIn {
  0% { @apply -bottom-full; }
  100% { @apply bottom-10; }
}
@-webkit-keyframes gem5AnimOut {
  0% { @apply bottom-10; }
  100% { @apply -bottom-full; }
}

@-webkit-keyframes gemFloatY {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10%);
  }
  100% {
    transform: translateY(-10%);
  }
}
@-webkit-keyframes gemFloatX {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(-10%);
  }
}
@-webkit-keyframes gemFloatYX {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateX(10%);
  }
  100% {
    transform: translateY(-10%);
  }
}
@-webkit-keyframes gemFloatXY {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateY(10%);
  }
  100% {
    transform: translateX(-10%);
  }
}

</style>
