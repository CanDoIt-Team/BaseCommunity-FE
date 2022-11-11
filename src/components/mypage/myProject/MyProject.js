import { myProjectAPI, acceptAPI } from '../../../apis/projectsApi'
import { createChatAPI } from '../../../apis/chatApi'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { authToken } from '../../../store/store'
import { useGetUser } from '../../../hooks/useGetUser'

import styled from '../../../styles/mypage/MyProject.module.scss'

import modalShow from '../../../components/Modal'

import { Link } from 'react-router-dom'

export const MyProject = () => {
  const token = useRecoilValue(authToken)
  const [myList, setMyList] = useState()
  const [applyList, setApplyList] = useState()
  const { data } = useGetUser(token)

  const myProject = async () => {
    try {
      console.log(token)
      const result = await myProjectAPI(token)
      console.log(result.data)
      setMyList(result.data)
    } catch (err) {
      console.log(err)
      modalShow({ title: '에러', text: err.response.data.message })
    }
  }

  useEffect(() => {
    myProject()
  }, [])

  useEffect(() => {
    console.log(myList)
    if (myList) {
      setApplyList(
        myList.projectMembers.filter(
          (list) => list.member.nickname !== myList.leader.nickname,
        ),
      )
    }
  }, [myList])

  useEffect(() => {
    console.log(applyList)
  }, [applyList])

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

  const handleCreateChat = (id) => {
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
            }
          } catch (err) {
            console.log(err)
          }
        }
      },
    )
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
            {data.nickname === myList.leader.nickname && (
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
            {data.nickname === myList.leader.nickname && (
              <>
                <button
                  className={styled.createChat}
                  onClick={() => handleCreateChat(myList)}
                >
                  채팅방 생성
                </button>
                <button className={styled.deleteChat}>채팅방 삭제</button>
              </>
            )}

            <button className={styled.Lookup}>채팅방 조회</button>
          </div>
        </>
      ) : (
        <div>프로젝트 신청 내역이 없습니다.</div>
      )}
    </>
  )
}

export default MyProject
