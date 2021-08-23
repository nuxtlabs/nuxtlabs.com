<template>
  <div>
    <img id="ghost" :src="`img/docus/ghost.svg`" class="absolute -bottom-full right-24 transform" />
    <img id="shape" :src="`img/docus/shape.svg`" class="absolute bottom-38 left-0 opacity-0 transform" />
  </div>
</template>
<style lang="postcss" scoped>
.DocusAnimations {
  &:hover {
    ~ div {
      > #shape {
        animation: fadeInShape 3s forwards;
      }
      > #ghost {
        animation: ghostAnim 1s forwards cubic-bezier(0.83, 0, 0.17, 1);
      }
    }
  }
}

@keyframes fadeInShape {
  from { opacity: 0; }
  to { opacity: 1; }
}
@-webkit-keyframes ghostAnim {
  0% {
    @apply -bottom-full;
  }
  100% {
    @apply -bottom-20 z-20;
  }
}

</style>
