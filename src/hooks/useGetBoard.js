import { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { getBoardDetail, getBoardList } from '../apis/boardApi'
import { boardDetailStore, boardListState } from '../store/boardStore'

export function useGetBoardList(category) {
  const [{ loading, data }, set] = useRecoilState(boardListState)

  const fetchData = useCallback(
    async (category) => {
      set({ loading: true, data: null })
      try {
        console.log(category)
        const boardData = await getBoardList(category)
        set({ loading: false, data: boardData.data, error: null })
      } catch (e) {
        console.log(e)
      }
    },
    [set],
  )

  useEffect(() => {
    fetchData(category)
  }, [fetchData, category])

  return {
    loading,
    data,
  }
}

export function useGetBoardDetail(id) {
  const [{ loading, data }, set] = useRecoilState(boardDetailStore)

  const fetchData = useCallback(async () => {
    set({ loading: true, data: null })
    try {
      const boardData = await getBoardDetail(id)
      set({ loading: false, data: boardData.data, error: null })
    } catch (e) {
      console.log(e)
    }
  }, [id, set])

  useEffect(() => {
    fetchData(id)
  }, [fetchData, id])

  return {
    loading,
    data,
  }
}
