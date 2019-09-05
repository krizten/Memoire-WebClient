import axios from 'axios';
import { SignupDTO, LoginDTO, ForgotPasswordDTO } from '../interfaces';
import { authenticationEndpoints } from '../constants';

export const register = async (payload: SignupDTO) => {
  return await axios({
    url: `/${authenticationEndpoints.SIGNUP}`,
    method: 'POST',
    data: JSON.stringify(payload),
  });
};

export const login = async (payload: LoginDTO) => {
  return await axios({
    url: `/${authenticationEndpoints.LOGIN}`,
    method: 'POST',
    data: JSON.stringify(payload),
  });
};

export const checkUser = async (token: string) => {
  return await axios({
    url: `/${authenticationEndpoints.SELF}`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const forgotPassword = async (payload: ForgotPasswordDTO) => {
  return await axios({
    url: `/${authenticationEndpoints.FORGOT_PASSWORD}`,
    method: 'POST',
    data: JSON.stringify(payload),
  });
};
