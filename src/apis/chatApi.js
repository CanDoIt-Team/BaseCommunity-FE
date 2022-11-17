import axios from 'axios'
import { SOKET } from './proxy'

// 채팅방 생성
const createChatAPI = async (name, token) => {
  const res = await axios.post(
    `${SOKET}/chat/room/${name}`,
    { roomName: name },
    {
      headers: {
        'X-AUTH-TOKEN': token,
      },
    },
  )
  return res
}

// 채팅방 삭제
const deleteChatAPI = async (roomId) => {
  const res = await axios.delete(`${SOKET}/chat/room/${roomId}`)
  return res
}

export { createChatAPI, deleteChatAPI }
