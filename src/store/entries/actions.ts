import { action } from 'typesafe-actions';

import { EntriesActionTypes } from './types';
import { Entry, EntryDTO } from '../../interfaces';

export const getAllEntries = () => action(EntriesActionTypes.ALL_ENTRIES);
export const getAllEntriesSuccess = (payload: Entry[]) =>
  action(EntriesActionTypes.ALL_ENTRIES_SUCCESS, payload);
export const getAllEntriesError = () => action(EntriesActionTypes.ALL_ENTRIES_FAIL);

export const setCurrentEntry = (payload: Entry) =>
  action(EntriesActionTypes.SET_CURRENT_ENTRY, payload);

export const addEntry = (payload: EntryDTO) => action(EntriesActionTypes.ADD_ENTRY, payload);
export const addEntrySuccess = (payload: Entry) =>
  action(EntriesActionTypes.ADD_ENTRY_SUCCESS, payload);
export const addEntryError = () => action(EntriesActionTypes.ALL_ENTRIES_FAIL);

export const editEntry = (payload: { id: string; data: Partial<EntryDTO> }) =>
  action(EntriesActionTypes.EDIT_ENTRY, payload);
export const editEntrySuccess = (payload: Entry) =>
  action(EntriesActionTypes.EDIT_ENTRY_SUCCESS, payload);
export const editEntryError = () => action(EntriesActionTypes.EDIT_ENTRY_FAIL);

export const deleteEntry = (payload: string) => action(EntriesActionTypes.DELETE_ENTRY, payload);
export const deleteEntrySuccess = (payload: string) =>
  action(EntriesActionTypes.DELETE_ENTRY_SUCCESS, payload);
export const deleteEntryError = () => action(EntriesActionTypes.DELETE_ENTRY_FAIL);
