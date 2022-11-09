import axios from 'axios'

export const EmploymentsAPI = async (page, size = 20) => {
  const res = await axios.get(`/employments?page=${page}&size=${size}`)

  return res
}
