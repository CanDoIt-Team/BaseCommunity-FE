import { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { getMyHeartList } from '../apis/boardApi'
import { showAPI } from '../apis/projectsApi'
import { projectListState } from '../store/projectStore'

export function useGetProject(page, size) {
  const [{ data }, set] = useRecoilState(projectListState)

  const fetchData = useCallback(
    async (page, size) => {
      set({ data: null })
      try {
        const projectData = await showAPI(page, size)
        set({ data: projectData.data })
      } catch (e) {
        console.log(1)
      }
    },
    [set],
  )

  useEffect(() => {
    fetchData(page - 1, size)
  }, [fetchData, page, size])

  return {
    data,
  }
}
