import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { notify } from '../../utils';
import { AccountActionTypes } from './types';
import { getAccount } from '../../services';
import { fetchAccountFail, fetchAccountSuccess } from './actions';
import { Account } from '../../interfaces';

function* fetchAccountSaga() {
  try {
    const { data } = yield call(getAccount);
    const account = data.data as Account;
    yield put(fetchAccountSuccess(account));
  } catch (err) {
    yield put(fetchAccountFail());
    if (err.response) {
      notify({ message: err.response.data.error.message });
    } else {
      notify({ message: 'Internal server error occurred.' });
    }
  }
}

function* accountWatcherSaga() {
  yield takeLatest(AccountActionTypes.ACCOUNT_FETCH, fetchAccountSaga);
}

function* accountSaga() {
  yield all([fork(accountWatcherSaga)]);
}
