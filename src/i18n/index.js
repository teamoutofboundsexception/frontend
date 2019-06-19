import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      homepage: {
        featured: {
          header: 'Featured Places',
          loading: 'Loading'
        },
        search: {
          header: 'Visit cities like never before!',
          label: 'Search city',
          placeholder: 'City'
        }
      },
      navbar: {
        featured: 'Featured Places',
        language: 'Language'
      }
    },
    pl: {
      homepage: {
        featured: {
          header: 'Proponowane Miejsca',
          loading: 'Ładowanie'
        },
        search: {
          header: 'Zwiedzaj miasta jak nigdy wcześniej!',
          label: 'Wyszukaj miasto',
          placeholder: 'Miasto'
        }
      },
      navbar: {
        featured: 'Proponowane Miejsca',
        language: 'Język'
      }
    }
  }
})
