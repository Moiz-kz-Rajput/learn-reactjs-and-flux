import React from 'react';
import AppStore from '../stores/AppStore';
import SearchForm from './SearchForm.jsx';
import SearchResults from './SearchResults.jsx';

function getAppState() {
  return {
    results: AppStore.getResults(),
    searchText: AppStore.getSearchText()
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
        <SearchForm />
        <SearchResults searchText={this.state.searchText} results={this.state.results} />
      </div>
    )
  }

  _onChange = () => {
    this.setState(getAppState());
  };
}

export default App;