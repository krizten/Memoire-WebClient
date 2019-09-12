import { action } from 'typesafe-actions';

import { EntriesActionTypes } from './types';
import { Entry } from '../../interfaces';

export const getAllEntries = () => action(EntriesActionTypes.ALL_ENTRIES);
export const getAllEntriesSuccess = (payload: Entry[]) =>
  action(EntriesActionTypes.ALL_ENTRIES_SUCCESS, payload);
export const getAllEntriesError = () => action(EntriesActionTypes.ALL_ENTRIES_FAIL);
