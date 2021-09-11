<template>
  <div class="absolute inset-0 flex h-screen overflow-hidden">
    <DocusContent
      :document="page"
      class="w-full flex flex-col justify-end p-6 xl:p-8 2xl:p-16"
    />
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
      fluid: true,
    },
  });
</script>
