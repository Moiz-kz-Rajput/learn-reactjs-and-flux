import React from 'react';
import AppStore from '../stores/AppStore';
import AddForm from './AddForm.jsx';
import ContactList from './ContactList.jsx';

function getAppState() {
  return {
    contacts: AppStore.getContacts()
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
    return (
      <div>
        <AddForm />
        <ContactList contacts={this.state.contacts} />
      </div>
    )
  }

  _onChange = () => {
    this.setState(getAppState());
  };
}

export default App;