import { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { getHeart } from '../apis/boardApi'
import { heartListState } from '../store/heartStore'

export function useGetHeartList(token) {
  const [{ data }, set] = useRecoilState(heartListState)

  const fetchData = useCallback(
    async (token) => {
      set({ data: null })
      try {
        const heartData = await getHeart(token)
        set({ data: heartData.data })
      } catch (e) {
        console.log(e)
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

