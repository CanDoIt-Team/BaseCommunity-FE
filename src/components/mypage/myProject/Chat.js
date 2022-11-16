import React, { useEffect, useRef, useState } from 'react'
import * as StompJs from '@stomp/stompjs'
import * as SockJS from 'sockjs-client'

import { useRecoilValue } from 'recoil'
import { authToken } from '../../../store/store'
import { useGetUser } from '../../../hooks/useGetUser'

import { myProjectAPI } from '../../../apis/projectsApi'

import styled from '../../../styles/mypage/Chat.module.scss'

export default function Chat(props) {
  const client = useRef({})
  const [chatMessages, setChatMessages] = useState()
  const [message, setMessage] = useState('')
  const token = useRecoilValue(authToken)
  const { data } = useGetUser(token)

  const scrollRef = useRef()

  const ROOM_SEQ = props.room

  const myProject = async () => {
    try {
      // console.log(token)
      const result = await myProjectAPI(token)
      console.log(result)
      if (result.status === 200) {
        setChatMessages(result.data.chatRooms[0].messages)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    myProject()
    connect()

    return () => disconnect()
  }, [])

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [chatMessages])

  const connect = () => {
    client.current = new StompJs.Client({
      // brokerURL: "ws://localhost:8080/ws-stomp/websocket", // 웹소켓 서버로 직접 접속
      webSocketFactory: () => new SockJS('/stomp/chat'), // proxy를 통한 접속
      connectHeaders: {
        'X-AUTH-TOKEN': token,
      },
      debug: function (str) {
        // console.log(str)
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        subscribe()
      },
      onStompError: (frame) => {
        console.error(frame)
      },
    })

    client.current.activate()
  }

  const disconnect = () => {
    client.current.deactivate()
  }

  const subscribe = () => {
    client.current.subscribe(
      `/exchange/chat.exchange/room.${ROOM_SEQ}`,
      ({ body }) => {
        // setChatMessages((_chatMessages) => [..._chatMessages, JSON.parse(body)])
        myProject()
      },
    )
  }

  const publish = (message) => {
    if (!client.current.connected) {
      return
    }

    client.current.publish({
      destination: `/pub/chat.message.${ROOM_SEQ}`,
      body: JSON.stringify({ memberId: data.id, message }),
    })

    setMessage('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault()
      publish(message)
    }
  }

  return (
    <div className={styled.section}>
      <div className={styled.container} ref={scrollRef}>
        {chatMessages && data && (
          <ul className={styled.ul}>
            {chatMessages.map((_chatMessages, index) =>
              _chatMessages.sender === data.nickname ? (
                <li key={index} className={styled.li}>
                  <p className={styled.me}>{_chatMessages.message}</p>
                  <p className={styled.createdAtME}>
                    {_chatMessages.createdAt.replace('T', ' ')}
                  </p>
                </li>
              ) : (
                <li key={index} className={styled.li}>
                  <p className={styled.senderYou}>{_chatMessages.sender}</p>
                  <div className={styled.msgImgYou}>
                    <img
                      className={styled.img}
                      src="https://via.placeholder.com/40"
                      alt="이미지"
                    />
                    <p className={styled.you}>{_chatMessages.message}</p>
                  </div>
                  <p className={styled.createdAtYou}>
                    {_chatMessages.createdAt.replace('T', ' ')}
                  </p>
                </li>
              ),
            )}
          </ul>
        )}
      </div>
      <div>
        <textarea
          className={styled.sendInput}
          type={'text'}
          // placeholder={'message'}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => handleKeyPress(e)}
        />
        <button className={styled.btn} onClick={() => publish(message)}>
          전송
        </button>
      </div>
    </div>
  )
}
