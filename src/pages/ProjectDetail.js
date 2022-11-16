import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { useRecoilValue } from 'recoil'
import { authToken } from '../store/store'

import { detailAPI, deleteProjectAPI, applyAPI } from '../apis/projectsApi'
import { useGetUser } from '../hooks/useGetUser'

import { SubmitButton } from '../components/common/Button'
import CommentWrite from '../components/common/CommentWrite'
import CommentList from '../components/common/CommentLIst'

import modalShow from '../components/Modal'

import styled from '../styles/ProjectDetail.module.scss'

export default function ProjectDetail() {
  const [post, setPost] = useState()
  const [projectData, setProjectData] = useState()
  const token = useRecoilValue(authToken)
  const params = useParams()
  const { data } = useGetUser(token)
  const navigate = useNavigate()

  useEffect(() => {
    if (data) {
      setProjectData(data)
    }

    console.log(projectData)
  }, [projectData, data])

  useEffect(() => {
    const getProjectDetail = async () => {
      try {
        const result = await detailAPI(params.id)
        if (result.status === 200) {
          console.log(result)
          setPost(result.data)
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
    try {
      const result = await applyAPI(params.id, token)
      console.log(result)
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
      {post && projectData && (
        <section className={styled.section}>
          <div className={styled.titleArea}>
            <h2 className={styled.title}>{post.title}</h2>
            <div className={styled.leaderNameAndCreateAt}>
              <span className={styled.leaderName}>{post.leader.name}</span>
              <span>{post.createdAt}</span>
            </div>
          </div>
          <div className={styled.expects}>
            <p className={styled.expect}>모집 인원: {post.maxTotal}</p>
            <p className={styled.expect}>현재 인원: {post.nowTotal}</p>
            <p className={styled.expect}>시작 예정일: {post.startDate}</p>
            <p className={styled.expect}>기간: {post.developPeriod}</p>
          </div>
          <div className={styled.infos}>
            <div className={styled.info}>
              <p className={styled.skillTitle}>사용 기술:</p>
              {post.projectSkills.map((skill) => (
                <p key={skill.name} style={{ marginRight: '10px' }}>
                  {skill.name}
                </p>
              ))}
            </div>
            <div className={styled.info}>
              <p style={{ marginRight: '20px' }}>
                닉네임: {post.leader.nickname}
              </p>
              <p>댓글 수: {post.projectComments.length}</p>
            </div>
          </div>
          <div className={styled.content}>
            <textarea
              readOnly
              className={styled.textarea}
              value={post.content}
            />
          </div>
          {projectData.nickname === post.leader.nickname ? (
            <div className={styled.btnGroup}>
              <SubmitButton
                title="삭제"
                style={{ backgroundColor: '#c4c4c4' }}
                onClick={handleDeleteClick}
              />
              <SubmitButton title="수정" onClick={handleUpdateClick} />
            </div>
          ) : (
            <SubmitButton title="신청" onClick={handleApplyClick} />
          )}

          <CommentWrite
            token={token}
            id={params.id}
            count={post.projectComments.length}
            pages="projects"
          />

          <CommentList
            token={token}
            id={params.id}
            data={post.projectComments}
            pages="projects"
          />
        </section>
      )}
    </>
  )
}
