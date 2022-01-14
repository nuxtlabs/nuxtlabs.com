<template>
  <div class="text-primary-900 flex flex-col space-y-4 pt-4 pb-16">
    <span class="text-display-4 font-semibold pt-4">
      <Markdown use="type" unwrap="p" />
    </span>
    <span class="text-display-6 font-semibold"
      ><Markdown use="title" unwrap="p"
    /></span>
    <p class="text-primary-300 text-base font-normal">
      <Markdown use="description" unwrap="p" />
    </p>
  </div>
</template>
