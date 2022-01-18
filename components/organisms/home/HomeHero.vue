<template>
  <section ref="root" class="relative pb-8 -z-1">
    <HomeHeroAnimations />
    <div
      class="max-w-7xl mx-auto py-20 mb-20 lg:mb-60 flex flex-col space-y-8 items-center justify-center text-center"
    >
      <h1 class="font-semibold text-4xl md:text-5xl lg:text-6xl">
        <Markdown use="title" unwrap="p" />
      </h1>
      <div class="flex space-x-2 items-center justify-center">
        <p class="font-semibold text-xl lg:text-2xl">
          <Markdown use="description" unwrap="p" />
        </p>
        <img src="/img/arrow-down.svg" class="w-8 h-8" />
      </div>
    </div>
    <img
      src="/img/home/hero-landscape.svg"
      alt="landscape"
      class="absolute landscape-bottom-desktop"
    />
  </section>
</template>
