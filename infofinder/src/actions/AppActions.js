import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

class AppActions {
  static searchText(search) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SEARCH_TEXT,
      search: search
    });
  }

  static receiveResults(results) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_RESULTS,
      results: results
    });
  }
}

export default AppActions;