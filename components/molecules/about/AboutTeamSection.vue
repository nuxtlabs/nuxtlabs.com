<template>
  <section class="relative sm:p-8 lg:p-12 w-full">
    <h2 class="text-3xl font-bold text-center">The Team</h2>
    <Markdown />
    <img
      :src="`img/about/teamWorld.svg`"
      alt="Position of every team member on a map"
      class="
        hidden
        md:block
        w-full
        absolute
        -z-1
        left-0
        transform
        -translate-x-1/2
        top-3/5
      "
    />
  </section>
</template>
