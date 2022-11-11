import axios from 'axios'

const getBoardList = async (category, page, searchValue) => {
  console.log(category)
  if (category === '전체') {
    console.log('api', category)
    const res = await axios.get(`/boards?keyword=${searchValue}&page=${page}`)
    return res
  } else {
    console.log('api', category)
    const res = await axios.get(
      `/boards?category=${category}&keyword=${searchValue}&page=${page}`,
      searchValue,
    )

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
      'x-auth-token': token,
    },
  })

  return res
}

const deleteBoard = async (token, boardId) => {
  const res = await axios.delete(`/boards/${boardId}`, {
    headers: {
      'x-auth-token': token,
    },
  })

  return res
}

const updateBoard = async (token, boardId, data) => {
  const res = await axios.put(`/boards/${boardId}`, data, {
    headers: {
      'x-auth-token': token,
    },
  })

  return res
}

const addComment = async (id, data, token) => {
  const res = await axios.post(`/boards/${id}/comments`, data, {
    headers: {
      'x-auth-token': token,
    },
  })

  return res
}

const deleteComment = async (id, token) => {
  const res = await axios.delete(`/boards/comments/${id}`, {
    headers: {
      'x-auth-token': token,
    },
  })

  return res
}

const updateComment = async (id, token, data) => {
  const res = await axios.put(`/boards/comments/${id}`, data, {
    headers: {
      'x-auth-token': token,
    },
  })

  return res
}

const addHearts = async (token, boardId) => {
  const res = await axios.get(`/boards/${boardId}/hearts`, {
    headers: {
      'x-auth-token': token,
    },
  })

  return res
}

const getMyBoardList = async (token, page) => {
  const res = await axios.get(`/boards/myBoardList?page=${page}`, {
    headers: {
      'x-auth-token': token,
    },
  })

  return res
}

const getMyHeartList = async (token, page) => {
  const res = await axios.get(`/boards/myHeartList?page=${page}`, {
    headers: {
      'x-auth-token': token,
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
  addHearts,
  getMyHeartList,
  getMyBoardList,
}
