<template>
  <div class="relative flex flex-col pt-12">
    <div class="hidden sm:block absolute left-1/2 w-0.5 h-full bg-white" />
    <MarketingEducationProgram
      v-for="(program, index) in programList"
      :key="program.title"
      :right-position="program.right"
      class="pt-8"
      :class="index % 2 === 0 ? 'align-start' : 'align-start sm:align-end'"
    >
      <template #day>{{ program.day }}</template>
      <template #title>{{ program.title }}</template>
      <template #programs>
        <li
          v-for="(item, i) in program.programs"
          :key="i"
          class="text-base pb-2"
          :class="!program.right ? 'pr-8 sm:pl-8 sm:pr-0' : 'pr-8'"
        >
          {{ item }}
        </li>
      </template>
    </MarketingEducationProgram>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    programList: {
      type: Array,
      default: () => [],
    },
  },
})
</script>
