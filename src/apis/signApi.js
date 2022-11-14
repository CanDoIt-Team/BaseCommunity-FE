import axios from 'axios'
import { PROXY } from './proxy'

const emailCheck = async (email) => {
  const res = await axios.get(`${PROXY}/users/check/email?email=${email}`)

  return res
}

const nicknameCheck = async (nickname) => {
  const res = await axios.get(`${PROXY}/users/check/nickname?nickname=${nickname}`)

  return res
}

const signupSubmit = async ({
  birth,
  email,
  name,
  nickname,
  password,
  phone,
}) => {
  const res = await axios.post(`${PROXY}/users/signup`, {
    birth,
    email,
    name,
    nickname,
    password,
    phone,
  })

  return res
}

const signinSubmit = async ({ email, password }) => {
  const res = await axios.post(`${PROXY}/users/signin`, {
    email,
    password,
  })

  return res
}

const newPassword = async (data, uuid) => {
  const res = await axios.post(`${PROXY}/users/password/new?uuid=${uuid}`, data)

  return res
}

const findPassword = async (data) => {
  const res = await axios.post(`${PROXY}/users/password/user-info`, data)

  return res
}

export {
  emailCheck,
  nicknameCheck,
  signupSubmit,
  signinSubmit,
  newPassword,
  findPassword,
}
