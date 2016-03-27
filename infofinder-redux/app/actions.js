const SEARCH_TEXT = 'SEARCH_TEXT';
const RECEIVE_RESULTS = 'RECEIVE_RESULTS';

export const searchText = (search) => {
  return {
    type: SEARCH_TEXT,
    search: search
  };
};

export const receiveResults = (results) => {
  return {
    type: RECEIVE_RESULTS,
    results: results
  };
};