import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

class AppActions {
  static searchMovies(movie) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SEARCH_MOVIES,
      movie: movie
    });
  };

  static receiveMovieResults(movies) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_MOVIE_RESULTS,
      movies: movies
    });
  }
}

export default AppActions;
