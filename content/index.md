---
template: Product
title: 'NuxtLabs: Intuitive Web Development'
description: 'We build open source solutions focused on developer experience such as NuxtJS, Docus and Vue Telescope.'
---

::home-hero
#title
[We are]{ .text-primary-500 } Open Source Project<br />[builders &]{ .text-primary-500 } Vue.js [experts]{ .text-primary-500 .leading-normal }
#description
Discover how we can make it work together
::

<!-- Our goals section -->
::section-template
---
darkMode: true
---
#contentTitle
[Our solutions]{ .text-3xl .sm:text-4xl .md:text-5xl }
#contentDescription
Our goal is to make developer experience better, shape the web as it must be
::

<!-- NuxtJS section -->
::section-template
---
darkMode: true
contentPosition: 'left'
containerContentAlign: 'left'
contentClass: 'lg:w-1/2 pb-8'
containerClass: 'py-20'
---
#container
::home-nuxt-animations
::
#contentTitle
[NuxtJS]{ .text-3xl }
#contentDescription
[An open source framework making web development]{ .text-primary-300 .text-xl } [ simple ]{ .font-semibold .text-xl } [ and]{ .text-primary-300 .text-xl } [ powerful.]{ .font-semibold .text-xl } [ Shipped with ]{ .text-primary-300 .text-xl } [ plenty of features]{ .font-semibold .text-xl } [ to boost]{ .text-primary-300 .text-xl } [ developer productivity ]{ .font-semibold .text-xl } [ and the end user experience.]{ .text-primary-300 .text-xl }
#contentFooter
  :::AppButton
  ---
  customClass: 'mt-12'
  to: '/nuxtjs'
  aria-label: 'nuxtjs'
  ---
  Learn more
  :::
::

<!-- Docus section -->
::section-template
---
darkMode: true
contentPosition: 'left'
containerContentAlign: 'right'
containerClass: 'py-20'
---
#container
::home-docus-animations
::
#contentTitle
[Docus]{ .text-3xl }
#contentDescription
[White pages in]{ .text-primary-300 .text-xl } [ markdown ]{ .font-semibold .text-xl } [ use]{ .text-primary-300 .text-xl } [ Vue components]{ .font-semibold .text-xl } [, add ]{ .text-primary-300 .text-xl } [ style]{ .font-semibold .text-xl } [ and enjoy the power of Nuxt with a]{ .text-primary-300 .text-xl } [ blaazing fast, evolved ]{ .font-semibold .text-xl } [ developer expertience.]{ .text-primary-300 .text-xl }
#contentFooter
  :::AppButton
  ---
  to: '/docus'
  aria-label: 'docus'
  ---
  Learn more
  :::
::

<!-- Vue Telescope section -->
::section-template
---
darkMode: true
contentPosition: 'left'
containerContentAlign: 'left'
contentClass: 'lg:w-1/2'
containerClass: 'pt-20 pb-40'
---
#container
::home-vue-telescope-animations
::
#contentTitle
[Vue telescope]{ .text-3xl }
#contentDescription
[Made for the Vue community by the Vue community,]{.text-primary-500 .text-xl } [ reveal]{ .font-semibold .text-xl } [ the Vue plugins and ]{ .text-primary-500 .text-xl } [ technology stack ]{ .font-semibold .text-xl } [ powering any website or explore our database of ]{ .text-primary-500 .text-xl } [ 58k+ websites.]{ .font-semibold .text-xl }
#contentFooter
  :::AppButton
  ---
  to: '/vuetelescope'
  aria-label: 'Vue Telescope'
  ---
  Learn more
  :::
::

<!-- Partners section -->
::section-template
---
contentClass: 'py-60 sm:py-80'
---
#animations
::HomePartnersAnimations
::
#contentTitle
[Trusted by big companies]{ .text-3xl .sm:text-4xl .md:text-5xl }
#contentDescription
[Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi arch.]{ .flex .items-center .justify-center .xl:px-40 }
#contentFooter
  :::AppButton
  ---
  to: '/partners'
  aria-label: 'Partners'
  variant: 'dark-border'
  ---
  See how they use us
  :::
::

<!-- Stats section -->
::section-template
---
darkMode: true
contentPosition: 'left'
containerContentAlign: 'right'
contentClass: 'pb-8 md:py-24'
containerClass: 'py-20 md:py-0'

---
#contentTitle
[Some stats text]{ .text-3xl .sm:text-4xl .md:text-5xl }
#container
  :::StatsNumber{ .text-white .z-10 .w-1/2 }
  ---
    stats:
      - title: '+15M'
        description: 'overall downloads'
      - title: '+10M'
        description: 'Users of our products'
  ---
  :::
::

<!-- Adventure section -->
::section-template
---
contentClass: 'py-40'
---
#contentTitle
[Be part of the Nuxt adventure]{ .text-3xl .sm:text-4xl .md:text-5xl }
#contentDescription
[Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi arch.]{ .flex .items-center .justify-center .lg:px-24 .xl:px-32 }
#contentFooter
  :::PartnersList{ .pb-16 .pt-12 .md:pt-0 }
  ---
    partners:
        - title: 'Technology partner'
          description: 'A technology partner is a service that empowers Nuxt development.'
          animComponent: 'HomeTechnologyAnimations'
        - title: 'Agency partner'
          description: 'A technology partner is a service that empowers Nuxt development.'
          animComponent: 'HomeAgencyAnimations'
        - title: 'Education partner'
          description: 'A technology partner is a service that empowers Nuxt development.'
          animComponent: 'HomeEducationAnimations'
  ---
  :::
  :::AppButton
  ---
  to: '/partners'
  aria-label: 'Partners'
  variant: 'dark-border'
  ---
  Become a partner
  :::
::

::section-template
---
containerClass: 'mb-40 lg:mb-10'
---
#contentTitle
[Join us]{ .text-3xl .sm:text-4xl .md:text-5xl }
#contentDescription
[You can follow us on those social medias to have all of our updates, events, announcements and much more !]{ .text-primary-900 .pb-12 }
#contentFooter
  :::SocialLinkLogos{ .space-x-12 .pt-8 }
  ---
    iconClass: 'text-primary-100 hover:text-primary-700 w-10 h-10'
    socialLinks:
      - icon: 'IconGitHub'
        href: 'https://github.com/nuxtlabs'
        alt: 'NuxtLabs Github'
      - icon: 'IconTwitter'
        href: 'https://twitter.com/nuxtlabs'
        alt: 'NuxtLabs Twitter'
      - icon: 'IconYoutube'
        href: 'https://www.youtube.com/c/NuxtLabs?sub_confirmation=1'
        alt: 'NuxtLabs Youtube'
      - icon: 'IconLinkedIn'
        href: 'https://www.linkedin.com/company/nuxtlabs/'
        alt: 'NuxtLabs LinkedIn'
  ---
  :::
::
