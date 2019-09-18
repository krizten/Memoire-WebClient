import { EntriesState } from './types';

export const getAllEntries = (state: EntriesState) => state.entries;
export const getCurrentEntry = (state: EntriesState) => state.currentEntry;
export const getLoading = (state: EntriesState) => state.loading;
