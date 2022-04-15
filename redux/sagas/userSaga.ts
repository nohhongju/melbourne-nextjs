import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest} from 'redux-saga/effects'
import { JoinPayload, joinRequest } from '../reducers/userReducer'
import { joinApi } from '../api/userApi'

function* join(action: PayloadAction<JoinPayload>){
    try{
        alert('*** saga내부 join 성공 ***')
        
    }catch(error){
        alert(' *** saga내부 join 실패 *** ')
        
    }
}
export function* watchJoin(){
    yield takeLatest(joinRequest.type, join)
}
