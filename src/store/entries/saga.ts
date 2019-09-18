import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { notify } from '../../utils';
import { EntriesActionTypes } from './types';
import { allEntries, addEntry } from '../../services';
import { Entry } from '../../interfaces';
import { getAllEntriesSuccess, getAllEntriesError, addEntrySuccess } from './actions';

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

function* addEntrySaga({ payload }: ReturnType<any>) {
  try {
    const response = yield call(addEntry, payload);
    console.log(response.data);
    // yield put(addEntrySuccess())
  } catch (err) {
    //
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
