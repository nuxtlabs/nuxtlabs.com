<template>
  <div>
    <div class="relative py-16 sm:py-24 2xl:pb-40">
      <div class="relative max-w-3xl mx-auto">
        <AppLink
          :to="
            page.to.lastIndexOf('/') !== 0
              ? page.to.substr(0, page.to.lastIndexOf('/'))
              : '/'
          "
          class="absolute top-0 left-0 px-4 -mt-12 sm:-mt-16"
        >
          <span
            class="text-sm font-medium leading-none sm:text-base text-primary-900 hover:text-primary-700"
          >
            ← Back
          </span>
        </AppLink>
        <div class="px-4 mb-6">
          <h1
            class="flex-1 text-3xl font-semibold tracking-tight sm:text-4xl text-primary-900 hover:text-primary-700"
          >
            {{ page.title }}
          </h1>
        </div>
      </div>
      <div class="max-w-3xl mx-auto">
        <DocusContent :document="page" class="px-4 docus-content" />
        <p class="text-primary-300 font-semibold text-lg pl-4 pt-4">
          Last update {{ formatDateByLocale('en', page.date) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const formatDateByLocale = (locale, d) => {
      return new Date(d).toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    }
    return {
      formatDateByLocale,
    }
  },
})
</script>
