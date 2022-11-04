import axios from 'axios'

const getBoardList = async (category) => {
  console.log(category)
  if (category === '전체') {
    console.log('api', category)
    const res = await axios.get(`/boards`)
    return res
  } else {
    console.log('api', category)
    const res = await axios.get(`/boards?category=${category}`)
    return res
  }
}

const getBoardDetail = async (id) => {
  const res = await axios.get(`/boards/${id}`)

  return res
}

const addBoard = async (token, data) => {
  const res = await axios.post(`/boards`, data, {
    headers: {
      'auth-token': token,
    },
  })

  return res
}

const deleteBoard = async (token, boardId) => {
  const res = await axios.delete(`/boards/${boardId}`, {
    headers: {
      'auth-token': token,
    },
  })

  return res
}

const updateBoard = async (token, boardId, data) => {
  const res = await axios.put(`/boards/${boardId}`, data, {
    headers: {
      'auth-token': token,
    },
  })

  return res
}

const addComment = async (id, data, token) => {
  const res = await axios.post(`/boards/${id}/comments`, data, {
    headers: {
      'auth-token': token,
    },
  })

  return res
}

const deleteComment = async (id, token) => {
  console.log(id)
  const res = await axios.delete(`/boards/comments/${id}`, {
    headers: {
      'auth-token': token,
    },
  })

  return res
}

const updateComment = async (id, token, data) => {
  console.log(id)
  const res = await axios.put(`/boards/comments/${id}`, data, {
    headers: {
      'auth-token': token,
    },
  })

  return res
}

export {
  getBoardList,
  getBoardDetail,
  addBoard,
  addComment,
  deleteComment,
  updateComment,
  deleteBoard,
  updateBoard,
}
