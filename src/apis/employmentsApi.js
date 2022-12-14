import axios from 'axios'
import { PROXY } from './proxy'

const getEmployments = async (page, size) => {
  const res = await axios.get(`${PROXY}/employments?page=${page}&size=${size}`)

  return res
}

export { getEmployments }
