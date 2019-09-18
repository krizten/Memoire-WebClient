import { EntriesState, EntriesAction, EntriesActionTypes } from './types';
import { Entry } from '../../interfaces';

export const initialEntriesState: EntriesState = {
  entries: [],
  currentEntry: null,
  loading: false,
  status: false,
};

const reducer = (state = initialEntriesState, action: EntriesAction): EntriesState => {
  switch (action.type) {
    case EntriesActionTypes.ALL_ENTRIES_SUCCESS:
      return { ...state, entries: action.payload };
    case EntriesActionTypes.SET_CURRENT_ENTRY:
      return { ...state, currentEntry: action.payload };
    case EntriesActionTypes.ADD_ENTRY:
      return { ...state, loading: true, status: false };
    case EntriesActionTypes.ADD_ENTRY_SUCCESS:
      return {
        ...state,
        entries: addNewEntry(action.payload, state.entries),
        loading: false,
        status: true,
      };
    case EntriesActionTypes.ADD_ENTRY_FAIL:
      return { ...state, loading: false, status: false };
    default:
      return state;
  }
};

function addNewEntry(entry: Entry, entries: Entry[]): Entry[] {
  return [...entries, entry];
}

export { reducer as entriesReducer };
