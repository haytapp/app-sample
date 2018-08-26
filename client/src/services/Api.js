import axios from 'axios'

const targethost = 'http://localhost:8081'

// Return a connector
export default () => {
  return axios.create({
    baseURL: targethost
  })
}
