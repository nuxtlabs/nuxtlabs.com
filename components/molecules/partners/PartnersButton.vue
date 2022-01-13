<template>
  <AppButton :href="href" :disabled="!$config.nuxtlabsAppUrl">
    <Markdown use="buttonText" unwrap="p" />
  </AppButton>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    href: {
      type: String,
      default: '',
    },
  },
})
</script>
