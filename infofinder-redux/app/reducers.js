import {SEARCH_TEXT, RECEIVE_RESULTS} from './actions';

const initialState = {
  searchText: '',
  results: []
};

const infoFinderApp = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TEXT:
      return {
        ...state,
        searchText: action.searchText
      };

    case RECEIVE_RESULTS:
      return {
        ...state,
        results: action.results
      };

    default:
      return state;
  }
};

export default infoFinderApp;