import axios from 'axios'

const writeAPI = async (data, token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  const res = await axios.post(`/projects`, data)

  return res
}

const showAPI = async () => {
  const res = await axios.get(`/projects`)

  return res
}

const detailAPI = async (id) => {
  const res = await axios.get(`/projects/${id}`)

  return res
}

export { writeAPI, showAPI, detailAPI }
