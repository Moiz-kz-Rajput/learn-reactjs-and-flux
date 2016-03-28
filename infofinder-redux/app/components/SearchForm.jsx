import React from 'react';
import {connect} from 'react-redux';
import {searchText} from '../actions';

let SearchForm = ({dispatch}) => {
  let input;

  return (
    <div>
      <form onSubmit={(e) => {
          e.preventDefault();
          dispatch(searchText(input.value));
          input.value = '';
        }} className="well">
        <div className="form-group has-feedback">
          <label>Search for something...</label>
          <input type="text" className="form-control" ref={node => {input = node;}}/>
          <span className="glyphicon glyphicon-search form-control-feedback" />
        </div>
      </form>
    </div>
  )
};
SearchForm = connect()(SearchForm);
export default SearchForm;