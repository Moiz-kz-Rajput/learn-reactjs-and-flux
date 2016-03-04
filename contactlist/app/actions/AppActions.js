import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

class AppActions {
  static saveContact(contact) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SAVE_CONTACT,
      contact: contact
    });
  }

  static receiveContacts(contacts) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_CONTACTS,
      contacts: contacts
    });
  }
}

export default AppActions;
