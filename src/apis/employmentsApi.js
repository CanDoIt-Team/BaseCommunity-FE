import axios from 'axios'
import { PROXY } from './proxy'

const getEmployments = async (page, size = 10) => {
  console.log(page)
  const res = await axios.get(`${PROXY}/employments?page=${page}&size=${size}`)

  return res
}

export { getEmployments }
