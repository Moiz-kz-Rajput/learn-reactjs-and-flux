import AppDispatcher from '../dispatchers/AppDispatcher';
import AppConstants from '../constants/AppConstants';

class AppActions {
  static addNote(note) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_NOTE,
      note: note
    });
  }
}

export default AppActions;
