import { EntriesState, EntriesAction, EntriesActionTypes } from './types';
import { Entry } from '../../interfaces';

export const initialEntriesState: EntriesState = {
  entries: [],
  currentEntry: undefined,
  loading: false,
  status: false,
};

const reducer = (state = initialEntriesState, action: EntriesAction): EntriesState => {
  switch (action.type) {
    case EntriesActionTypes.ALL_ENTRIES:
      return { ...state, loading: false, status: false };
    case EntriesActionTypes.ALL_ENTRIES_SUCCESS:
      return { ...state, entries: action.payload };
    case EntriesActionTypes.SET_CURRENT_ENTRY:
      return { ...state, currentEntry: action.payload };
    case EntriesActionTypes.ADD_ENTRY:
      return { ...state, loading: true, status: false };
    case EntriesActionTypes.ADD_ENTRY_SUCCESS:
      return {
        ...state,
        entries: addEntry(action.payload, state.entries),
        loading: false,
        status: true,
      };
    case EntriesActionTypes.ADD_ENTRY_FAIL:
      return { ...state, loading: false, status: false };
    case EntriesActionTypes.EDIT_ENTRY:
      return { ...state, loading: true, status: false };
    case EntriesActionTypes.EDIT_ENTRY_SUCCESS:
      return {
        ...state,
        entries: editEntry(action.payload, state.entries),
        loading: false,
        status: true,
      };
    case EntriesActionTypes.EDIT_ENTRY_FAIL:
      return { ...state, loading: false, status: false };
    case EntriesActionTypes.DELETE_ENTRY:
      return { ...state, loading: true, status: false };
    case EntriesActionTypes.DELETE_ENTRY_SUCCESS:
      return {
        ...state,
        entries: removeEntry(action.payload, state.entries),
        currentEntry: undefined,
        loading: false,
        status: true,
      };
    case EntriesActionTypes.DELETE_ENTRY_FAIL:
      return { ...state, loading: false, status: false };
    default:
      return state;
  }
};

function addEntry(entry: Entry, entries: Entry[]): Entry[] {
  return [...entries, entry];
}

function editEntry(entry: Entry, entries: Entry[]): Entry[] {
  return entries.map((item: Entry) => (item.id === entry.id ? entry : item));
}

function removeEntry(id: string, entries: Entry[]): Entry[] {
  return entries.filter((entry: Entry) => entry.id !== id);
}

export { reducer as entriesReducer };
