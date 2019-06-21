import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBlind, faHome, faSearch, faStar, faWheelchair } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBlind, faHome, faSearch, faStar, faWheelchair)

Vue.component('font-awesome-icon', FontAwesomeIcon)
