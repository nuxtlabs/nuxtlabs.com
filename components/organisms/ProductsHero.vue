<template>
  <div ref="root" class="relative">
    <Markdown use="animation" unwrap="p" />
    <div
      class="max-w-7xl mx-auto py-20 flex flex-col space-y-8 items-center justify-center text-center"
    >
      <Markdown use="logo" unwrap="p" />
      <h1 class="font-semibold text-5xl">
        <Markdown use="title" unwrap="p" />
      </h1>

      <p class="font-semibold text-4xl">
        <Markdown use="description" unwrap="p" />
      </p>

      <Markdown use="socialLinks" unwrap="p" />

      <div class="md:pt-18 text-2xl">👇</div>
    </div>
  </div>
</template>
