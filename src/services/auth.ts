import axios from 'axios';
import { SignupDTO } from '../interfaces';
import { environments, authenticationEndpoints } from '../constants';

const url =
  process.env.NODE_ENV === 'production'
    ? `${environments.production.server}`
    : `${environments.development.server}`;

export const registerService = async (payload: SignupDTO) => {
  return await axios({
    url: `${url}/${authenticationEndpoints.SIGNUP}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: JSON.stringify(payload),
  });
};
