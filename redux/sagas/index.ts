import { all } from 'redux-saga/effects';
import { watchJoin } from "./userSaga";
import { watchAdd } from "./boardSaga";

export default function* rootSaga(){
    yield all([watchJoin(),watchAdd()]);
}
