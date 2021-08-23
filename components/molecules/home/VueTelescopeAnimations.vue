<template>
  <div>
    <BarLeft class="absolute transform left-0 top-0 opacity-0" />
    <BarMid class="absolute transform left-1/3 top-10 bottom-0 opacity-0 overflow-visible" />
    <BarBottom class="absolute transform opacity-0 bottom-0 right-0"/>
    <img id="vue-telescope" :src="`img/vuetelescope/vue-telescope.svg`" class="absolute transform -bottom-full left-1/3" />
  </div>
</template>
<style lang="postcss" scoped>
.VueTelescopeAnimations {
  &:hover {
    ~ div {
      > #vue-telescope {
        animation: vueTelescopeAnim 1s forwards cubic-bezier(0.83, 0, 0.17, 1);
      }
      .barLeft, .barMid, .barBottom {
        opacity: 1;
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: dashBar 1s linear forwards;
        z-index: 2;
      }
    }
  }
}

@keyframes dashBar {
  from {
    stroke-dashoffset: 900;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@-webkit-keyframes vueTelescopeAnim {
  0% {
    @apply -bottom-full;
  }
  100% {
    @apply -bottom-40 ;
  }
}

</style>
