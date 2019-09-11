import axios from 'axios';
import { entriesEndpoints } from '../constants';

export const allEntries = async () => {
  return await axios({
    url: `/${entriesEndpoints.ENTRIES}`,
    method: 'GET',
  });
};
