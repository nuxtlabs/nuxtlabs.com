export default {
    title: 'NuxtLabs',
    description: '',
    url: 'https://nuxtlabs.com',
    template: 'page',
    credits: true,
    socialImage: false,
    theme: {
      header: {
        logo: true,
        title: false
      },
      colors: {
        primary: '#FFFFFF', //white
      },
      shortcuts: {
        'd-logo': 'w-auto h-6 md:h-7 text-white',
        'd-body-bg': 'bg-black',
        'd-body-text-color': 'text-white',
        'd-header': 'sticky w-full top-0 z-50 d-bg-header h-header',
        'd-primary-text-hover': 'text-gray-600 dark:text-cloud-lighter',
        'd-prose-code-inline-bg': 'bg-gray-100 dark:bg-secondary-darkest',
        'd-prose-code-bg': 'bg-gray-100 dark:bg-secondary-darkest',
        'd-bg-header': 'bg-black',
        'd-page-mobile-toc-bg': 'd-body-bg bg-opacity-80 dark:bg-opacity-80',
        'd-aside-header-bg': 'bg-gray-50 dark:bg-secondary-darkest',
        'd-active-aside-navigation-item-bg':
          'bg-primary-50 dark:bg-secondary-darkest',
        'd-active-aside-navigation-item-text':
          'text-primary-500 dark:text-primary-400 ',
        'd-code-group-header-bg': 'bg-gray-200 dark:bg-secondary-darker',
        'd-code-group-tab': 'bg-gray-300 dark:bg-secondary-dark',
        'd-prose-code-filename-bg': 'bg-gray-100 dark:bg-secondary-darker',
        'd-prose-code-filename-text': 'text-gray-600 dark:text-secondary-light',
        'd-tertiary-text': 'text-gray-400 dark:text-cloud-dark',
        'd-prose-ul-li-bullet': 'd-secondary-bg',
        'd-scrollbar':
          'scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-secondary-dark scrollbar-thumb-rounded',
          // Container
        'd-max-w-container': 'max-w-12xl',
        'd-px-container': 'px-4 sm:px-8',
        'd-container': 'd-max-w-container mx-auto',
        'd-container-content': 'd-container d-px-container',
      }
    }
  }
