import axios from 'axios'

const emailCheck = async (email) => {
  const res = await axios.get(`/users/signup/check/email?email=${email}`)

  return res
}

const nicknameCheck = async (nickname) => {
  const res = await axios.get(
    `/users/signup/check/nickname?nickname=${nickname}`,
  )

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

const findPassword = async (data) => {
  const res = await axios.post(`/users/findPassword`, data)

  return res
}

const signIn = async (data) => {
  const res = await axios.post('/users/signin', data) 

  console.log(res)
  return res
}
export { emailCheck, nicknameCheck, signupSubmit, findPassword, signIn }
