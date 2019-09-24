import { combineReducers, Dispatch, Action, AnyAction } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { fork, all } from 'redux-saga/effects';

import { AuthState } from './auth/types';
import { authReducer } from './auth/reducer';
import authSaga from './auth/sagas';
import { EntriesState } from './entries/types';
import { entriesReducer } from './entries/reducer';
import entriesSaga from './entries/sagas';
import { AccountState } from './account/types';
import { accountReducer } from './account/reducer';
import accountSaga from './account/sagas';

export interface AppState {
  auth: AuthState;
  entries: EntriesState;
  account: AccountState;
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    entries: entriesReducer,
    account: accountReducer,
  });

export function* rootSaga() {
  yield all([fork(authSaga), fork(entriesSaga), fork(accountSaga)]);
}
