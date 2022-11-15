import { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { getMyHeartList } from '../apis/boardApi'
import { heartListState } from '../store/heartStore'

export function useGetHeartList(token, page, size) {
  const [{ data }, set] = useRecoilState(heartListState)

  const fetchData = useCallback(
    async (token) => {
      set({ data: null })
      try {
        if (token) {
          const heartData = await getMyHeartList(token, page, size)
          set({ data: heartData.data })
        } else {
          set({ data: null })
        }
      } catch (e) {
        console.log(1)
      }
    },
    [page, set, size],
  )

  useEffect(() => {
    fetchData(token, page - 1, size)
  }, [fetchData, page, size, token])

  return {
    data,
  }
}
