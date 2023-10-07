import { all, fork } from 'redux-saga/effects'
import { watchGetUser0000 } from './handlers/user'

const rootSaga = function* () {
  yield all([fork(watchGetUser0000)])
}

export default rootSaga
