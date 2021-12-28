<template>
  <div class="relative">
    <div
      class="flex flex-col space-y-8 max-w-7xl mx-auto pt-12 pb-92 sm:pb-80 md:pb-60 lg:pb-76 2xl:pb-92 px-4 sm:px-8"
    >
      <h1 class="font-bold text-display-4">
        <Markdown use="title" unwrap="p" />
      </h1>
      <p class="w-full lg:w-2/3">
        <Markdown use="description" unwrap="p" />
      </p>
      <div>
        <Markdown use="button" unwrap="p" />
      </div>
      <p class="font-semibold pt-16">
        Discover how we can make it work together 👇
      </p>
    </div>
    <Markdown use="landscape" unwrap="p" />
  </div>
</template>
