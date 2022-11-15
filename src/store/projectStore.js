import { atom } from 'recoil'

const projectListState = atom({
  key: 'projectListState',
  default: {
    data: null,
  },
})

export { projectListState }
