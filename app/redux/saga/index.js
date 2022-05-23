import watchAllUsers from './user_saga';
import {all} from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([watchAllUsers()]);
}
