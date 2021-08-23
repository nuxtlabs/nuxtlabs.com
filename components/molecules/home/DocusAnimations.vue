<template>
  <div>
    <Ghost class="absolute -bottom-full right-32 transform h-72 w-72" />
    <img id="shape" :src="`img/docus/shape.svg`" class="absolute bottom-38 left-0 opacity-0 transform" />
  </div>
</template>
<style lang="postcss" scoped>
.DocusAnimations {
  &:hover {
    ~ div {
      > #shape {
        animation: fadeInShapeIn 1s forwards;
      }
      .ghost {
        animation: ghostAnimIn 1s forwards cubic-bezier(0.83, 0, 0.17, 1), ghostFloatX 15s infinite alternate linear;
      }
    }
  }
  ~ div {
    > #shape {
      animation: fadeInShapeOut 1s forwards;
    }
    .ghost {
      animation: ghostAnimOut 1s forwards cubic-bezier(0.83, 0, 0.17, 1);
    }
  }
}

@keyframes fadeInShapeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes fadeInShapeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

@-webkit-keyframes ghostAnimIn {
  0% { @apply -bottom-full; }
  100% { @apply -bottom-20 z-20; }
}
@-webkit-keyframes ghostAnimOut {
  0% { @apply -bottom-20 z-20; }
  100% { @apply -bottom-full; }
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
