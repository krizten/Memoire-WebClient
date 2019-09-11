import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { notify } from '../../utils';
import { EntriesActionTypes } from './types';
import { allEntries } from '../../services';
import { Entry } from '../../interfaces';
import { getAllEntriesSuccess, getAllEntriesError } from './actions';

function* allEntriesSaga() {
  try {
    const { data } = yield call(allEntries);
    const entries = data.data as Entry[];
    yield put(getAllEntriesSuccess(entries));
  } catch (err) {
    if (err.response) {
      yield put(getAllEntriesError());
      notify({ message: err.response.data.error.message });
    } else {
      yield put(getAllEntriesError());
      notify({ message: 'Internal server error occurred.' });
    }
  }
}

function* entriesWatcherSaga() {
  yield takeLatest(EntriesActionTypes.ALL_ENTRIES, allEntriesSaga);
}

function* entriesSaga() {
  yield all([fork(entriesWatcherSaga)]);
}

export default entriesSaga;
