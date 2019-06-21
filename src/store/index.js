import Vue from 'vue'
import Vuex from 'vuex'
import { cities, location } from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cities,
    location
  }
})
