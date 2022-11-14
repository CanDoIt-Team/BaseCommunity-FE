import axios from 'axios'
import { PROXY } from './proxy'

export const EmploymentsAPI = async (page, size = 20) => {
  const res = await axios.get(`${PROXY}/employments?page=${page}&size=${size}`)

  return res
}
