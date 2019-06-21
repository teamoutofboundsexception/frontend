import Vue from 'vue'
import Router from 'vue-router'
import i18n from '@/i18n'
import { Homepage, Search } from '@/components/'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/:language',
      component: {
        template: '<router-view></router-view>'
      },
      children: [
        {
          path: '',
          name: 'Homepage',
          component: Homepage
        },
        {
          path: 'search',
          name: 'Search',
          component: Search
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  let language = to.params.language

  if (!language) {
    const language = window.navigator.language

    return next(language)
  }

  language = language.trim().toLowerCase()

  if (!i18n.availableLocales.includes(language)) {
    i18n.locale = i18n.fallbackLocale
  } else if (i18n.locale !== language) {
    i18n.locale = language
  }

  return next()
})

export default router
