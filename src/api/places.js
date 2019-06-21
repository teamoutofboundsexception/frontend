import axios from 'axios'

export default {
  getRelated (params = {}) {
    return axios.get(process.env.API_ENDPOINT + '/places/related', {
      data: params,
      transformRequest: [function (data, headers) {
        data = data.data

        return data
      }]
    }).then(response => {
      const { data } = response

      return data
    })
  },

  getTrip (params = {}) {
    return axios.post(process.env.API_ENDPOINT + '/trip/advise', params).then(response => {
      const { data } = response

      return data
    })
  }
}
