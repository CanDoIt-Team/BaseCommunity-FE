import { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { getEmployments } from '../apis/employmentsApi'
import { employmentsListState } from '../store/employmentsStore'

export function useGetEmployments(page) {
  const [{ data }, set] = useRecoilState(employmentsListState)

  const fetchData = useCallback(
    async (page) => {
      set({ data: null })
      try {
        const employmentsData = await getEmployments(page)
        console.log(employmentsData)
        set({ data: employmentsData.data })
      } catch (e) {
        console.log(1)
      }
    },
    [set],
  )

  useEffect(() => {
    fetchData(page)
  }, [fetchData, page])

  return {
    data,
  }
}
