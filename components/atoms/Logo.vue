<template>
  <img @click="home" :src="`${logoPath}`" alt="NuxtLabs logo" />
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    logoPath: {
      type: String,
      default: false
    }
  },
  setup() {
    function home() {
      window.scrollTo(0, 0)
    }

    return {
      home
    }
  },
})
</script>
