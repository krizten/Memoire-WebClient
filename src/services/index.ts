import axios from 'axios';

import { environments } from '../constants';

// Axios Global Defaults
axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? `${environments.production.server}`
    : `${environments.development.server}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const setAuthHeader = (token?: string) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export * from './auth';
export * from './api';
