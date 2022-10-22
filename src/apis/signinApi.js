import axios from 'axios'

const findPassword = async (data) => {
  const res = await axios.post(`/users/findPassword`, data)

  return res
}

const signIn = async (data) => {
  const res = await axios.post('/users/signin', data) 

  console.log(res)
  return res
}

const newPassword = async (data) => {
  const res = await axios.post('/users/newpassword', data.password)

  return res
}

export { findPassword, signIn, newPassword}