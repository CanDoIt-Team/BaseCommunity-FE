import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { authToken, loginState } from '../store/store'

import { detailAPI, deleteProjectAPI, applyAPI } from '../apis/projectsApi'
import { useGetUser } from '../hooks/useGetUser'

import { SubmitButton } from '../components/common/Button'
import CommentWrite from '../components/common/CommentWrite'
import CommentList from '../components/common/CommentLIst'

import modalShow from '../components/Modal'

import styled from '../styles/ProjectDetail.module.scss'
import Image from '../components/common/Image'

export default function ProjectDetail() {
  const token = useRecoilValue(authToken)

  const [login, setLogin] = useRecoilState(loginState)
  const [loginCheck, setLoginCheck] = useState(login.id !== '');

  const [post, setPost] = useState()
  const [projectData, setProjectData] = useState()

  const params = useParams()

  const { data } = useGetUser(token)
  const navigate = useNavigate()

  const [skill, setSkill] = useState()

  useEffect(() => {
    if (data) {
      setProjectData(data)
    }
  }, [projectData, data])

  useEffect(() => {
    const getProjectDetail = async () => {
      try {
        const result = await detailAPI(params.id)
        if (result.status === 200) {
          setPost(result.data)
          setSkill(result.data.projectSkills.map((item) => item.name))
        }
      } catch (err) {
        console.log(err)
      }
    }

    getProjectDetail()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDeleteClick = () => {
    modalShow(
      {
        title: '해당 프로젝트 게시글을 삭제합니다',
        showCancelButton: true,
        cancelButtonColor: '#c4c4c4',
        cancelButtonText: '취소',
        confirmButtonText: '삭제',
      },
      async (e) => {
        if (e.isConfirmed === true) {
          try {
            const result = await deleteProjectAPI(params.id, token)
            if (result.status === 200) {
              navigate('/project')
            }
          } catch {
            modalShow({ title: '오류가 발생했습니다.' })
          }
        }
      },
    )
  }

  const handleUpdateClick = () => {
    navigate('/project/update', {
      state: {
        data: post,
      },
    })
  }

  const handleApplyClick = async () => {

    if(!loginCheck) {
      modalShow({
        title: '로그인 후 신청하실 수 있습니다.'
      })

      return;
    }

    try {
      const result = await applyAPI(params.id, token)
      if (result.status === 200) {
        modalShow({ title: '신청이 완료되었습니다.' }, navigate('/project'))
      }
    } catch (err) {
      console.log(err)
      modalShow({ title: err.response.data.message })
    }
  }

  return (
    <>
      {post && (
        <div className={styled.section}>
          <div className={styled.titleArea}>
            <h2 className={styled.title}>{post.title}</h2>
            <div className={styled.userInfo}>
              <Image size={40} src={post.leader.urlFilename} />
              <span>{post.leader.name}</span>
              <span className={styled.time}>{post.createdAt.slice(0, 10)}</span>
            </div>
          </div>
          <div className={styled.expects}>
            <div className={styled.expectWrap}>
              <p className={styled.expect}>
                <span>모집 인원</span>
                <span> {post.maxTotal} 명</span>
              </p>
              <p className={styled.expect}>
                <span>현재 인원</span>
                <span> {post.nowTotal} 명</span>
              </p>
              <p className={styled.expect}>
                <span>이 메 일</span>
                <span> {post.leader.email}</span>
              </p>
            </div>
            <div className={styled.expectWrap}>
              <p className={styled.expect}>
                <span>시작 예정</span>
                <span> {post.startDate}</span>
              </p>
              <p className={styled.expect}>
                <span>진행 기간</span>
                <span> {post.developPeriod} 개월</span>
              </p>
            </div>
          </div>
          <div className={styled.skillWrap}>
            <span>사용 기술</span>
            <span className={styled.skillList}>
              {skill.map((item) => (
                <span className={styled.skill} key={item}>{item}</span>
              ))}
            </span>
          </div>
          <div className={styled.content}>
            <h2 className={styled.contentTitle}>프로젝트 내용</h2>
            <div className={styled.textarea}>
              {post?.content?.split('\n')?.map((item, idx) => (
                <p key={idx} className={styled.text}>
                  {item}
                  <br />
                </p>
              ))}
            </div>
          </div>
          {projectData?.nickname === post?.leader.nickname ? (
            <div className={styled.btnGroup}>
              <button className={styled.updateBtn} onClick={handleUpdateClick}>
                수정
              </button>
              <button className={styled.cancelBtn} onClick={handleDeleteClick}>
                삭제
              </button>
            </div>
          ) : (
            <SubmitButton title="신청" onClick={handleApplyClick} />
          )}

          <CommentWrite
            token={token}
            id={params.id}
            data={data}
            count={post.projectComments.length}
            loginCheck={loginCheck}
            pages="projects"
          />
          <CommentList
            token={token}
            id={params.id}
            data={post.projectComments}
            pages="projects"
          />
        </div>
      )}
    </>
  )
}
