import React from 'react';
import AppActions from '../actions/AppActions';

class SearchForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.searchText} className="well">
          <div className="form-group">
            <label>Search for something...</label>
            <input type="text" className="form-control" ref="text" />
          </div>
        </form>
      </div>
    )
  }

  searchText = (e) => {
    e.preventDefault();

    const search = {
      text: this.refs.text.value.trim()
    };

    AppActions.searchText(search);
  };
}

export default SearchForm;