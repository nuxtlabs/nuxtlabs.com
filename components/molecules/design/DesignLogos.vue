<template>
  <div v-if="result">
    <div
      v-for="(content, i) in result"
      :key="i"
      class="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-12 gap-y-4"
    >
      <div v-for="(logo, index) in content.logos" :key="index" class="mt-4">
        <div v-if="logo">
          <div
            class="border px-12 py-10 flex justify-center rounded-md min-h-40"
            :class="
              logo.color === 'dark' ? 'bg-primary-900 border-white' : 'bg-white'
            "
          >
            <img loading="lazy" :src="`${logo.logoImg}.svg`" />
          </div>
          <div class="flex w-full justify-between pt-2 pb-4">
            <div class="font-semibold text-lg">{{ logo.type }}</div>
            <div class="flex space-x-2 text-base">
              <a
                class="hover:text-gray-500 text-gray-400 hover:underline"
                :href="`${logo.logoImg}.svg`"
                aria-label="Download svg"
                download
                >SVG</a
              >
              <a
                class="hover:text-gray-500 text-gray-400 hover:underline"
                :href="`${logo.logoImg}.png`"
                aria-label="Download png"
                download
                >PNG</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  useContext,
  ref,
  useFetch,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $docus } = useContext()
    const result = ref()

    useFetch(async () => {
      result.value = await $docus
        .search('/collections/design/logos', { deep: true })
        .fetch()
    })

    return {
      result,
    }
  },
})
</script>
