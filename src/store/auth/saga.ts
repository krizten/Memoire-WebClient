import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import jwt_decode from 'jwt-decode';

import { AuthActionTypes } from './types';
import {
  signupUserSuccess,
  signupUserError,
  loginUser,
  loginUserSuccess,
  setCurrentUser,
  forgotPasswordSuccess,
  forgotPasswordError,
} from './actions';
import { register, login, setAuthHeader, forgotPassword, checkUser } from '../../services';
import { notify } from '../../utils';
import { Token, User } from '../../interfaces';

function* signupSaga({ payload }: ReturnType<any>) {
  try {
    yield call(register, payload);
    yield put(signupUserSuccess());

    // login here
    const { email, password } = payload;
    yield put(loginUser({ email, password }));
  } catch (err) {
    if (err.response) {
      yield put(signupUserError());
      notify({ message: err.response.data.error.message });
    } else {
      yield put(signupUserError());
      notify({ message: 'Internal server error occurred.' });
    }
  }
}

function* loginSaga({ payload }: ReturnType<any>) {
  try {
    const response = yield call(login, payload);
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
      yield put(signupUserError());
      notify({ message: err.response.data.error.message });
    } else {
      yield put(signupUserError());
      notify({ message: 'Internal server error occurred.' });
    }
  }
}

function* forgotPasswordSaga({ payload }: ReturnType<any>) {
  try {
    const response = yield call(forgotPassword, payload);
    const message = response.data.summary;
    yield put(forgotPasswordSuccess());
    notify({ message });
  } catch (err) {
    if (err.response) {
      yield put(forgotPasswordError());
      notify({ message: err.response.data.error.message });
    } else {
      yield put(forgotPasswordError());
      notify({ message: 'Internal server error occurred.' });
    }
  }
}

function* initialUserSaga({ payload }: ReturnType<any>) {
  try {
    const response = yield call(checkUser, payload);
    const { data } = response.data;
    const { created } = data;
    setAuthHeader(payload);
    const { id, email, iat, exp } = jwt_decode(payload) as Token;
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
    } else {
      notify({ message: 'Internal server error occurred.' });
    }
    window.localStorage && localStorage.removeItem('user_access');
  }
}

function* authWatcherSaga() {
  yield takeLatest(AuthActionTypes.SET_INITIAL_USER, initialUserSaga);
  yield takeLatest(AuthActionTypes.SIGNUP_USER, signupSaga);
  yield takeLatest(AuthActionTypes.LOGIN_USER, loginSaga);
  yield takeLatest(AuthActionTypes.FORGOT_PASSWORD, forgotPasswordSaga);
}

function* authSaga() {
  yield all([fork(authWatcherSaga)]);
}

export default authSaga;
