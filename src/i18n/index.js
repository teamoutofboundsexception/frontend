import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'pl',
  fallbackLocale: 'pl',
  messages: {
    en: {
      homepage: {
        featured: {
          header: 'Featured Cities',
          loading: 'Loading'
        },
        search: {
          header: 'Visit cities like never before!',
          label: 'Search city',
          placeholder: 'City'
        }
      },
      navbar: {
        featured: 'Featured Cities',
        language: 'Language'
      },
      search: {
        search: {
          label: 'Search city',
          placeholder: 'City'
        }
      }
    },
    pl: {
      homepage: {
        featured: {
          header: 'Proponowane Miasta',
          loading: 'Ładowanie'
        },
        search: {
          header: 'Zwiedzaj miasta jak nigdy wcześniej!',
          label: 'Wyszukaj miasto',
          placeholder: 'Miasto'
        }
      },
      navbar: {
        featured: 'Proponowane Miasta',
        language: 'Język'
      },
      search: {
        search: {
          label: 'Wyszukaj miasto',
          placeholder: 'Miasto'
        }
      }
    }
  }
})
