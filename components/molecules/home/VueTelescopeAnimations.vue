<template>
  <div>
    <BarLeft class="absolute transform left-0 top-0 opacity-0" />
    <BarMid class="absolute transform left-1/4 -top-10 bottom-0 opacity-0 overflow-visible h-full w-full" />
    <BarBottom class="absolute transform opacity-0 bottom-0 right-0 h-full w-full"/>
    <img id="vue-telescope" :src="`img/vuetelescope/vue-telescope.svg`" class="absolute transform -bottom-full left-1/3" />
  </div>
</template>
<style lang="postcss" scoped>
.VueTelescopeAnimations {
  &:hover {
    ~ div {
      > #vue-telescope {
        animation:vueTelescopeAnimIn 600ms forwards cubic-bezier(0.83, 0, 0.17, 1);
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
      animation: vueTelescopeAnimOut 300ms forwards cubic-bezier(0.83, 0, 0.17, 1);
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
@-webkit-keyframes vueTelescopeAnimIn {
  0% {
    @apply -bottom-full;
  }
  100% {
    @apply -bottom-40 ;
  }
}
@-webkit-keyframes vueTelescopeAnimOut {
  0% {
    @apply -bottom-40;
  }
  100% {
    @apply -bottom-full;
  }
}

</style>
