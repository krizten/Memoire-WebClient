import { User, SignupDTO } from '../../interfaces';
import { Action } from 'redux';

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  errors?: string;
}

export enum AuthActionTypes {
  SIGNUP_USER = '@@auth/SIGNUP_USER',
  SIGNUP_USER_SUCCESS = '@@auth/SIGNUP_USER_SUCCESS',
  SIGNUP_USER_FAIL = '@@auth/SIGNUP_USER_FAIL',
  LOGIN_USER = '@@auth/LOGIN_USER',
  LOGIN_USER_SUCCESS = '@@auth/LOGIN_USER_SUCCESS',
  LOGIN_USER_FAIL = '@@auth/LOGIN_USER_FAIL',
  SET_CURRENT_USER = '@@auth/SET_CURRENT_USER',
  LOGOUT_USER = '@@auth/LOGOUT_USER',
}

export interface SignupUser extends Action {
  type: AuthActionTypes.SIGNUP_USER;
  payload: SignupDTO;
}

export interface SignupUserSuccess extends Action {
  type: AuthActionTypes.SIGNUP_USER_SUCCESS;
  payload: User;
}

export interface SignupUserFail extends Action {
  type: AuthActionTypes.SIGNUP_USER_FAIL;
  payload: string;
}

export type AuthAction = SignupUser | SignupUserSuccess | SignupUserFail;
