import { atom } from 'recoil'

const boardListState = atom({
  key: 'boardListState',
  default: {
    loading: false,
    data: null,
  },
})

const boardDetailStore = atom ({
  key: 'boardDetailStore',
  default: {
    loading: false,
    data: null,
  },
})

export { boardListState, boardDetailStore }
