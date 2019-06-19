import axios from 'axios'

const state = {
  address: null,
  coordinates: {}
}

const getters = {}

const actions = {
  getLocation ({ commit }) {
    if (navigator.geolocation) {
      new Promise(resolve => navigator.geolocation.getCurrentPosition(resolve)).then(position => {
        const zoom = 16 // major streets

        const { coords } = position

        const { latitude, longitude } = coords
        const url = 'https://nominatim.openstreetmap.org/reverse?lat=' + latitude + '&lon=' + longitude +
          '&zoom=' + zoom + '&format=jsonv2'

        return axios.get(url)
      }).then(response => {
        const { data } = response
        const { address } = data
        const { lat, lon } = data

        commit('setAddress', address)

        commit('setCoordinates', {
          latitude: lat,
          longitude: lon
        })
      })
    }
  }
}

const mutations = {
  setAddress (state, address) {
    state.address = address
  },

  setCoordinates (state, coordinates) {
    state.coordinates = coordinates
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
