import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import {EventEmitter} from 'events';
import {saveContact} from '../utils/appAPI';

const CHANGE_EVENT = 'change';

let _contacts = [];

class AppStoreClass extends EventEmitter {
  saveContact(contact) {
    _contacts.push(contact);
  }

  getContacts() {
    return _contacts;
  }

  setContacts(contacts) {
    _contacts = contacts;
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
    case AppConstants.SAVE_CONTACT:
      console.log('Saving contact...');
      // Store Save
      AppStore.saveContact(action.contact);
      // Save to API
      saveContact(action.contact);
      // Emit change
      AppStore.emit(CHANGE_EVENT);
      break;
    case AppConstants.RECEIVE_CONTACTS:
      console.log('Receiving contacts...');
      AppStore.setContacts(action.contacts);
      // Emit change
      AppStore.emit(CHANGE_EVENT);
      break;
  }

  return true;
});

export default AppStore;