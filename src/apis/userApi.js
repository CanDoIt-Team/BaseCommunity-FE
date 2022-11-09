import axios from 'axios'
import { useRecoilValue } from 'recoil'

const getUser = async (token) => {
  const res = await axios.get(`/users/info`, {
    headers: {
      'auth-token': token,
    },
  })

  return res
}

const uploadImg = async (token, data) => {
  const res = await axios.post(`/users/profile-img`, data, {
    headers: {
      'auth-token': token,
      'Content-Type': `multipart/form-data`,
    },
  })

  return res
}

const userUpdate = async (token, data, skill) => {
  const res = await axios.post(`/users/info?skill=${skill}`, data, {
    headers: {
      'auth-token': token,
    },
  })

  return res
}

const changePassword = async (token, data) => {
  const res = await axios.put('/users/password/change', data, {
    headers: {
      'auth-token': token,
    },
  })

  return res
}

export { getUser, uploadImg, userUpdate, changePassword }
