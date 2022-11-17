import axios from 'axios'
import { PROXY } from './proxy'

const getUser = async (token) => {
  const res = await axios.get(`${PROXY}/users/info`, {
    headers: {
      'auth-token': token,
    },
  })

  return res
}

const uploadImg = async (token, data) => {
  const res = await axios.post(`${PROXY}/users/profile-img`, data, {
    headers: {
      'auth-token': token,
      'Content-Type': `multipart/form-data`,
    },
  })

  return res
}

const userUpdate = async (token, data, skill) => {
  const res = await axios.post(`${PROXY}/users/info?skill=${skill}`, data, {
    headers: {
      'auth-token': token,
    },
  })

  return res
}

const changePassword = async (token, data) => {
  const res = await axios.put(`${PROXY}/users/password/change`, data, {
    headers: {
      'auth-token': token,
    },
  })

  return res
}

const withdraw = async (token) => {
  console.log(token)
  const res = await axios.delete(`${PROXY}/users/withdraw`, {
    headers: {
      'auth-token': token,
    },
  })

  return res
}

export { getUser, uploadImg, userUpdate, changePassword, withdraw }
