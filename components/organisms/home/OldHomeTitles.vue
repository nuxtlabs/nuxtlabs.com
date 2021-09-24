<template>
  <div class="flex h-screen overflow-hidden relative">
    <ul
      id="container"
      class="
        flex-1 flex flex-col
        items-center
        justify-center
        lg:items-end
        mt-16
        md:space-y-8
        lg:space-y-4
      "
    >
      <Markdown unwrap="p" />
    </ul>
  </div>
</template>
