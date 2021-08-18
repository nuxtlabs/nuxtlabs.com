<template>
  <div class="flex items-center space-x-2">
    <time v-if="date" :datetime="date" class="font-bold text-sm text-gray-300">
      {{ formatDateByLocale($i18n.locale, date) }}
    </time>
    <div>•</div>

    <div v-if="category">
      <span class="text-gray-300 font-bold text-sm">
        {{ category }}
      </span>
    </div>

    <div v-else-if="tags.length" class="mb-0.5 truncate">
      <span
        v-for="(tag, i) in tags"
        :key="tag"
        class="text-gray-300 font-bold text-sm"
      >
        <span>{{ tag }}</span>
        <span v-if="(i === 0 && tags.length > 1) || i !== tags.length - 1">
          –
        </span>
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    date: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: () => []
    },
    category: {
      type: String,
      default: ''
    }
  },
  setup() {
    const formatDateByLocale = (locale: string, d: string|number|Date) => {
      const currentLocale = locale || 'en'
      const options = { year: 'numeric' as any, month: 'long' as any, day: 'numeric' as any }
      return new Date(d).toLocaleDateString(currentLocale, options)
    }

    return {
      formatDateByLocale
    }
  },
})
</script>
