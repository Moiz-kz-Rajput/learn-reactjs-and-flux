import React from 'react';
import SearchForm from './SearchForm.jsx';
import SearchResults from './SearchResults.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchForm />
        <SearchResults />
      </div>
    )
  }
}

export default App;