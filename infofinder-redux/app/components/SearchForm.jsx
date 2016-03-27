import React from 'react';
import {connect} from 'react-redux';
import {searchText} from '../actions';

let SearchForm = ({dispatch}) => {
  let input;

  return (
    <div>
      <form onSubmit={() => {
          dispatch(searchText(input.value));
        }} className="well">
        <div className="form-group">
          <label>Search for something...</label>
          <input type="text" className="form-control" ref={node => {input = node;}}/>
        </div>
      </form>
    </div>
  )
};
SearchForm = connect()(SearchForm);
export default SearchForm;