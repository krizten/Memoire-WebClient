import { EntriesState, EntriesAction, EntriesActionTypes } from './types';

export const initialEntriesState: EntriesState = {
  entries: [],
};

const reducer = (state = initialEntriesState, action: EntriesAction): EntriesState => {
  switch (action.type) {
    case EntriesActionTypes.ALL_ENTRIES_SUCCESS:
      return { ...state, entries: action.payload };
    default:
      return state;
  }
};

export { reducer as entriesReducer };
