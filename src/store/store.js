import { atom, selector } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

const loginState = atom({
  key: 'loginState', // unique ID (with respect to other atoms/selectors)
  default: {
    id: '',
    isLoading: false,
  }, // default value (aka initial value)
  effects_UNSTABLE: [persistAtom],
})


/* 
auth-token 사용법 
const token = useRecoilValue(authToken)
Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
Axios.get or Axios.post
*/
const authToken = selector({
  key: 'authToken',
  get: ({ get }) => get(loginState).id,
})

export { loginState, authToken }
