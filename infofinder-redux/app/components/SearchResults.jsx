import React from 'react';
import {connect} from 'react-redux';
import {receiveResults} from '../actions';

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

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText,
    results: state.results
  }
};

export default connect(
  mapStateToProps,
  {receiveResults}
)(SearchResults);