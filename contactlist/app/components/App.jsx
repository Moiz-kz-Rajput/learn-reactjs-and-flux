import React from 'react';
import AppStore from '../stores/AppStore';
import AddForm from './AddForm.jsx';
import EditForm from './EditForm.jsx';
import ContactList from './ContactList.jsx';

function getAppState() {
  return {
    contacts: AppStore.getContacts(),
    contactToEdit: AppStore.getContactToEdit()
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  render() {
    let form = <AddForm />;
    if (this.state.contactToEdit !== '') {
      form = <EditForm contactToEdit={this.state.contactToEdit} />;
    }
    return (
      <div>
        {form}
        <ContactList contacts={this.state.contacts} />
      </div>
    )
  }

  _onChange = () => {
    this.setState(getAppState());
  };
}

export default App;