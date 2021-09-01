<template>
  <div>
    <BarLeft class="absolute transform hidden lg:block lg:-left-60 xl:-left-80 -top-10 lg:top-0 bottom-0 opacity-0 stroke-20 sm:stroke-25 md:stroke-25 lg:stroke-32 h-full w-full" />
    <BarMid class="absolute transform left-1/5 lg:left-1/12 xl:left-1/5 -top-75 lg:-top-25 bottom-0 opacity-0 overflow-visible h-full w-full stroke-25 lg:stroke-32" />
    <BarBottom class="absolute transform opacity-0 -bottom-100 left-1/2 lg:right-0 h-full w-full stroke-25 lg:stroke-32"/>
    <img id="vue-telescope" :src="`img/vuetelescope/vue-telescope.svg`" alt="Vue Telescope logo" class="absolute transform h-2/5 lg:h-3/6 w-full -left-full bottom-50 lg:-bottom-full lg:-left-1/6" />
  </div>
</template>
<style lang="postcss" scoped>
.HomeVueTelescopeAnimations {
  &:hover {
    ~ div {
      > #vue-telescope {
        animation: vueTelescopeAnimMobileIn 600ms forwards cubic-bezier(0.83, 0, 0.17, 1);
      }
      @screen lg {
        > #vue-telescope {
          animation: vueTelescopeAnimDesktopIn 600ms forwards cubic-bezier(0.83, 0, 0.17, 1);
        }
      }
      .barLeft, .barMid, .barBottom {
        opacity: 1;
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: dashBarIn 600ms forwards cubic-bezier(0.83, 0, 0.17, 1);
        z-index: 2;
      }
    }
  }
  ~ div {
     > #vue-telescope {
        animation:vueTelescopeAnimMobileOut 300ms forwards cubic-bezier(0.83, 0, 0.17, 1);
      }
      @screen lg {
        > #vue-telescope {
          animation:vueTelescopeAnimDesktopOut 300ms forwards cubic-bezier(0.83, 0, 0.17, 1);
        }
      }
    .barLeft, .barMid, .barBottom {
      opacity: 1;
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      animation: dashBarOut 300ms forwards cubic-bezier(0.83, 0, 0.17, 1);
      z-index: 2;
    }
  }
}

@keyframes dashBarIn {
  from {
    stroke-dashoffset: 900;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes dashBarOut {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 900;
  }
}
@-webkit-keyframes vueTelescopeAnimDesktopIn {
  0% {
    @apply -bottom-full;
  }
  100% {
    @apply -bottom-30 lg:-bottom-40;
  }
}
@-webkit-keyframes vueTelescopeAnimDesktopOut {
  0% {
    @apply -bottom-30 lg:-bottom-40;
  }
  100% {
    @apply -bottom-full;
  }
}
@-webkit-keyframes vueTelescopeAnimMobileIn {
  0% {
    @apply -left-full opacity-0;
  }
  100% {
    @apply -left-50 bottom-17 opacity-30;
  }
}
@-webkit-keyframes vueTelescopeAnimMobileOut {
  0% {
    @apply -left-50 bottom-17 opacity-30;
  }
  100% {
    @apply -left-full opacity-0;
  }
}

</style>
