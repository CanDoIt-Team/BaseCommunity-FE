import { myProjectAPI, acceptAPI } from '../../../apis/projectsApi'
import { createChatAPI, deleteChatAPI } from '../../../apis/chatApi'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { authToken } from '../../../store/store'
import { useGetUser } from '../../../hooks/useGetUser'

import styled from '../../../styles/mypage/MyProject.module.scss'

import modalShow from '../../../components/Modal'

import { Link } from 'react-router-dom'
import Chat from './Chat'

export const MyProject = () => {
  const token = useRecoilValue(authToken)
  const [myList, setMyList] = useState()
  const [applyList, setApplyList] = useState()
  const [chatRoom, setChatRoom] = useState(false)
  const [userData, setUserData] = useState(useGetUser(token))

  const { data } = useGetUser(token)

  const myProject = async () => {
    try {
      // console.log(token)
      const result = await myProjectAPI(token)
      console.log(result.data)
      setMyList(result.data)
    } catch (err) {
      console.log(err)
      modalShow({ title: '에러', text: err.response.data.message })
    }
  }

  useEffect(() => {
    console.log(userData)
  }, [userData])

  useEffect(() => {
    myProject()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (chatRoom) {
      myProject()
    }
  }, [chatRoom])

  useEffect(() => {
    if (myList) {
      setApplyList(
        myList.projectMembers.filter(
          (list) => list.member.nickname !== myList.leader.nickname,
        ),
      )
    }
  }, [myList])

  const handleAcceptClick = async (id) => {
    try {
      const result = await acceptAPI(id)
      console.log(result)
      modalShow({ title: '신청을 수락했습니다.' })
      setApplyList()
      myProject()
    } catch (err) {
      console.log(err)
      modalShow({ title: '에러', text: err.response.data.message })
    }
  }

  const handleCreateChat = () => {
    modalShow(
      {
        title: '채팅방 이름을 입력하세요',
        showCancelButton: true,
        input: 'text',
        cancelButtonColor: '#c4c4c4',
        cancelButtonText: '취소',
        confirmButtonText: '생성',
      },
      async (e) => {
        if (e.isConfirmed === true) {
          if (!e.value) return

          try {
            const result = await createChatAPI(e.value, token)
            if (result.status === 200) {
              modalShow({
                title: `${result.data.roomName} 방이 생성되었습니다.`,
              })
              myProject()
            }
          } catch (err) {
            console.log(err)
          }
        }
      },
    )
  }

  const handleDeleteChat = async (list) => {
    if (list.chatRooms.length > 0) {
      try {
        const result = await deleteChatAPI(list.chatRooms[0].id)
        if (result.status === 200) {
          modalShow({
            title: `채팅방이 삭제되었습니다.`,
          })
          myProject()
        }
      } catch (err) {
        console.log(err)
      }
    } else {
      modalShow({
        title: `채팅방이 존재하지 않습니다`,
      })
    }
  }

  const handleChatRoom = () => {
    if (myList.chatRooms.length > 0) {
      setChatRoom(!chatRoom)
    } else {
      modalShow({ title: '입장 가능한 채팅방이 없습니다.' })
    }
  }

  return (
    <>
      {myList && applyList ? (
        <>
          <div className={styled.container}>
            <div className={styled.myProjectList}>
              <Link to={`/project/${myList.id}`} className={styled.link}>
                <div className={styled.startDate}>
                  <span>시작 예정일 :</span>
                  <span>{myList.startDate}</span>
                </div>
                <h2 className={styled.projectTitle}>{myList.title}</h2>
                <ul className={styled.techList}>
                  {myList.projectSkills.map((skill) => (
                    <li key={skill.id}>{skill.name}</li>
                  ))}
                </ul>
                <div className={styled.writer}>
                  <span>작성자</span>
                  <span>{myList.leader.nickname}</span>
                </div>
              </Link>
            </div>

            {userData.data.nickname === myList.leader.nickname && (
              <div className={styled.applyContainer}>
                <p className={styled.applyTitle}>
                  {`신청 리스트 (${myList.nowTotal} / ${myList.maxTotal})`}
                </p>
                <ul>
                  {applyList.map((appList) => (
                    <li key={appList.id} className={styled.applyList}>
                      <p className={styled.nickname}>
                        신청자 닉네임: {appList.member.nickname}
                      </p>
                      {appList.accept ? (
                        <div className={styled.acceptPerson}>수락 완료</div>
                      ) : (
                        <div className={styled.btnGroup}>
                          <button
                            className={styled.apply}
                            onClick={() => handleAcceptClick(appList.member.id)}
                          >
                            승인
                          </button>
                          <button className={styled.cancel}>취소</button>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className={styled.chatContainer}>
            {userData.data.nickname === myList.leader.nickname && (
              <>
                <button
                  className={styled.createChat}
                  onClick={() => handleCreateChat()}
                >
                  채팅방 생성
                </button>
                <button
                  className={styled.deleteChat}
                  onClick={() => handleDeleteChat(myList)}
                >
                  채팅방 삭제
                </button>
              </>
            )}

            {chatRoom ? (
              <button
                className={styled.Lookup}
                onClick={() => handleChatRoom()}
              >
                채팅방 퇴장
              </button>
            ) : (
              <button
                className={styled.Lookup}
                onClick={() => handleChatRoom()}
              >
                채팅방 입장
              </button>
            )}
          </div>
        </>
      ) : (
        <div>프로젝트 신청 내역이 없습니다.</div>
      )}
      {chatRoom && (
        <Chat
          room={myList.chatRooms[0].id}
          msg={myList.chatRooms[0].messages}
        />
      )}
    </>
  )
}

export default MyProject
