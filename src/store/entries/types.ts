import { Action } from 'redux';
import { Entry, EntryDTO } from '../../interfaces';

export interface EntriesState {
  entries: Entry[];
  currentEntry: Entry | null;
}

export enum EntriesActionTypes {
  ALL_ENTRIES = '@@entries/ALL_ENTRIES',
  ALL_ENTRIES_SUCCESS = '@@entries/ALL_ENTRIES_SUCCESS',
  ALL_ENTRIES_FAIL = '@@entries/ALL_ENTRIES_FAIL',
  SET_CURRENT_ENTRY = '@@entries/SET_CURRENT_ENTRY',
  ADD_ENTRY = '@@entries/ADD_ENTRY',
  ADD_ENTRY_SUCCESS = '@@entries/ADD_ENTRY_SUCCESS',
  ADD_ENTRY_FAIL = '@@entries/ADD_ENTRY_FAIL',
}

export interface AllEntries extends Action {
  type: EntriesActionTypes.ALL_ENTRIES;
}

export interface AllEntriesSuccess extends Action {
  type: EntriesActionTypes.ALL_ENTRIES_SUCCESS;
  payload: Entry[];
}

export interface AllEntriesFail extends Action {
  type: EntriesActionTypes.ALL_ENTRIES_FAIL;
}

export interface SetCurrentEntry extends Action {
  type: EntriesActionTypes.SET_CURRENT_ENTRY;
  payload: Entry;
}

export interface AddEntry extends Action {
  type: EntriesActionTypes.ADD_ENTRY;
  payload: EntryDTO;
}

export interface AddEntrySuccess extends Action {
  type: EntriesActionTypes.ADD_ENTRY_SUCCESS;
  payload: Entry;
}

export interface AddEntryFail extends Action {
  type: EntriesActionTypes.ADD_ENTRY_FAIL;
}

export type EntriesAction =
  | AllEntries
  | AllEntriesSuccess
  | AllEntriesFail
  | SetCurrentEntry
  | AddEntry
  | AddEntrySuccess
  | AddEntryFail;
