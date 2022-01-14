<template>
  <div>
    <div
      v-for="content in result"
      :key="content.slug"
      class="grid grid-cols-2 py-4 gap-6 text-primary-900"
    >
      <div v-for="color in content.colors" :key="color.slug">
        <div
          class="w-full h-32 rounded-lg border-2 border-primary-900"
          :class="color.bg_color"
        />
        <div class="font-semibold pt-4">{{ color.name }}</div>
        <div>{{ color.hexa }}</div>
        <div>{{ `RGB: ${color.rgb}` }}</div>
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
        .search('/collections/design/colors', { deep: true })
        .fetch()
    })

    return {
      result,
    }
  },
})
</script>
