import {EventEmitter} from 'events';
import AppDispatcher from '../dispatchers/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import * as AppAPI from '../utils/appAPI';

const CHANGE_EVENT = 'change';

let _notes = [];

class AppStoreClass extends EventEmitter {
  addNote(note) {
    _notes.push(note);
  }

  getNotes() {
    return _notes;
  }

  setNotes(notes) {
    _notes = notes;
  }

  removeNote(noteId) {
    _notes = _notes.filter(x => x._id.$oid !== noteId);
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
    case AppConstants.ADD_NOTE:
      // API save
      AppAPI.addNote(action.note);
      // Emit change
      AppStore.emit(CHANGE_EVENT);
      break;

    case AppConstants.RECEIVE_NOTES:
      // Store set
      AppStore.setNotes(action.notes);
      // Emit change
      AppStore.emit(CHANGE_EVENT);
      break;

    case AppConstants.REMOVE_NOTE:
      // Store remove
      AppStore.removeNote(action.noteId);
      // API remove
      AppAPI.removeNote(action.noteId);
      // Emit change
      AppStore.emit(CHANGE_EVENT);
      break;
  }

  return true;
});

export default AppStore;