import places from '../../api/places'

const state = {
  featured: []
}

const getters = {}

const actions = {
  getFeatured ({ commit }) {
    places.getFeatured().then(featured => commit('setFeatured', featured))
  }
}

const mutations = {
  setFeatured (state, featured) {
    state.featured = featured
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
