<template>
  <div class="flex flex-col md:flex-row md:justify-between">
    <div class="w-full md:w-4/5">
      <div class="h-full grid-cols-2 px-16 mr-0 md:grid sm:px-40 md:px-0">
        <div class="flex flex-col">
          <Markdown use="numbersLeft" unwrap="p" />
        </div>
        <div class="flex flex-col">
          <Markdown use="numbersRight" unwrap="p" />
        </div>
      </div>
    </div>
    <div class="w-full py-20 md:w-3/5 md:px-8">
      <div
        class="flex flex-col items-center justify-center h-full space-y-4 text-center md:text-left lg:ml-12 xl:ml-20 2xl:ml-28 md:pl-8"
      >
        <p class="w-full text-3xl font-semibold">
          <Markdown use="title" unwrap="p" />
        </p>
        <p class="w-full px-12 md:px-0">
          <Markdown use="description" unwrap="p" />
        </p>
        <p class="w-full font-semibold">
          <Markdown use="link" unwrap="p" />
        </p>
      </div>
    </div>
  </div>
</template>
