import axios from 'axios'
import { PROXY } from './proxy'

const getBoardList = async (category, page, size, searchValue) => {
  console.log(searchValue)
  if (category === '전체') {
    console.log('api', category)
    const res = await axios.get(
      `${PROXY}/boards?sort.sorted=true&keyword=${searchValue}&page=${page}&size=${size}`,
    )
    return res
  } else {
    console.log('api', category)
    const res = await axios.get(
      `${PROXY}/boards?sort.sorted=true&category=${category}&keyword=${searchValue}&page=${page}&size=${size}`,
      searchValue,
    )

    return res
  }
}

const getBoardDetail = async (id) => {
  const res = await axios.get(`${PROXY}/boards/${id}`)

  return res
}

const addBoard = async (token, data) => {
  const res = await axios.post(`${PROXY}/boards`, data, {
    headers: {
      'x-auth-token': token,
    },
  })

  return res
}

const deleteBoard = async (token, boardId) => {
  const res = await axios.delete(`${PROXY}/boards/${boardId}`, {
    headers: {
      'x-auth-token': token,
    },
  })

  return res
}

const updateBoard = async (token, boardId, data) => {
  const res = await axios.put(`${PROXY}/boards/${boardId}`, data, {
    headers: {
      'x-auth-token': token,
    },
  })

  return res
}

const addComment = async (id, data, token) => {
  const res = await axios.post(`${PROXY}/boards/${id}/comments`, data, {
    headers: {
      'x-auth-token': token,
    },
  })

  return res
}

const deleteComment = async (id, token) => {
  const res = await axios.delete(`${PROXY}/boards/comments/${id}`, {
    headers: {
      'x-auth-token': token,
    },
  })

  return res
}

const updateComment = async (id, token, data) => {
  const res = await axios.put(`${PROXY}/boards/comments/${id}`, data, {
    headers: {
      'x-auth-token': token,
    },
  })

  return res
}

const addHearts = async (token, boardId) => {
  const res = await axios.get(`${PROXY}/boards/${boardId}/hearts`, {
    headers: {
      'x-auth-token': token,
    },
  })

  return res
}

const getMyBoardList = async (token, page, size) => {
  const res = await axios.get(`${PROXY}/boards/myBoardList?sort.sorted=true&page=${page}&size=${size}`, {
    headers: {
      'x-auth-token': token,
    },
  })

  return res
}

const getMyHeartList = async (token, page, size) => {
  console.log(page)
  const res = await axios.get(
    `${PROXY}/boards/myHeartList?sort.sorted=true&page=${page}&size=${size}`,
    {
      headers: {
        'x-auth-token': token,
      },
    },
  )

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
