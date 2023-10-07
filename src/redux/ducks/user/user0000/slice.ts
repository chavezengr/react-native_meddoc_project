import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUsers0000StateType, User0000Type, initialState } from './model'
import { RootState } from '../../../store'

export const user0000Slice = createSlice({
  name: 'user0000',
  initialState,
  reducers: {
    getUser0000Action: (
      state: IUsers0000StateType,
      { payload: username }: PayloadAction<string>
    ) => {
      state.user.isLoading = true
      state.user.errors = ''
    },
    getUser0000SuccessAction: (
      state: IUsers0000StateType,
      { payload: user }: PayloadAction<User0000Type>
    ) => {
      state.user.isLoading = false
      state.user.data = user
    },
    getUser0000ErrorAction: (
      state: IUsers0000StateType,
      { payload: error }: PayloadAction<string>
    ) => {
      state.user.isLoading = false
      state.user.errors = error
    },
  },
})

const { actions, reducer } = user0000Slice

export const {
  getUser0000Action,
  getUser0000SuccessAction,
  getUser0000ErrorAction,
} = actions

export default reducer

export const selectuser0000 = (state: RootState) => state.user0000.user
