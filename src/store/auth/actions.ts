import { action } from 'typesafe-actions';

import { AuthActionTypes } from './types';
import { SignupDTO, User, LoginDTO } from '../../interfaces';

export const signupUser = (payload: SignupDTO) => action(AuthActionTypes.SIGNUP_USER, payload);
export const signupUserSuccess = () => action(AuthActionTypes.SIGNUP_USER_SUCCESS);
export const signupUserError = () => action(AuthActionTypes.SIGNUP_USER_FAIL);

export const loginUser = (payload: LoginDTO) => action(AuthActionTypes.LOGIN_USER, payload);
export const loginUserSuccess = () => action(AuthActionTypes.LOGIN_USER_SUCCESS);
export const loginUserError = () => action(AuthActionTypes.LOGIN_USER_FAIL);

export const setCurrentUser = (payload: User) => action(AuthActionTypes.SET_CURRENT_USER, payload);