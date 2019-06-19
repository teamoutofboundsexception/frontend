import Vue from 'vue'
import Vuex from 'vuex'
import { location, places } from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    location,
    places
  }
})
