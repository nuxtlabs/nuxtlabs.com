<template>
  <div
    class="flex flex-col md:flex-row items-center justify-between px-8 pt-12"
  >
    <Markdown use="image" unwrap="p" />
    <div class="md:border-l py-12 lg:w-4/5 text-center md:text-left">
      <p class="md:pl-8 text-lg text-primary-900">
        <Markdown use="description" unwrap="p" />
      </p>
    </div>
  </div>
</template>
