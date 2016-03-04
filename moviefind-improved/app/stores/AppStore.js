import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import {EventEmitter} from 'events';
import searchMovies from '../utils/appAPI';

var CHANGE_EVENT = 'change';

var _movies = [];

class AppStoreClass extends EventEmitter {
  setMovieResults(movies) {
    _movies = movies;
  }

  getMovieResults() {
    return _movies;
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
    case AppConstants.SEARCH_MOVIES:
      searchMovies(action.movie);
      AppStore.emit(CHANGE_EVENT);
      break;
    case AppConstants.RECEIVE_MOVIE_RESULTS:
      AppStore.setMovieResults(action.movies);
      AppStore.emit(CHANGE_EVENT);
      break;
  }

  return true;
});

export default AppStore;