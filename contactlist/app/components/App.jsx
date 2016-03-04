import React from 'react';
import AppStore from '../stores/AppStore';
import AddForm from './AddForm.jsx';

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
    console.log(this.state.contacts);
    return (
      <div>
        <AddForm />
      </div>
    )
  }

  _onChange = () => {
    this.setState(getAppState());
  };
}

export default App;