<template>
  <h1 class="relative uppercase white font-extrabold pr-16 mt-12">
    <Markdown unwrap="p" />
  </h1>
</template>
<style lang="postcss" scoped>
h1 {
  font-family: 'Inter', sans-serif;
  @media (min-width: 669px) {
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 25%;
      border-top: 6px solid white;
      z-index: -1;
    }
  }
}
</style>
