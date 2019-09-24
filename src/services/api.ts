import axios from 'axios';
import { entriesEndpoints } from '../constants';
import { EntryDTO } from '../interfaces';

const allEntries = async () => {
  return await axios({
    url: `/${entriesEndpoints.ENTRIES}`,
    method: 'GET',
  });
};

const addEntry = async (payload: EntryDTO) => {
  return await axios({
    url: `/${entriesEndpoints.ENTRIES}`,
    method: 'POST',
    data: JSON.stringify(payload),
  });
};

const editEntry = async (payload: { id: string; data: Partial<EntryDTO> }) => {
  return await axios({
    url: `/${entriesEndpoints.SINGLE_ENTRY(payload.id)}`,
    method: 'PUT',
    data: payload.data,
  });
};

const deleteEntry = async (id: string) => {
  return await axios({
    url: `/${entriesEndpoints.SINGLE_ENTRY(id)}`,
    method: 'DELETE',
  });
};

export { allEntries, addEntry, editEntry, deleteEntry };
