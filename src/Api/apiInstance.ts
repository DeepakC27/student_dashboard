import axios from 'axios'

const apiInstance = axios.create({
  baseURL: 'http://localhost:4000'
})

// apiInstance.interceptors.request.use((config) => {
//   return config
// })

export default apiInstance