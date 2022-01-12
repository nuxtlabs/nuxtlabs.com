---
template: Product
title: 'NuxtLabs: Intuitive Web Development'
description: 'We build open source solutions focused on developer experience such as NuxtJS, Docus and Vue Telescope.'
---

::home-hero
#title
[We are]{ .text-primary-500 } Open Source Project<br />[builders &]{ .text-primary-500 } Vue.js [experts]{ .text-primary-500 .leading-normal }
#description
Discover how we can make it work together 👇
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
[NuxtJS]{ .text-4xl }
#contentDescription
[An open source framework making web development]{ .text-primary-300 } [ simple ]{ .font-semibold } [ and]{ .text-primary-300 } [ powerful.]{ .font-semibold } [ Shipped with ]{ .text-primary-300 } [ plenty of features]{ .font-semibold } [ to boost]{ .text-primary-300 } [ developer productivity ]{ .font-semibold } [ and the end user experience.]{ .text-primary-300 }
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
[Docus]{ .text-4xl }
#contentDescription
[White pages in]{ .text-primary-300 } [ markdown ]{ .font-semibold } [ use]{ .text-primary-300 } [ Vue components]{ .font-semibold } [, add ]{ .text-primary-300 } [ style]{ .font-semibold } [ and enjoy the power of Nuxt with a]{ .text-primary-300 } [ blaazing fast, evolved ]{ .font-semibold } [ developer expertience.]{ .text-primary-300 }
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
[Vue telescope]{ .text-4xl }
#contentDescription
[Made for the Vue community by the Vue community,]{.text-primary-500 } [ reveal]{ .font-semibold } [ the Vue plugins and ]{ .text-primary-500 } [ technology stack ]{ .font-semibold } [ powering any website or explore our database of ]{ .text-primary-500 } [ 58k+ websites.]{ .font-semibold }
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
        href: 'https://www.youtube.com/c/NuxtLabs'
        alt: 'NuxtLabs Youtube'
      - icon: 'IconLinkedIn'
        href: 'https://www.linkedin.com/company/nuxtlabs/'
        alt: 'NuxtLabs LinkedIn'
  ---
  :::
::
