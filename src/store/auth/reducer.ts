import { AuthState, AuthActionTypes, AuthAction } from './types';
import { isEmpty } from '../../utils';

export const initialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
};

const reducer = (state = initialAuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SIGNUP_USER:
      return { ...state, loading: true };
    case AuthActionTypes.SIGNUP_USER_SUCCESS:
      return { ...state, loading: false };
    case AuthActionTypes.SIGNUP_USER_FAIL:
      return { ...state, loading: false };
    case AuthActionTypes.LOGIN_USER:
      return { ...state, loading: true };
    case AuthActionTypes.LOGIN_USER_SUCCESS:
      return { ...state, loading: false };
    case AuthActionTypes.SET_CURRENT_USER:
      return { ...state, user: action.payload, isAuthenticated: !isEmpty(action.payload) };
    default:
      return state;
  }
};

export { reducer as authReducer };
