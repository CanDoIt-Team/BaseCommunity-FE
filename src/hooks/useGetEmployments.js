import { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { getEmployments } from '../apis/employmentsApi'
import { employmentsListState } from '../store/employmentsStore'

export function useGetEmployments(page, size) {
  const [{ data }, set] = useRecoilState(employmentsListState)

  const fetchData = useCallback(
    async (page, size) => {
      set({ data: null })
      try {
        const employmentsData = await getEmployments(page, size)
        set({ data: employmentsData.data })
      } catch (e) {
        console.log(1)
      }
    },
    [set],
  )

  useEffect(() => {
    fetchData(page, size)
  }, [fetchData, page, size])

  return {
    data,
  }
}
