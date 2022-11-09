import { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { getBoardDetail, getBoardList } from '../apis/boardApi'
import { boardDetailStore, boardListState } from '../store/boardStore'

export function useGetBoardList(category, page, searchValue) {
  const [{ loading, data }, set] = useRecoilState(boardListState)
  
  const fetchData = useCallback(
    async (category, page, searchValue) => {
      set({ loading: true, data: null })
      try {
        const boardData = await getBoardList(category, page, searchValue)
        set({ loading: false, data: boardData.data, error: null })
      } catch (e) {
        console.log(e)
      }
    },
    [set],
  )

  useEffect(() => {
    fetchData(category, page, searchValue)
  }, [fetchData, category, page, searchValue])

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
