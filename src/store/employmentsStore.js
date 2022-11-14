import { atom } from 'recoil'

const employmentsListState = atom({
  key: 'employmentsListState',
  default: {
    data: null,
  },
})

export { employmentsListState }
