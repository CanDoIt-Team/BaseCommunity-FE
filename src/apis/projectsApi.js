import axios from 'axios'
import { PROXY } from './proxy'

// 프로젝트 생성
const writeAPI = async (data, token, skill) => {
  const res = await axios.post(`${PROXY}/projects?skill=${skill}`, data, {
    headers: {
      'X-AUTH-TOKEN': token,
    },
  })
  return res
}

// 프로젝트 수정
const updateAPI = async (data, token, skill) => {
  const res = await axios.put(`${PROXY}/projects?skill=${skill}`, data, {
    headers: {
      'X-AUTH-TOKEN': token,
    },
  })
  return res
}

// 프로젝트 조회
const showAPI = async (page, size, keword) => {
  const res = await axios.get(`${PROXY}/projects?sort.sorted=true&keyword=${keword}&page=${page}&size=${size}`)

  return res
}

// 프로젝트 상세 조회
const detailAPI = async (id) => {
  const res = await axios.get(`${PROXY}/projects/${id}`)

  return res
}

// 프로젝트 삭제
const deleteProjectAPI = async (id, token) => {
  const res = await axios.delete(`${PROXY}/projects/${id}`, {
    headers: {
      'X-AUTH-TOKEN': token,
    },
  })

  return res
}

// 프로젝트 스킬 목록 삭제
const deleteSkillAPI = async (id) => {
  const res = await axios.delete(`${PROXY}/projects/${id}/skill`)

  return res
}

// 프로젝트 신청
const applyAPI = async (id, token) => {
  const res = await axios.get(`${PROXY}/projects/register/${id}`, {
    headers: {
      'X-AUTH-TOKEN': token,
    },
  })

  return res
}

// 내 프로젝트 조회
const myProjectAPI = async (token) => {
  const res = await axios.get(`${PROXY}/projects/myProjectList`, {
    headers: {
      'X-AUTH-TOKEN': token,
    },
  })

  return res
}

// 프로젝트 수락
const acceptAPI = async (id) => {
  const res = await axios.get(`${PROXY}/projects/accept/${id}`)

  return res
}

const projectConfirm = async (token) => {
  const res = await axios.get(`/projects/writeYn`, {
    headers: {
      'X-AUTH-TOKEN': token,
    },
  })

  return res
}

export {
  writeAPI,
  showAPI,
  detailAPI,
  deleteProjectAPI,
  deleteSkillAPI,
  updateAPI,
  applyAPI,
  myProjectAPI,
  acceptAPI,
  projectConfirm,
}
