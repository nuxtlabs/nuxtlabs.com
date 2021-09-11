<template>
  <div class="py-8 sm:py-16 max-w-2xl mx-auto px-4">
    <DocusContent :document="page" />
  </div>
</template>

<script>
  import { defineComponent } from '@nuxtjs/composition-api';

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
  });
</script>
