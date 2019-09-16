import { EntriesState, EntriesAction, EntriesActionTypes } from './types';

export const initialEntriesState: EntriesState = {
  entries: [],
  currentEntry: null,
};

const reducer = (state = initialEntriesState, action: EntriesAction): EntriesState => {
  switch (action.type) {
    case EntriesActionTypes.ALL_ENTRIES_SUCCESS:
      return { ...state, entries: action.payload };
    case EntriesActionTypes.SET_CURRENT_ENTRY:
      return { ...state, currentEntry: action.payload };
    default:
      return state;
  }
};

export { reducer as entriesReducer };
