import { Action } from 'redux';
import { Entry } from '../../interfaces';

export interface EntriesState {
  entries: Entry[];
  currentEntry: Entry | null;
}

export enum EntriesActionTypes {
  ALL_ENTRIES = '@@entries/ALL_ENTRIES',
  ALL_ENTRIES_SUCCESS = '@@entries/ALL_ENTRIES_SUCCESS',
  ALL_ENTRIES_FAIL = '@@entries/ALL_ENTRIES_FAIL',
  SET_CURRENT_ENTRY = '@@entries/SET_CURRENT_ENTRY',
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

export type EntriesAction = AllEntries | AllEntriesSuccess | AllEntriesFail | SetCurrentEntry;
