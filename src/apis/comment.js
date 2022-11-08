import axios from 'axios'

const addComment = async (id, data, token, pages) => {
  const res = await axios.post(`/${pages}/${id}/comments`, data, {
    headers: {
      //   'auth-token': token,
      'X-AUTH-TOKEN': token,
    },
  })

  return res
}

const updateComment = async (id, token, data, pages) => {
  const res = await axios.put(`/${pages}/${id}/comments`, data, {
    headers: {
      //   'auth-token': token,
      'X-AUTH-TOKEN': token,
    },
  })

  return res
}

const deleteComment = async (id, token, pages) => {
  console.log(pages)
  const res = await axios.delete(`/${pages}/comments/${id}`, {
    headers: {
      //   'auth-token': token,
      'X-AUTH-TOKEN': token,
    },
  })

  return res
}

export { addComment, updateComment, deleteComment }
