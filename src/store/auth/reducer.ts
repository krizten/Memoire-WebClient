import { AuthState, AuthActionTypes, AuthAction } from './types';

export const initialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  errors: undefined,
};

const reducer = (state = initialAuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SIGNUP_USER:
      return { ...state, loading: true };
    case AuthActionTypes.SIGNUP_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false };
    case AuthActionTypes.SIGNUP_USER_FAIL:
      return { ...state, errors: action.payload, loading: false };
    default:
      return state;
  }
};

export { reducer as authReducer };
