import axios from 'axios'

export const EmploymentsAPI = async (page) => {
  const res = await axios.get(`/employments?page=${page}&size=20`)

  return res
}
