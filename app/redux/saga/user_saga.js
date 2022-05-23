import {LOGIN} from '../actions/user/action_types';
import {put, takeLatest, call, all, fork} from 'redux-saga/effects';
import rf from '../../requests/RequestFactory';
import actions from '../actions/user';

function* login(action) {
  try {
    const {data} = yield call(
      params => rf.getRequest('LoginRequest').login(params),
      action.params,
    );
    yield put(actions.loginSuccess(data));
  } catch (err) {
    console.log(err.message, '@: err.message');
  }
}

function* watchAllUsers() {
  yield takeLatest(LOGIN, login);
}

export default function* rootSaga() {
  yield all([fork(watchAllUsers)]);
}
