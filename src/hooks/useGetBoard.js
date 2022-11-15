import { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { getBoardDetail, getBoardList } from '../apis/boardApi'
import { boardDetailStore, boardListState } from '../store/boardStore'

export function useGetBoardList(category, page, size, searchValue) {
  const [{ loading, data }, set] = useRecoilState(boardListState)
  
  const fetchData = useCallback(
    async (category, page, size, searchValue) => {
      set({ loading: true, data: null })
      try {
        const boardData = await getBoardList(category, page - 1, size, searchValue)
        console.log(boardData)
        set({ loading: false, data: boardData.data, error: null })
      } catch (e) {
        console.log(e)
      }
    },
    [set],
  )

  useEffect(() => {
    fetchData(category, page, size, searchValue)
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
