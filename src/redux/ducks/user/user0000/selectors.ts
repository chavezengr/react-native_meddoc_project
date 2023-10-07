import { createSelector } from 'reselect'
import { RootState } from '../../../store'

export const user0000 = (state: RootState) => state.user0000.user

export const getuser0000 = createSelector([user0000], (user0000) => {
  return user0000
})
