import { createSelector } from 'reselect'
import { RootState } from '../../../store'

export const md0000 = (state: RootState) => state.md0000

export const getmd0000 = createSelector([md0000], (md0000) => {
  return md0000
})
