import { useCallback, useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { getUser } from '../apis/userApi'
import { userState } from '../store/userInfoStore'

export function useGetUser(token) {
  const [{ loading, data, error }, set] = useRecoilState(userState)

  const fetchData = useCallback(
    async (token) => {
      set({ loading: true, data: null, error: null })
      try {
        const userData = await getUser(token)
        console.log(userData)
        set({ loading: false, data: userData.data, error: null })
      } catch (e) {
        set({ loading: false, data: null, error: e })
      }
    },
    [set],
  )

  useEffect(() => {
    fetchData(token)
  }, [fetchData, token])

  return {
    loading,
    data,
    error,
  }
}
