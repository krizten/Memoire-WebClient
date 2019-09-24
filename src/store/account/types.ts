import { Action } from 'redux';

import { Account } from '../../interfaces';

export interface AccountState {
  account?: Account;
  loading: boolean;
  status: boolean;
}

export enum AccountActionTypes {
  ACCOUNT_FETCH = '@@account/ACCOUNT_FETCH',
  ACCOUNT_FETCH_SUCCESS = '@@account/ACCOUNT_FETCH_SUCCESS',
  ACCOUNT_FETCH_FAIL = '@@account/ACCOUNT_FETCH_FAIL',
}

export interface AccountFetch extends Action {
  type: AccountActionTypes.ACCOUNT_FETCH;
}

export interface AccountFetchSuccess extends Action {
  type: AccountActionTypes.ACCOUNT_FETCH_SUCCESS;
  payload: Account;
}

export interface AccountFetchFail extends Action {
  type: AccountActionTypes.ACCOUNT_FETCH_FAIL;
}

export type AccountAction = AccountFetch | AccountFetchSuccess | AccountFetchFail;
