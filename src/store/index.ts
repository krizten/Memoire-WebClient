import { combineReducers, Dispatch, Action, AnyAction } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { fork, all } from 'redux-saga/effects';

import { AuthState } from './auth/types';
import { authReducer } from './auth/reducer';
import authSaga from './auth/saga';

export interface AppState {
  auth: AuthState;
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    auth: authReducer,
    router: connectRouter(history),
  });

export function* rootSaga() {
  yield all([fork(authSaga)]);
}
