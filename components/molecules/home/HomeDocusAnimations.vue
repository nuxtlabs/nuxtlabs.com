<template>
  <div>
    <Ghost id="ghost" class="absolute bottom-30 -left-full lg:right-32 lg:left-auto lg:-bottom-full transform h-40 w-40 z-20 lg:w-72 lg:h-72" />
    <div class="absolute right-0 top-0 lg:top-0 lg:bottom-12 lg:-left-10 flex items-center opacity-0 transform" id="shape">
      <img :src="`img/docus/shape.svg`" alt="Docus shape" class="h-2/3" />
    </div>
  </div>
</template>
<style lang="postcss" scoped>
.HomeDocusAnimations {
  &:hover {
    ~ div {
      #shape {
        animation: fadeInShapeMobileIn 1s forwards;
        @screen lg { animation: fadeInShapeDesktopIn 1s forwards; }
      }
      #ghost {
        animation: ghostAnimMobileIn 1s forwards cubic-bezier(0.83, 0, 0.17, 1), ghostFloatX 15s infinite alternate linear;
        @screen lg { animation: ghostAnimDesktopIn 1s forwards cubic-bezier(0.83, 0, 0.17, 1), ghostFloatX 15s infinite alternate linear; }
      }
    }
  }
  ~ div {
    #shape {
      animation: fadeInShapeMobileOut 0.5s forwards;
      @screen lg { animation: fadeInShapeDesktopOut 0.5s forwards; }
    }
    #ghost {
      animation: ghostAnimMobileOut 1s forwards cubic-bezier(0.83, 0, 0.17, 1);
      @screen lg { animation: ghostAnimDesktopOut 1s forwards cubic-bezier(0.83, 0, 0.17, 1); }
    }
  }
}
//docus shape desktop
@keyframes fadeInShapeDesktopIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes fadeInShapeDesktopOut {
  from { opacity: 1; }
  to { opacity: 0; }
}
//docus shape mobile
@keyframes fadeInShapeMobileIn {
  from { opacity: 0; }
  to { opacity: 20%; }
}
@keyframes fadeInShapeMobileOut {
  from { opacity: 20%; }
  to { opacity: 0; }
}

//ghost animation mobile
@keyframes ghostAnimMobileIn {
  0% { @apply -left-full; }
  100% { @apply -left-10 z-20; }
}
@keyframes ghostAnimDesktopIn {
  0% { @apply -bottom-full; }
  100% { @apply -bottom-20 z-20; }
}
//ghost animation dekstop
@keyframes ghostAnimMobileOut {
  0% { @apply left-10 z-20; }
  100% { @apply -left-full; }
}
@keyframes ghostAnimDesktopOut {
  0% { @apply -bottom-20 z-20; }
  100% { @apply -bottom-full; }
}
//ghost movement
@keyframes ghostFloatX {
  0% { transform: translateX(0); }
  50% { transform: translateX(10%); }
  100% { transform: translateX(-10%); }
}
</style>
