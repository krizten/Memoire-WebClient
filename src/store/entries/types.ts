import { Action } from 'redux';

export interface EntriesState {}

export enum EntriesActionTypes {
  ALL_ENTRIES = '@@entries/ALL_ENTRIES',
  ALL_ENTRIES_SUCCESS = '@@entries/ALL_ENTRIES_SUCCESS',
}

export interface AllEntries extends Action {
  type: EntriesActionTypes.ALL_ENTRIES;
}

export interface AllEntriesSuccess extends Action {
  type: EntriesActionTypes.ALL_ENTRIES_SUCCESS;
}

export type EntriesAction = AllEntries | AllEntriesSuccess;
