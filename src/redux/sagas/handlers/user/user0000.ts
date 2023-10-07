import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'

import { requestGetUser0000 } from '../../requests/user/user0000'
import {
  getUser0000ErrorAction,
  getUser0000SuccessAction,
} from '../../../ducks/user/user0000/slice'
import {
  GET_USER_BY_USERNAME,
  User0000Type,
} from '../../../ducks/user/user0000'

export function* handleGetUser0000({
  payload: username,
}: PayloadAction<string>) {
  try {
    const response: AxiosResponse<User0000Type> = yield call(() =>
      requestGetUser0000(username)
    )
    const { data, status, request } = response
    if (status === 200) {
      yield put(getUser0000SuccessAction(data))
    }
  } catch (error) {
    yield put(getUser0000ErrorAction(error as string))
  }
}

export function* watchGetUser0000() {
  yield takeLatest(GET_USER_BY_USERNAME, handleGetUser0000)
}
