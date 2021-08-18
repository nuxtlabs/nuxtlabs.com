<template>
  <div class="pt-12 pb-16 flex items-center space-x-8 title">
    <h1 class="text-display-1">Blog</h1>
    <p class="text-display-5 title-shadow">
      {{ description.split(" ")[0] }}<br>{{ description.replace(description.split(" ")[0], '') }}
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    description: {
      type: String,
      default: 'Learn something new'
    }
  }
})
</script>
