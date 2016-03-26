import React from 'react';

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
}

export default SearchForm;