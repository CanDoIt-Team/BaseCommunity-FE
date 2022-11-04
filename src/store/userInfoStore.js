import { atom, selector } from 'recoil'

const userState = atom({
  key: 'userState',
  default: {
    loading: false,
    data: null,
    error: null,
  },
})

const userInfoSelector = selector({
  key: 'userInfoSelector',
  get: ({ get }) => get(userState),
  set: ({ get, set }, newVal) => {

    const preVal = get(userState);
    const {name, value} = newVal;

    console.log(name, value)

    
    set(userState, {...preVal, name, value})
  },
})

export { userState, userInfoSelector }
