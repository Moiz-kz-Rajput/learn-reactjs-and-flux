import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import AppAPI from '../utils/appAPI';

const CHANGE_EVENT = 'change';

let _searchText = '';

class AppStoreClass extends EventEmitter {
  setSearchText(search) {
    _searchText = search.text;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
}

const AppStore = new AppStoreClass();

AppDispatcher.register((payload) => {
  const action = payload.action;

  switch (action.actionType) {
    case AppConstants.SEARCH_TEXT:
      AppAPI.searchText(action.search);
      AppStore.setSearchText(action.search);
      AppStore.emitChange(CHANGE_EVENT);
      break;
  }

  return true;
});
export default AppStore;