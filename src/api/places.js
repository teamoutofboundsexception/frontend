import axios from 'axios'

export default {
  getRelated (params = {}) {
    return axios.get(process.env.API_ENDPOINT + '/places/related', {
      data: params
    }).then(response => {
      const { data } = response

      return data
    })
  },

  getTrip (params = {}) {
    return axios.get(process.env.API_ENDPOINT + '/trip/advise', {
      data: params
    }).then(response => {
      const { data } = response

      return data
    })
  }
}
