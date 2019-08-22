import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { AuthActionTypes } from './types';
import { signupUserSuccess, signupUserError } from './actions';
import { registerService } from '../../services';
import { SignupDTO } from '../../interfaces';

function* signupSaga({ payload }: ReturnType<any>) {
  try {
    const response = yield call(registerService, payload);
    yield put(signupUserSuccess(response.data.data));
  } catch (err) {
    if (err.response) {
      yield put(signupUserError(err.response.data.error.message));
    } else {
      yield put(signupUserError('Internal server error occurred.'));
    }
  }
}

function* authWatcherSaga() {
  yield takeLatest(AuthActionTypes.SIGNUP_USER, signupSaga);
}

function* authSaga() {
  yield all([fork(authWatcherSaga)]);
}

export default authSaga;
