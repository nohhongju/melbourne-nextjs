import { all } from 'redux-saga/effects';
import { watchJoin } from "./userSaga";

export default function* rootSaga(){
    yield all([watchJoin()]);
}
