import { takeLatest, all, put} from 'redux-saga/effects'
import {  } from './user.saga'

export function* rootSaga(){
    yield all([fork(watchSignup)])
}
