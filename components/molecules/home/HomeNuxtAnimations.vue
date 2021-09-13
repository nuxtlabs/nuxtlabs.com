<template>
  <div>
    <div
      id="nuxtLogo"
      class="
        absolute
        -left-28
        top-0
        opacity-0
        flex
        items-center
        transform
        h-full
      "
    >
      <img
        :src="`img/nuxt/nuxt-logo.svg`"
        alt="Nuxt logo"
        class="h-3/5 lg:h-1/2 xl:h-3/5"
      />
    </div>
    <img
      id="nuxtGradient"
      :src="`img/nuxt/gradient.svg`"
      alt="Nuxt gradient background"
      class="
        absolute
        w-full
        h-full
        -bottom-full
        left-0
        right-0
        object-cover
        opacity-80
      "
    />
    <img
      v-for="i in 5"
      :id="`gem${i}`"
      :key="i"
      :src="`img/nuxt/gem${i}.svg`"
      :alt="`Nuxt floating gem ${i}`"
      class="absolute transform -bottom-full"
    />
  </div>
</template>
<style lang="postcss" scoped>
.HomeNuxtAnimations {
  &:hover {
    ~ div {
      #nuxtLogo {
        animation: fadeInLogoMobileIn 1s forwards;
        @screen lg {
          animation: fadeInLogoDesktopIn 1s forwards;
        }
      }
      #nuxtGradient {
        @apply bottom-0;
      }
      #gem1 {
        animation: gem1AnimIn 600ms forwards cubic-bezier(0.83, 0, 0.17, 1),
          gemFloatY 5s infinite alternate linear;
      }
      #gem2 {
        @screen sm {
          animation: gem2AnimIn 600ms forwards cubic-bezier(0.83, 0, 0.17, 1),
            gemFloatYX 6s infinite alternate linear;
        }
      }
      #gem3 {
        animation: gem3AnimIn 600ms forwards cubic-bezier(0.83, 0, 0.17, 1),
          gemFloatXY 5s infinite alternate linear;
      }
      #gem4 {
        animation: gem4AnimIn 600ms forwards cubic-bezier(0.83, 0, 0.17, 1),
          gemFloatY 4s infinite alternate linear;
      }
      #gem5 {
        @screen sm {
          animation: gem5AnimIn 600ms forwards cubic-bezier(0.83, 0, 0.17, 1),
            gemFloatX 5s infinite alternate linear;
        }
      }
    }
  }
  ~ div {
    #nuxtGradient,
    #gem1,
    #gem2,
    #gem3,
    #gem4,
    #gem5 {
      transition: all 600ms cubic-bezier(0.65, 0, 0.35, 1);
      z-index: 1;
    }
    #nuxtLogo {
      animation: fadeInLogoMobileOut 0.5s forwards;
      @screen lg {
        animation: fadeInLogoDesktopOut 0.5s forwards;
      }
    }
    #gem1 {
      @apply left-1/12 lg:left-1/4;

      animation: gem1AnimOut 0.5s forwards cubic-bezier(0.83, 0, 0.17, 1);
    }
    #gem2 {
      @apply left-5/12;

      animation: gem2AnimOut 0.5s forwards cubic-bezier(0.83, 0, 0.17, 1);
    }
    #gem3 {
      @apply left-8/12;

      animation: gem3AnimOut 0.5s forwards cubic-bezier(0.83, 0, 0.17, 1);
    }
    #gem4 {
      @apply right-1/4;

      animation: gem4AnimOut 0.5s forwards cubic-bezier(0.83, 0, 0.17, 1);
    }
    #gem5 {
      @apply right-1/12;

      animation: gem5AnimOut 0.5s forwards cubic-bezier(0.83, 0, 0.17, 1);
    }
  }
}
@keyframes fadeInLogoDesktopIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeInLogoDesktopOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes fadeInLogoMobileOut {
  from {
    opacity: 20%;
  }
  to {
    opacity: 0;
  }
}
@keyframes fadeInLogoMobileIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 20%;
  }
}
@keyframes gem1AnimIn {
  0% {
    @apply -bottom-full;
  }
  100% {
    @apply bottom-1/4;
  }
}
@keyframes gem1AnimOut {
  0% {
    @apply bottom-1/4;
  }
  100% {
    @apply -bottom-full;
  }
}

@keyframes gem2AnimIn {
  0% {
    @apply -bottom-full;
  }
  100% {
    @apply bottom-1/3 z-20;
  }
}
@keyframes gem2AnimOut {
  0% {
    @apply bottom-1/3 z-20;
  }
  100% {
    @apply -bottom-full;
  }
}

@keyframes gem3AnimIn {
  0% {
    @apply -bottom-full;
  }
  100% {
    @apply bottom-1/12;
  }
}
@keyframes gem3AnimOut {
  0% {
    @apply bottom-1/12;
  }
  100% {
    @apply -bottom-full;
  }
}

@keyframes gem4AnimIn {
  0% {
    @apply -bottom-full;
  }
  100% {
    @apply bottom-1/3 z-20;
  }
}
@keyframes gem4AnimOut {
  0% {
    @apply bottom-1/3 z-20;
  }
  100% {
    @apply -bottom-full;
  }
}

@keyframes gem5AnimIn {
  0% {
    @apply -bottom-full;
  }
  100% {
    @apply bottom-10;
  }
}
@keyframes gem5AnimOut {
  0% {
    @apply bottom-10;
  }
  100% {
    @apply -bottom-full;
  }
}
@keyframes gemFloatY {
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
@keyframes gemFloatX {
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
@keyframes gemFloatYX {
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
@keyframes gemFloatXY {
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
