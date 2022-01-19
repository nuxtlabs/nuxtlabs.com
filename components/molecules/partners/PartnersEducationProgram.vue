<template>
  <div
    class="relative mb-4 sm:mb-0 border sm:border-0 rounded-md"
    :class="[
      !rightPosition
        ? 'text-left sm:text-right sm:mr-1/2 sm:pr-12'
        : 'text-left sm:ml-1/2 sm:pl-12 border-r sm:border-r-0',
    ]"
  >
    <div
      class="hidden sm:block absolute h-4 w-4 bg-white rounded-full top-1/2"
      :class="!rightPosition ? '-right-2.3' : '-left-1.6'"
    />
    <div
      class="flex flex-col space-y-4"
      :class="!rightPosition ? 'pl-4 sm:pl-12' : 'pl-4 sm:pr-12'"
    >
      <div class="text-gray-50 text-md font-light">
        <Markdown use="day" unwrap="p" />
      </div>
      <div class="font-semibold text-lg">
        <Markdown use="title" unwrap="p" />
      </div>
      <ul
        class="flex flex-wrap text-gray-50 text-sm font-light pb-8 sm:pb-0"
        :class="
          !rightPosition
            ? 'justify-start sm:justify-end pr-8 sm:pr-0 md:pl-12 lg:pl-40'
            : 'justify-start md:pr-12 lg:pr-40'
        "
      >
        <Markdown use="programs" unwrap="p" />
      </ul>
    </div>
  </div>
</template>
<script setup>
defineProps({
  rightPosition: {
    type: Boolean,
    default: false,
  },
  paddingContainerClass: {
    type: String,
    default: 'pt-16 pb-8',
  },
  lastItem: {
    type: Boolean,
    default: false,
  },
  firstItem: {
    type: Boolean,
    default: false,
  },
})
</script>
