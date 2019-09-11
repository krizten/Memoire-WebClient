import { action } from 'typesafe-actions';
import { EntriesActionTypes } from './types';

export const allEntries = () => action(EntriesActionTypes.ALL_ENTRIES);
