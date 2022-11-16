import { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { getMyHeartList } from '../apis/boardApi'
import { showAPI } from '../apis/projectsApi'
import { projectListState } from '../store/projectStore'

export function useGetProject(page, size, keyword) {
  const [{ data }, set] = useRecoilState(projectListState)

  const fetchData = useCallback(
    async (page, size, keyword) => {
      set({ data: null })
      try {
        const projectData = await showAPI(page, size, keyword)
        set({ data: projectData.data })
      } catch (e) {
        console.log(1)
      }
    },
    [set],
  )

  useEffect(() => {
    fetchData(page - 1, size, keyword)
  }, [fetchData, page, size, keyword])

  return {
    data,
  }
}
