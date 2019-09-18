import axios from 'axios';
import { entriesEndpoints } from '../constants';
import { EntryDTO } from '../interfaces';

export const allEntries = async () => {
  return await axios({
    url: `/${entriesEndpoints.ENTRIES}`,
    method: 'GET',
  });
};

export const addEntry = async (payload: EntryDTO) => {
  return await axios({
    url: `/${entriesEndpoints.ENTRIES}`,
    method: 'POST',
    data: JSON.stringify(payload),
  });
};
