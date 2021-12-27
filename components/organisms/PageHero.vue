<template>
  <div class="flex flex-col space-y-4">
    <h1 class="font-semibold text-primary-900 pb-4 text-display-4">
      <Markdown use="title" unwrap="p" />
    </h1>
    <p class="text-primary-400 pb-16 w-full lg:w-4/5">
      <Markdown use="description" unwrap="p" />
    </p>
  </div>
</template>
