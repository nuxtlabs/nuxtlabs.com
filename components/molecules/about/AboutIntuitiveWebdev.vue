<template>
  <section class="p-4 md:p-6 lg:p-12 w-full">
    <img
      :src="`img/about/IWDBackground.svg`"
      class="hidden lg:block 2xl:hidden w-full absolute -z-1 inset-x-0"
    />
    <img
      :src="`img/about/IWDBackground_wide.svg`"
      class="hidden 2xl:block w-full absolute -z-1 inset-x-0"
    />
    <div
      class="
        flex flex-col
        md:flex-row
        items-center
        justify-center
        mt-24
        md:mt-40
        mb-12
        md:mb-24
        lg:mb-32
      "
    >
      <ul
        class="
          flex
          md:mr-12
          w-full
          mb-8
          lg:mb-0 lg:w-1/3
          items-center
          justify-center
        "
      >
        <li>
          <img
            :src="`img/about/nuxtJSLogo.svg`"
            alt="Logo of NuxtJS"
            class="h-24 w-24"
          />
        </li>
        <li class="mx-3">
          <img
            :src="`img/about/docusLogo.svg`"
            alt="Logo of Docus"
            class="h-24 w-24"
          />
        </li>
        <li>
          <img
            :src="`img/about/VTLogo.svg`"
            alt="Logo of Vue Telescope"
            class="h-24 w-24"
          />
        </li>
      </ul>
      <div
        class="
          sm:border-l-2
          border-white
          sm:pl-4
          md:pl-6
          lg:pl-12
          py-4
          lg:py-8
          w-full
          lg:w-2/3
        "
      >
        <h2 class="uppercase font-bold opacity-70 mb-2">Mission</h2>
        <h3 class="text-3xl font-bold mb-3">Intuitive Web Development</h3>
        <Markdown />
      </div>
    </div>
    <p class="text-center font-bold text-2xl">
      "Our goal is to provide web developers the simplest way to build
      performant and blazing fast websites."
    </p>
  </section>
</template>
