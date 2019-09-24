import { AccountState, AccountAction, AccountActionTypes } from './types';

export const initialAccountState: AccountState = {
  account: undefined,
  loading: false,
  status: false,
};

const reducer = (state = initialAccountState, action: AccountAction): AccountState => {
  switch (action.type) {
    case AccountActionTypes.ACCOUNT_FETCH:
      return { ...state, loading: false, status: false };
    case AccountActionTypes.ACCOUNT_FETCH_SUCCESS:
      return { ...state, account: action.payload, status: true, loading: false };
    case AccountActionTypes.ACCOUNT_FETCH_FAIL:
      return { ...state, status: false, loading: false };
    default:
      return state;
  }
};

export { reducer as accountReducer };
