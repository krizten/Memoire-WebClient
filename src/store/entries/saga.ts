import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { notify } from '../../utils';
import { EntriesActionTypes } from './types';
import { allEntries, addEntry } from '../../services';
import { Entry } from '../../interfaces';
import {
  getAllEntriesSuccess,
  getAllEntriesError,
  addEntrySuccess,
  addEntryError,
} from './actions';

function* allEntriesSaga() {
  try {
    const { data } = yield call(allEntries);
    const entries = data.data as Entry[];
    yield put(getAllEntriesSuccess(entries));
  } catch (err) {
    yield put(getAllEntriesError());
    if (err.response) {
      notify({ message: err.response.data.error.message });
    } else {
      notify({ message: 'Internal server error occurred.' });
    }
  }
}

function* addEntrySaga({ payload }: ReturnType<any>) {
  try {
    const response = yield call(addEntry, payload);
    const entry: Entry = response.data.data;
    notify({ message: response.data.summary });
    yield put(addEntrySuccess(entry));
  } catch (err) {
    yield put(addEntryError());
    if (err.response) {
      notify({ message: err.response.data.error.message });
    } else {
      notify({ message: 'Internal server error occurred.' });
    }
  }
}

function* entriesWatcherSaga() {
  yield takeLatest(EntriesActionTypes.ALL_ENTRIES, allEntriesSaga);
  yield takeLatest(EntriesActionTypes.ADD_ENTRY, addEntrySaga);
}

function* entriesSaga() {
  yield all([fork(entriesWatcherSaga)]);
}

export default entriesSaga;
