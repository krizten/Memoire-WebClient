import { action } from 'typesafe-actions';
import { AccountActionTypes } from './types';

import { Account } from '../../interfaces';

export const fetchAccount = () => action(AccountActionTypes.ACCOUNT_FETCH);
export const fetchAccountSuccess = (payload: Account) =>
  action(AccountActionTypes.ACCOUNT_FETCH_SUCCESS, payload);
export const fetchAccountFail = () => action(AccountActionTypes.ACCOUNT_FETCH_FAIL);
