import axios from 'axios'

export default {
  getFeatured () {
    return axios.get(process.env.API_ENDPOINT + '/places/featured', {
      params: {
        offset: 0,
        limit: 4
      }
    })
  }
}
