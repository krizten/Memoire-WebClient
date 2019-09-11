import { EntriesState, EntriesAction, EntriesActionTypes } from './types';

export const initialEntriesState: EntriesState = {};

const reducer = (state = initialEntriesState, action: EntriesAction) => {
  switch (action.type) {
    // case EntriesActionTypes.ALL_ENTRIES:
    //   break;
    default:
      return state;
  }
};

export { reducer as entriesReducer };
