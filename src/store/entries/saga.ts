import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { EntriesActionTypes } from './types';
import { allEntries } from '../../services';

function* allEntriesSaga() {
  try {
    const { data } = yield call(allEntries);
    const { data: entries } = data;
    console.log(entries);
  } catch (err) {
    console.log(err.response.data.error.message);
  }
}

function* entriesWatcherSaga() {
  yield takeLatest(EntriesActionTypes.ALL_ENTRIES, allEntriesSaga);
}

function* entriesSaga() {
  yield all([fork(entriesWatcherSaga)]);
}

export default entriesSaga;
