import axios from 'axios'

// 프로젝트 생성
const writeAPI = async (data, token) => {
  const res = await axios.post(`/projects`, data, {
    headers: {
      'X-AUTH-TOKEN': token,
    },
  })
  return res
}

// 프로젝트 수정
const updateAPI = async (data, token) => {
  const res = await axios.put(`/projects`, data, {
    headers: {
      'X-AUTH-TOKEN': token,
    },
  })
  return res
}

// 프로젝트 조회
const showAPI = async () => {
  const res = await axios.get(`/projects`)

  return res
}

// 프로젝트 상세 조회
const detailAPI = async (id) => {
  const res = await axios.get(`/projects/${id}`)

  return res
}

// 프로젝트 삭제
const deleteProjectAPI = async (id, token) => {
  const res = await axios.delete(`/projects/${id}`, {
    headers: {
      'X-AUTH-TOKEN': token,
    },
  })

  return res
}

// 프로젝트 스킬 목록 삭제
const deleteSkillAPI = async (id) => {
  const res = await axios.delete(`/projects/${id}/skill`)

  return res
}

// 프로젝트 신청
const applyAPI = async (id, token) => {
  const res = await axios.get(`/projects/register/${id}`, {
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
}
