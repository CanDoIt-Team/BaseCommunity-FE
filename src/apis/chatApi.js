import axios from 'axios'

// 채팅방 생성
const createChatAPI = async (name, token) => {
  const res = await axios.post(
    `/chat/room/${name}`,
    { roomName: name },
    {
      headers: {
        'X-AUTH-TOKEN': token,
      },
    },
  )
  return res
}

export { createChatAPI }
