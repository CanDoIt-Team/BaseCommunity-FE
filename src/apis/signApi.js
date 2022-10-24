import axios from 'axios'

const emailCheck = async (email) => {
  const res = await axios.get(`/users/check/email?email=${email}`)

  return res
}

const nicknameCheck = async (nickname) => {
  const res = await axios.get(`/users/check/nickname?nickname=${nickname}`)

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
  const res = await axios.post(`/users/signup`, {
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
  const res = await axios.post(`/users/signin`, {
    email,
    password,
  })

  return res
}

const newPassword = async (data) => {
  const res = await axios.post('/users/newpassword', data.password)

  return res
}

const findPassword = async (data) => {
  const res = await axios.post(`/users/findPassword`, data)

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
