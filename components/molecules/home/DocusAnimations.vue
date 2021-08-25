<template>
  <div>
    <Ghost class="absolute -left-full bottom-30 lg:-bottom-full lg:right-32 transform h-60 w-60 lg:h-72 lg:w-72" />
    <img id="shape" :src="`img/docus/shape.svg`" class="absolute w-60 lg:w-80 right-0 top-0 lg:bottom-38 lg:left-0 opacity-0 transform" />
  </div>
</template>
<style lang="postcss" scoped>
.DocusAnimations {
  &:hover {
    ~ div {
      > #shape {
        animation: fadeInShapeMobileIn 1s forwards;
      }
      @screen lg {
        > #shape {
          animation: fadeInShapeDesktopIn 1s forwards;
        }
      }
      .ghost {
        animation: ghostAnimIn 1s forwards cubic-bezier(0.83, 0, 0.17, 1), ghostFloatX 15s infinite alternate linear;
      }
    }
  }
  ~ div {
    > #shape {
      animation: fadeInShapeMobileOut 0.5s forwards;
    }
    @screen lg {
      > #shape {
        animation: fadeInShapeDesktopOut 0.5s forwards;
      }
    }
    .ghost {
      animation: ghostAnimOut 1s forwards cubic-bezier(0.83, 0, 0.17, 1);
    }
  }
}

@keyframes fadeInShapeDesktopIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes fadeInShapeMobileIn {
  from { opacity: 0; }
  to { opacity: 20%; }
}
@keyframes fadeInShapeDesktopOut {
  from { opacity: 1; }
  to { opacity: 0; }
}
@keyframes fadeInShapeMobileOut {
  from { opacity: 20%; }
  to { opacity: 0; }
}

@-webkit-keyframes ghostAnimIn {
  0% {
    @apply -left-full lg:-bottom-full;
  }
  100% {
    @apply -left-10 lg:-bottom-20 z-20;
  }
}
@-webkit-keyframes ghostAnimOut {
  0% {
    @apply left-10 lg:-bottom-20 z-20;
  }
  100% {
    @apply -left-full lg:-bottom-full;
  }
}
@-webkit-keyframes ghostFloatX {
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

</style>
