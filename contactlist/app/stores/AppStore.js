import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import {EventEmitter} from 'events';
import {saveContact, removeContact, updateContact} from '../utils/appAPI';

const CHANGE_EVENT = 'change';

let _contacts = [];
let _contactToEdit = '';

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

  removeContact(contactId) {
    let index = _contacts.findIndex(x => x.id === contactId);
    _contacts.splice(index, 1);
  }

  setContactToEdit(contact) {
    _contactToEdit = contact;
  }

  getContactToEdit() {
    return _contactToEdit;
  }

  updateContact(contact) {
    _contacts = _contacts.filter(x => x.id !== contact.id);
    _contacts.push(contact);
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
      // Store Save
      AppStore.saveContact(action.contact);
      // Save to API
      saveContact(action.contact);
      // Emit change
      AppStore.emit(CHANGE_EVENT);
      break;

    case AppConstants.RECEIVE_CONTACTS:
      AppStore.setContacts(action.contacts);
      // Emit change
      AppStore.emit(CHANGE_EVENT);
      break;

    case AppConstants.REMOVE_CONTACT:
      AppStore.removeContact(action.contactId);
      // API remove
      removeContact(action.contactId);
      // Emit change
      AppStore.emit(CHANGE_EVENT);
      break;

    case AppConstants.EDIT_CONTACT:
      AppStore.setContactToEdit(action.contact);
      // Emit change
      AppStore.emit(CHANGE_EVENT);
      break;

    case AppConstants.UPDATE_CONTACT:
      AppStore.updateContact(action.contact);
      // API Update
      updateContact(action.contact);
      // Emit change
      AppStore.emit(CHANGE_EVENT);
      break;
  }

  return true;
});

export default AppStore;