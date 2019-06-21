import axios from 'axios'

export default {
  getFeatured () {
    return axios.get(process.env.API_ENDPOINT + '/cities/featured', {
      params: {
        offset: 0,
        limit: 4
      }
    }).then(response => {
      const { data } = response

      return data
    })
  }
}
