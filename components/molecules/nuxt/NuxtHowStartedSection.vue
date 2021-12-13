<template>
  <PageSection flex-direction="column" content-position="center">
    <template #contentImage>
      <img src="/img/products/nuxt-how-started-line.svg" class="w-8 h-8" />
    </template>
    <template #title> How it started </template>
    <template #description>
      Sébastien (@Atinux) made his first commit for Nuxt.js on GitHub on October
      26th 2016. The code base was born after we refactored an e-commerce
      website with modern open source web technologies: Vue 2, Node.js and
      Webpack. At the time, there was no documentation for server-side rendering
      Vue.js applications - we learnt through the Hacker News example published
      by Evan You (Creator of Vue.js).
    </template>
    <template #content>
      [The idea of creating a boilerplate and reusing the code base for other
      projects became clear once we discovered Guillermo Rauch 's introduction
      of Next.js.]{.font-semibold}
    </template>
  </PageSection>
</template>
