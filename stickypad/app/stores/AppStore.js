import {EventEmitter} from 'events';
import AppDispatcher from '../dispatchers/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _notes = [];

class AppStoreClass extends EventEmitter {
  addNote(note) {
    _notes.push(note);
  }

  getNotes() {
    return _notes;
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
      console.log('adding note');
      // Store save
      AppStore.addNote(action.note);
      // API save
      // Emit change
      AppStore.emit(CHANGE_EVENT);
      break;
  }

  return true;
});

export default AppStore;