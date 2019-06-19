import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSearch, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faSearch, faStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)
