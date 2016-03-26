import {combineReducers} from 'redux';
import {SEARCH_TEXT, RECEIVE_RESULTS} from './actions';

const search = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_TEXT:
      return {
        ...state,
        search: action.search
      };
    default:
      return state;
  }
};

const receive = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_RESULTS:
      return {
        ...state,
        results: action.results
      };
    default:
      return state;
  }
};

const infoFinderApp = combineReducers({
  search,
  receive
});

export default infoFinderApp;