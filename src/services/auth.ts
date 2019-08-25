import axios from 'axios';
import { SignupDTO, LoginDTO } from '../interfaces';
import { authenticationEndpoints } from '../constants';

export const registerService = async (payload: SignupDTO) => {
  return await axios({
    url: `/${authenticationEndpoints.SIGNUP}`,
    method: 'POST',
    data: JSON.stringify(payload),
  });
};

export const loginService = async (payload: LoginDTO) => {
  return await axios({
    url: `/${authenticationEndpoints.LOGIN}`,
    method: 'POST',
    data: JSON.stringify(payload),
  });
};
