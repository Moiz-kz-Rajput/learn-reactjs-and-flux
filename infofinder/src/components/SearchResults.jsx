import React from 'react';
import Result from './Result.jsx';

class SearchResults extends React.Component {
  render() {
    let results = '';
    if (this.props.searchText !== '') {
      results = <h2 className="page-header">Results for {this.props.searchText}</h2>;
    }
    return (
      <div>
        {results}
        {
          this.props.results.map((result, index) => {
            return (
              <Result result={result} key={index} />
            )
          })
        }
      </div>
    )
  }
}

export default SearchResults;