import { action } from 'typesafe-actions';

import { AuthActionTypes } from './types';
import { SignupDTO, User } from '../../interfaces';

export const signupUser = (payload: SignupDTO) => action(AuthActionTypes.SIGNUP_USER, payload);

export const signupUserSuccess = (user: User) => action(AuthActionTypes.SIGNUP_USER_SUCCESS, user);

export const signupUserError = (message: string) =>
  action(AuthActionTypes.SIGNUP_USER_FAIL, message);
