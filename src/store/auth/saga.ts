import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
import jwt_decode from 'jwt-decode';

import { AuthActionTypes } from './types';
import {
  signupUserSuccess,
  signupUserError,
  loginUser,
  loginUserSuccess,
  setCurrentUser,
} from './actions';
import { registerService, loginService, setAuthHeader } from '../../services';
import { notify } from '../../utils';
import { Token, User } from '../../interfaces';

function* signupSaga({ payload }: ReturnType<any>) {
  try {
    yield call(registerService, payload);
    yield put(signupUserSuccess());

    // login here
    const { email, password } = payload;
    yield put(loginUser({ email, password }));
  } catch (err) {
    if (err.response) {
      notify({ message: err.response.data.error.message });
      yield put(signupUserError());
    } else {
      notify({ message: 'Internal server error occurred.' });
      yield put(signupUserError());
    }
  }
}

function* loginSaga({ payload }: ReturnType<any>) {
  try {
    const response = yield call(loginService, payload);
    yield put(loginUserSuccess());

    // Set Token & User
    const { data } = response.data;
    const { token, created } = data;
    window.localStorage && localStorage.setItem('user_access', token);
    setAuthHeader(token);
    const { id, email, iat, exp } = jwt_decode(token) as Token;
    const user: User = {
      id,
      email,
      created: new Date(created),
      issued: new Date(iat),
      expires: new Date(exp),
    };
    yield put(setCurrentUser(user));
  } catch (err) {
    if (err.response) {
      notify({ message: err.response.data.error.message });
      yield put(signupUserError());
    } else {
      notify({ message: 'Internal server error occurred.' });
      yield put(signupUserError());
    }
  }
}

function* authWatcherSaga() {
  yield takeLatest(AuthActionTypes.SIGNUP_USER, signupSaga);
  yield takeLatest(AuthActionTypes.LOGIN_USER, loginSaga);
}

function* authSaga() {
  yield all([fork(authWatcherSaga)]);
}

export default authSaga;
