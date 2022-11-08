import { atom } from 'recoil'

const heartListState = atom({
  key: 'heartListState',
  default: {
    data: null,
  },
})

export { heartListState }
