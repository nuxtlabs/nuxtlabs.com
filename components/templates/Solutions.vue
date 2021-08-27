<template>
  <DocusContent :document="page" class="flex flex-col w-full h-auto"/>
</template>

<script>
  import { defineComponent } from '@nuxtjs/composition-api'

  export default defineComponent({
    props: {
      page: {
        type: Object,
        required: true
      }
    },
    templateOptions: {
      aside: false,
      fluid: true
    }
  })
  </script>
