import { User, SignupDTO, LoginDTO } from '../../interfaces';
import { Action } from 'redux';

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
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
}

export interface SignupUserFail extends Action {
  type: AuthActionTypes.SIGNUP_USER_FAIL;
}

export interface LoginUser extends Action {
  type: AuthActionTypes.LOGIN_USER;
  payload: LoginDTO;
}

export interface LoginUserSuccess extends Action {
  type: AuthActionTypes.LOGIN_USER_SUCCESS;
}

export interface LoginUserFail extends Action {
  type: AuthActionTypes.LOGIN_USER_FAIL;
}

export interface SetCurrentUser extends Action {
  type: AuthActionTypes.SET_CURRENT_USER;
  payload: User;
}

export interface LogoutUser extends Action {
  type: AuthActionTypes.LOGOUT_USER;
}

export type AuthAction =
  | SignupUser
  | SignupUserSuccess
  | SignupUserFail
  | LoginUser
  | LoginUserSuccess
  | LoginUserFail
  | SetCurrentUser
  | LogoutUser;
