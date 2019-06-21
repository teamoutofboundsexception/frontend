'use strict'

if (!process.env.API_ENDPOINT) {
  process.env.API_ENDPOINT = 'http://localhost:8080'
}

module.exports = {
  API_ENDPOINT: '"' + process.env.API_ENDPOINT + '"',
  NODE_ENV: '"production"'
}
