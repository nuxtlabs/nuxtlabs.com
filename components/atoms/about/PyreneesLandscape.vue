<template>
  <div class="mb-8">
    <span
      class="
        absolute
        transform
        -translate-y-2/5
        right-8
        -z-1
        uppercase
        opacity-50
        font-bold
      "
      >Pyrénées</span
    >
    <img
      :src="`img/about/pyrenees_line.svg`"
      alt="Pyrénées horizon line"
      class="w-full absolute -z-1 inset-x-0 mb-32"
    />
  </div>
</template>
<style lang="postcss" scoped>
span {
  font-family: 'Inter', sans-serif;
  font-size: 40px;
  @media (min-width: 450px) {
    font-size: 60px;
  }
  @media (min-width: 600px) {
    font-size: 80px;
  }
  @media (min-width: 969px) {
    font-size: 105px;
  }
  @media (min-width: 1250px) {
    font-size: 130px;
  }
}
</style>
