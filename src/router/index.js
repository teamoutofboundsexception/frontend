import Vue from 'vue'
import Router from 'vue-router'
import i18n from '@/i18n'
import Homepage from '@/components/Homepage'

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
          path: '/',
          name: 'Homepage',
          component: Homepage
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  let language = to.params.language

  if (!language) {
    language = window.navigator.language
  }

  language = language.trim().toLowerCase()

  if (!i18n.availableLocales.includes(language)) {
    i18n.locale = i18n.fallbackLocale

    return next(i18n.locale)
  } else if (i18n.locale !== language) {
    i18n.locale = language

    return next(i18n.locale)
  }

  return next()
})

export default router
