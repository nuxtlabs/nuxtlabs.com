<template>
  <div ref="root" class="relative">
    <Markdown use="animation" unwrap="p" />
    <div
      class="max-w-7xl mx-auto py-20 flex flex-col space-y-8 items-center justify-center text-center"
    >
      <Markdown use="image" unwrap="p" />
      <h1 class="font-semibold text-5xl">
        <Markdown use="title" unwrap="p" />
      </h1>

      <p class="font-semibold text-4xl">
        <Markdown use="description" unwrap="p" />
      </p>

      <Markdown use="socialLinks" unwrap="p" />

      <div class="md:pt-18">
        <img :src="`/img/emoji-hand.svg`" alt="bottom arrow" class="h-6 w-6" />
      </div>
    </div>
  </div>
</template>
