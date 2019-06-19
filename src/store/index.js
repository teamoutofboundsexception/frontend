import Vue from 'vue'
import Vuex from 'vuex'
import places from './modules/places'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    places
  }
})
