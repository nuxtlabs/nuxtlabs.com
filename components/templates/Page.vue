<template>
  <div class="d-container-content py-8 sm:py-28 mx-auto overflow-hidden">
    <DocusContent :document="page" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  templateOptions: {
    aside: false,
    fluid: false,
  },
})
</script>
