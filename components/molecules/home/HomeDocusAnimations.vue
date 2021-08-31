<template>
  <div>
    <Ghost class="absolute bottom-30 -left-full lg:right-32 lg:left-auto lg:-bottom-full transform h-40 w-40 z-20 lg:w-72 lg:h-72" />
    <img id="shape" :src="`img/docus/shape.svg`" class="absolute w-60 lg:w-80 right-0 top-0 lg:bottom-38 lg:h-4/5 lg:-left-10 opacity-0 transform" />
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
        animation: ghostAnimMobileIn 1s forwards cubic-bezier(0.83, 0, 0.17, 1), ghostFloatX 15s infinite alternate linear;
      }
      @screen lg {
        .ghost {
          animation: ghostAnimDesktopIn 1s forwards cubic-bezier(0.83, 0, 0.17, 1), ghostFloatX 15s infinite alternate linear;
        }
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
      animation: ghostAnimMobileOut 1s forwards cubic-bezier(0.83, 0, 0.17, 1);
    }
    @screen lg {
      .ghost {
        animation: ghostAnimDesktopOut 1s forwards cubic-bezier(0.83, 0, 0.17, 1);
      }
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

@-webkit-keyframes ghostAnimMobileIn {
  0% {
    @apply -left-full;
  }
  100% {
    @apply -left-10 z-20;
  }
}
@-webkit-keyframes ghostAnimDesktopIn {
  0% {
    @apply -bottom-full;
  }
  100% {
    @apply -bottom-20 z-20;
  }
}
@-webkit-keyframes ghostAnimMobileOut {
  0% {
    @apply left-10 z-20;
  }
  100% {
    @apply -left-full;
  }
}
@-webkit-keyframes ghostAnimDesktopOut {
  0% {
    @apply -bottom-20 z-20;
  }
  100% {
    @apply -bottom-full;
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
