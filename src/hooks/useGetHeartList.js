import { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { getMyHeartList } from '../apis/boardApi'
import { heartListState } from '../store/heartStore'

export function useGetHeartList(token) {
  const [{ data }, set] = useRecoilState(heartListState)

  const fetchData = useCallback(
    async (token) => {
      set({ data: null })
      try {
        if (token) {
          const heartData = await getMyHeartList(token)
          set({ data: heartData.data })
        }
        else {
          set({ data: null })
        }
      } catch (e) {
        console.log(1)
      }
    },
    [set],
  )

  useEffect(() => {
    fetchData(token)
  }, [fetchData, token])

  return {
    data,
  }
}
