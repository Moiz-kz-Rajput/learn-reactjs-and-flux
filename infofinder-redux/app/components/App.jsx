import React from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center"><strong>Info</strong>Finder</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <SearchForm />
            <SearchResults />
          </div>
        </div>
      </div>
    )
  }
}

export default App;